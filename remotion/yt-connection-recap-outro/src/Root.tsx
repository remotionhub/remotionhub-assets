import { Composition, registerRoot } from 'remotion'
import { YtConnectionRecapOutro, ytConnectionRecapOutroDefaultProps } from './YtConnectionRecapOutro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtConnectionRecapOutro"
      component={YtConnectionRecapOutro}
      durationInFrames={480}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytConnectionRecapOutroDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
