import ts from 'typescript'

export type StaticFileCall = {
  arg: string
  line: number
}

export type RuntimeAssetEntry = {
  sourcePath: string
  url: string
  sha256: string
  byteSize: number
  contentType: string
}

export function validateAst(sourceFilePath: string): void {
  const program = ts.createProgram([sourceFilePath], {
    jsx: ts.JsxEmit.ReactJSX,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    target: ts.ScriptTarget.ESNext,
    strict: true,
    noEmit: true,
    skipLibCheck: true,
  })

  const diagnostics = ts.getPreEmitDiagnostics(program)
  const errors = diagnostics.filter(
    (d) => d.category === ts.DiagnosticCategory.Error,
  )

  if (errors.length > 0) {
    const messages = errors.map((d) => {
      const pos = d.file
        ? `${d.file.fileName}:${d.file.getLineAndCharacterOfPosition(d.start ?? 0).line + 1}`
        : '(unknown)'
      return `  ${pos}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`
    })
    throw new Error(
      `AST validation failed for ${sourceFilePath} with ${errors.length} error(s):\n${messages.join('\n')}`,
    )
  }
}

export function parseStaticFileCalls(sourceFilePath: string): StaticFileCall[] {
  const sourceText = ts.sys.readFile(sourceFilePath)
  if (!sourceText) {
    throw new Error(`Cannot read file: ${sourceFilePath}`)
  }

  const sourceFile = ts.createSourceFile(
    sourceFilePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  )

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
