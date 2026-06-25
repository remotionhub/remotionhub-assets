import { Composition, registerRoot } from 'remotion'
import { YtEngineAbilities, ytEngineAbilitiesDefaultProps, ENGINE_ABILITIES_DURATION_FRAMES } from './YtEngineAbilities'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEngineAbilities"
      component={YtEngineAbilities}
      durationInFrames={ENGINE_ABILITIES_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEngineAbilitiesDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
