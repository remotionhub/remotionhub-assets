export const runtimeAssets = {
  // avatar-2.png
  'avatar-2.png': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/c386396ec70db3608075b5fbfaac4ab1ccaa86ba05a68ab393ec551eb66c3e00',
  // bell-notification.mp3
  'bell-notification.mp3': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/5a309ff187cf60974240256500ac6927e7d36c9aedbcb264a10d3fc423152934',
  // click.mp3
  'click.mp3': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/5a309ff187cf60974240256500ac6927e7d36c9aedbcb264a10d3fc423152934',
} as const

export type RuntimeAssetPath = keyof typeof runtimeAssets

export function runtimeAsset(path: RuntimeAssetPath): string {
  return runtimeAssets[path]
}
