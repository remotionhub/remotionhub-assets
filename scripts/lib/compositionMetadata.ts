import path from 'node:path'
import ts from 'typescript'

export type DurationInfo = {
  name: string
  value: number
  filePath: string
}

function extractNumericValue(expr: ts.Expression): number | undefined {
  if (ts.isNumericLiteral(expr)) {
    return Number(expr.text)
  }
  if (
    ts.isPrefixUnaryExpression(expr) &&
    (expr.operator === ts.SyntaxKind.MinusToken ||
      expr.operator === ts.SyntaxKind.PlusToken) &&
    ts.isNumericLiteral(expr.operand)
  ) {
    const inner = Number(expr.operand.text)
    return expr.operator === ts.SyntaxKind.MinusToken ? -inner : inner
  }
  return undefined
}

export function parseDurationFrames(sourceFilePath: string): DurationInfo {
  const sourceText = ts.sys.readFile(sourceFilePath)
  if (!sourceText) {
    throw new Error(`Cannot read file: ${sourceFilePath}`)
  }

  const sourceFile = ts.createSourceFile(
    sourceFilePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
  )

  const candidates: DurationInfo[] = []

  ts.forEachChild(sourceFile, (node) => {
    if (!ts.isVariableStatement(node)) return
    if (!node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword))
      return

    for (const decl of node.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name)) continue
      const name = decl.name.text
      if (!name.endsWith('_DURATION_FRAMES')) continue

      if (!decl.initializer) {
        throw new Error(
          `Export "${name}" in ${sourceFilePath} has no initializer`,
        )
      }

      const value = extractNumericValue(decl.initializer)
      if (value === undefined) {
        throw new Error(
          `Export "${name}" in ${sourceFilePath} is not a numeric literal`,
        )
      }

      if (!Number.isInteger(value) || value <= 0) {
        throw new Error(
          `Export "${name}" in ${sourceFilePath} is not a positive integer: ${value}`,
        )
      }

      candidates.push({ name, value, filePath: sourceFilePath })
    }
  })

  if (candidates.length === 0) {
    throw new Error(`No *_DURATION_FRAMES export found in ${sourceFilePath}`)
  }

  if (candidates.length > 1) {
    const names = candidates.map((c) => c.name).join(', ')
    throw new Error(
      `Multiple *_DURATION_FRAMES exports found in ${sourceFilePath}: ${names}`,
    )
  }

  return candidates[0]
}

function resolveIdentifierImport(
  sourceFile: ts.SourceFile,
  identifierName: string,
  rootFilePath: string,
): string | undefined {
  let importPath: string | undefined

  ts.forEachChild(sourceFile, (node) => {
    if (!ts.isImportDeclaration(node)) return
    if (!node.importClause) return

    const namedBindings = node.importClause.namedBindings
    if (!namedBindings || !ts.isNamedImports(namedBindings)) return

    for (const element of namedBindings.elements) {
      if (element.name.text === identifierName) {
        if (ts.isStringLiteral(node.moduleSpecifier)) {
          importPath = node.moduleSpecifier.text
        }
      }
    }
  })

  if (!importPath) return undefined

  const resolved = path.resolve(path.dirname(rootFilePath), importPath)
  for (const ext of ['.ts', '.tsx']) {
    if (ts.sys.fileExists(resolved + ext)) return resolved + ext
  }
  if (ts.sys.fileExists(resolved)) return resolved
  return undefined
}

export function parseRootDuration(rootFilePath: string): number {
  const sourceText = ts.sys.readFile(rootFilePath)
  if (!sourceText) {
    throw new Error(`Cannot read file: ${rootFilePath}`)
  }

  const sourceFile = ts.createSourceFile(
    rootFilePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  )

  let result: number | undefined

  function visit(node: ts.Node) {
    if (ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) {
      const tagName = node.tagName.getText(sourceFile)
      if (tagName === 'Composition') {
        for (const attr of node.attributes.properties) {
          if (!ts.isJsxAttribute(attr)) continue
          if (!ts.isIdentifier(attr.name)) continue
          if (attr.name.text !== 'durationInFrames') continue

          if (!attr.initializer) {
            throw new Error(`durationInFrames has no value in ${rootFilePath}`)
          }

          if (ts.isJsxExpression(attr.initializer)) {
            const expr = attr.initializer.expression
            if (!expr) {
              throw new Error(`durationInFrames in ${rootFilePath} is empty`)
            }
            const val = extractNumericValue(expr)
            if (val !== undefined) {
              result = val
            } else if (ts.isIdentifier(expr)) {
              const sourcePath = resolveIdentifierImport(
                sourceFile,
                expr.text,
                rootFilePath,
              )
              if (!sourcePath) {
                throw new Error(
                  `Cannot resolve import for "${expr.text}" in ${rootFilePath}`,
                )
              }
              const durationInfo = parseDurationFrames(sourcePath)
              result = durationInfo.value
            } else {
              throw new Error(
                `durationInFrames in ${rootFilePath} is not a numeric literal or identifier`,
              )
            }
          } else {
            throw new Error(
              `durationInFrames in ${rootFilePath} is not a numeric literal`,
            )
          }
        }
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(sourceFile)

  if (result === undefined) {
    const hasComposition = sourceText.includes('<Composition')
    if (!hasComposition) {
      throw new Error(`No Composition element found in ${rootFilePath}`)
    }
    throw new Error(`durationInFrames not found in ${rootFilePath}`)
  }

  return result
}

export function assertDurationConsistency(args: {
  slug: string
  manifestDuration: number
  rootDuration: number
  sourceDuration?: number
}) {
  const { slug, manifestDuration, rootDuration, sourceDuration } = args

  if (manifestDuration !== rootDuration) {
    throw new Error(
      `[${slug}] manifest/root mismatch: manifest=${manifestDuration}, root=${rootDuration}`,
    )
  }

  if (sourceDuration !== undefined && manifestDuration !== sourceDuration) {
    throw new Error(
      `[${slug}] manifest/source mismatch: manifest=${manifestDuration}, source=${sourceDuration}`,
    )
  }
}
