import ts from 'typescript'

export type StaticFileCall = {
  arg: string
  line: number
}

export type RuntimeAssetCall = {
  sourcePath: string
  line: number
}

export type RuntimeAssetEntry = {
  sourcePath: string
  url: string
  sha256: string
  byteSize: number
  contentType: string
}

export function parseSourceFileOrThrow(
  sourceFilePath: string,
  scriptKind = ts.ScriptKind.TSX,
): ts.SourceFile {
  const sourceText = ts.sys.readFile(sourceFilePath)
  if (!sourceText) {
    throw new Error(`Cannot read file: ${sourceFilePath}`)
  }

  const sourceFile = ts.createSourceFile(
    sourceFilePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    scriptKind,
  )

  // parseDiagnostics is an internal ts.SourceFile property that catches
  // syntax errors before type checking. We use it here because
  // ts.getPreEmitDiagnostics (the public API) runs full semantic analysis
  // including module resolution, which would reject files with unresolvable
  // imports even when only syntax validation is needed. This access is
  // safe: the property has existed since TS 2.x, and the fallback below
  // handles the case where it becomes unavailable.
  const parseDiagnostics =
    (
      sourceFile as ts.SourceFile & {
        parseDiagnostics?: readonly ts.Diagnostic[]
      }
    ).parseDiagnostics ?? []

  if (parseDiagnostics.length > 0) {
    const messages = parseDiagnostics.map((d: ts.Diagnostic) => {
      const { line } = sourceFile.getLineAndCharacterOfPosition(d.start ?? 0)
      return `  ${sourceFilePath}:${line + 1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`
    })
    throw new Error(
      `Parse validation failed for ${sourceFilePath} with ${parseDiagnostics.length} error(s):\n${messages.join('\n')}`,
    )
  }

  return sourceFile
}

export function parseStaticFileCalls(sourceFilePath: string): StaticFileCall[] {
  const sourceFile = parseSourceFileOrThrow(sourceFilePath)

  const results: StaticFileCall[] = []

  function visit(node: ts.Node) {
    if (!ts.isCallExpression(node)) {
      ts.forEachChild(node, visit)
      return
    }

    if (
      !ts.isIdentifier(node.expression) ||
      node.expression.text !== 'staticFile'
    ) {
      ts.forEachChild(node, visit)
      return
    }

    if (node.arguments.length !== 1) {
      const { line } = sourceFile.getLineAndCharacterOfPosition(
        node.getStart(sourceFile),
      )
      throw new Error(
        `staticFile() at ${sourceFilePath}:${line + 1} must have exactly one string literal argument, got ${node.arguments.length} arguments`,
      )
    }

    const arg = node.arguments[0]
    if (!ts.isStringLiteral(arg) && !ts.isNoSubstitutionTemplateLiteral(arg)) {
      const { line } = sourceFile.getLineAndCharacterOfPosition(
        node.getStart(sourceFile),
      )
      throw new Error(
        `staticFile() at ${sourceFilePath}:${line + 1} has a dynamic argument; only static string literals are allowed`,
      )
    }

    const { line } = sourceFile.getLineAndCharacterOfPosition(
      node.getStart(sourceFile),
    )
    results.push({ arg: arg.text, line: line + 1 })

    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return results
}

function unwrapExpression(expr: ts.Expression): ts.Expression {
  if (ts.isAsExpression(expr) || ts.isSatisfiesExpression(expr)) {
    return unwrapExpression(expr.expression)
  }
  return expr
}

function getPropertyNameText(name: ts.PropertyName): string | undefined {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name)) {
    return name.text
  }
  if (ts.isNumericLiteral(name)) {
    return name.text
  }
  return undefined
}

export function parseRuntimeAssetsModule(
  sourceFilePath: string,
): Map<string, string> {
  const sourceFile = parseSourceFileOrThrow(sourceFilePath, ts.ScriptKind.TS)
  let runtimeAssetsObject: ts.ObjectLiteralExpression | undefined

  ts.forEachChild(sourceFile, (node) => {
    if (!ts.isVariableStatement(node)) return
    if (!node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) {
      return
    }

    for (const decl of node.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name) || decl.name.text !== 'runtimeAssets') {
        continue
      }
      if (!decl.initializer) {
        throw new Error(`runtimeAssets in ${sourceFilePath} has no initializer`)
      }

      const initializer = unwrapExpression(decl.initializer)
      if (!ts.isObjectLiteralExpression(initializer)) {
        throw new Error(`runtimeAssets in ${sourceFilePath} must be an object`)
      }
      runtimeAssetsObject = initializer
    }
  })

  if (!runtimeAssetsObject) {
    throw new Error(
      `No exported runtimeAssets object found in ${sourceFilePath}`,
    )
  }

  const entries = new Map<string, string>()
  for (const prop of runtimeAssetsObject.properties) {
    if (!ts.isPropertyAssignment(prop)) {
      throw new Error(
        `runtimeAssets in ${sourceFilePath} only supports property assignments`,
      )
    }

    const key = getPropertyNameText(prop.name)
    if (!key) {
      throw new Error(`runtimeAssets in ${sourceFilePath} has a non-static key`)
    }

    if (
      !ts.isStringLiteral(prop.initializer) &&
      !ts.isNoSubstitutionTemplateLiteral(prop.initializer)
    ) {
      throw new Error(
        `runtimeAssets entry "${key}" in ${sourceFilePath} must use a string literal URL`,
      )
    }

    entries.set(key, prop.initializer.text)
  }

  return entries
}

export function parseRuntimeAssetCalls(
  sourceFilePath: string,
): RuntimeAssetCall[] {
  const sourceFile = parseSourceFileOrThrow(sourceFilePath)
  const results: RuntimeAssetCall[] = []

  function visit(node: ts.Node) {
    if (!ts.isCallExpression(node)) {
      ts.forEachChild(node, visit)
      return
    }

    if (
      !ts.isIdentifier(node.expression) ||
      node.expression.text !== 'runtimeAsset'
    ) {
      ts.forEachChild(node, visit)
      return
    }

    if (node.arguments.length !== 1) {
      const { line } = sourceFile.getLineAndCharacterOfPosition(
        node.getStart(sourceFile),
      )
      throw new Error(
        `runtimeAsset() at ${sourceFilePath}:${line + 1} must have exactly one string literal argument, got ${node.arguments.length} arguments`,
      )
    }

    const arg = node.arguments[0]
    if (!ts.isStringLiteral(arg) && !ts.isNoSubstitutionTemplateLiteral(arg)) {
      const { line } = sourceFile.getLineAndCharacterOfPosition(
        node.getStart(sourceFile),
      )
      throw new Error(
        `runtimeAsset() at ${sourceFilePath}:${line + 1} has a dynamic argument; only static string literals are allowed`,
      )
    }

    const { line } = sourceFile.getLineAndCharacterOfPosition(
      node.getStart(sourceFile),
    )
    results.push({ sourcePath: arg.text, line: line + 1 })

    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return results
}

export function generateRuntimeAssetsModule(
  entries: RuntimeAssetEntry[],
): string {
  const sorted = [...entries].sort((a, b) =>
    a.sourcePath.localeCompare(b.sourcePath),
  )

  const lines: string[] = []
  lines.push('export const runtimeAssets = {')

  for (const entry of sorted) {
    lines.push(`  // ${entry.sourcePath}`)
    lines.push(`  '${entry.sourcePath}': '${entry.url}',`)
  }

  lines.push('} as const')
  lines.push('')
  lines.push('export type RuntimeAssetPath = keyof typeof runtimeAssets')
  lines.push('')
  lines.push('export function runtimeAsset(path: RuntimeAssetPath): string {')
  lines.push('  return runtimeAssets[path]')
  lines.push('}')
  lines.push('')

  return lines.join('\n')
}
