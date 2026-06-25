export const runtimeAssets = {
  // pencil-logo.jpeg
  'pencil-logo.jpeg': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/07f07701f273c4717cf6f857eda793985a79cd99faeabb824278c854aa9e2990',
} as const

export type RuntimeAssetPath = keyof typeof runtimeAssets

export function runtimeAsset(path: RuntimeAssetPath): string {
  return runtimeAssets[path]
}
