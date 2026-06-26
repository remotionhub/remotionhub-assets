export const runtimeAssets = {
  // NOTE: Source audio files are placeholders from the original remotionlab showcase.
  // Multiple distinct source paths share identical content-addressed hashes because
  // the original assets had placeholder/identical content. The content-addressed
  // deduplication is working as designed.
  // audio/connection/ding.mp3
  'audio/connection/ding.mp3': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/5a309ff187cf60974240256500ac6927e7d36c9aedbcb264a10d3fc423152934',
  // audio/connection/micro-riser.mp3
  'audio/connection/micro-riser.mp3': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/5a309ff187cf60974240256500ac6927e7d36c9aedbcb264a10d3fc423152934',
  // audio/connection/satisfying-fill.wav
  'audio/connection/satisfying-fill.wav': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/3cf5b39164b9f8282b10705ecff18d5c73d4e2efb8193a1e6e7ad8f53fc34d24',
  // audio/connection/soft-click.wav
  'audio/connection/soft-click.wav': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/3cf5b39164b9f8282b10705ecff18d5c73d4e2efb8193a1e6e7ad8f53fc34d24',
  // audio/connection/tick.wav
  'audio/connection/tick.wav': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/3cf5b39164b9f8282b10705ecff18d5c73d4e2efb8193a1e6e7ad8f53fc34d24',
  // audio/connection/tiny-pop.mp3
  'audio/connection/tiny-pop.mp3': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/5a309ff187cf60974240256500ac6927e7d36c9aedbcb264a10d3fc423152934',
  // audio/connection/whoosh-out.mp3
  'audio/connection/whoosh-out.mp3': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/5a309ff187cf60974240256500ac6927e7d36c9aedbcb264a10d3fc423152934',
  // audio/connection/woosh.wav
  'audio/connection/woosh.wav': 'https://remotionhub.oss-cn-shenzhen.aliyuncs.com/runtime/sha256/3cf5b39164b9f8282b10705ecff18d5c73d4e2efb8193a1e6e7ad8f53fc34d24',
} as const

export type RuntimeAssetPath = keyof typeof runtimeAssets

export function runtimeAsset(path: RuntimeAssetPath): string {
  return runtimeAssets[path]
}
