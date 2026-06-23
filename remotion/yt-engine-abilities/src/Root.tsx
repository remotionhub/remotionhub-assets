import { Composition, registerRoot } from 'remotion'
import { YtEngineAbilities, ytEngineAbilitiesDefaultProps } from './YtEngineAbilities'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEngineAbilities"
      component={YtEngineAbilities}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEngineAbilitiesDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
