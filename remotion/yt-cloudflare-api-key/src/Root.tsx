import { Composition, registerRoot } from 'remotion'
import { YtCloudflareApiKey, ytCloudflareApiKeyDefaultProps } from './YtCloudflareApiKey'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCloudflareApiKey"
      component={YtCloudflareApiKey}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCloudflareApiKeyDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
