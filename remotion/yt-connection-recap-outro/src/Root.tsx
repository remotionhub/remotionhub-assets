import { Composition, registerRoot } from 'remotion'
import { YtConnectionRecapOutro, ytConnectionRecapOutroDefaultProps , RECAP_OUTRO_DURATION_FRAMES } from './YtConnectionRecapOutro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtConnectionRecapOutro"
      component={YtConnectionRecapOutro}
      durationInFrames={RECAP_OUTRO_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytConnectionRecapOutroDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
