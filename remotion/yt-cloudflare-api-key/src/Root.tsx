import { Composition, registerRoot } from 'remotion'
import { YtCloudflareApiKey, ytCloudflareApiKeyDefaultProps , CLOUDFLARE_API_KEY_212_DURATION_FRAMES } from './YtCloudflareApiKey'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCloudflareApiKey"
      component={YtCloudflareApiKey}
      durationInFrames={CLOUDFLARE_API_KEY_212_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCloudflareApiKeyDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
