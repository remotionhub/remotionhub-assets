export const runtimeAssets = {
  // audio/connection/ding.mp3
  'audio/connection/ding.mp3': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/5a309ff187cf60974240256500ac6927e7d36c9aedbcb264a10d3fc423152934',
  // audio/connection/tick.wav
  'audio/connection/tick.wav': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/3cf5b39164b9f8282b10705ecff18d5c73d4e2efb8193a1e6e7ad8f53fc34d24',
} as const

export type RuntimeAssetPath = keyof typeof runtimeAssets

export function runtimeAsset(path: RuntimeAssetPath): string {
  return runtimeAssets[path]
}
