import { Composition, registerRoot } from 'remotion'
import { DatavizLineDraw, datavizLineDrawDefaultProps } from './DatavizLineDraw'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizLineDraw"
      component={DatavizLineDraw}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizLineDrawDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
