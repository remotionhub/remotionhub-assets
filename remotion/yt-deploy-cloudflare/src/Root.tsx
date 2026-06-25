import { Composition, registerRoot } from 'remotion'
import { YtDeployCloudflare, ytDeployCloudflareDefaultProps } from './YtDeployCloudflare'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDeployCloudflare"
      component={YtDeployCloudflare}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDeployCloudflareDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
