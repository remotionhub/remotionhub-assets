import { Composition, registerRoot } from 'remotion'
import { YtDeployCloudflare, ytDeployCloudflareDefaultProps , DEPLOY_CLOUDFLARE_211_DURATION_FRAMES } from './YtDeployCloudflare'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDeployCloudflare"
      component={YtDeployCloudflare}
      durationInFrames={DEPLOY_CLOUDFLARE_211_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDeployCloudflareDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
