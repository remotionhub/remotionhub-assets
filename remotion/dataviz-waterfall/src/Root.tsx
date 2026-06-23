import { Composition, registerRoot } from 'remotion'
import { DatavizWaterfall, datavizWaterfallDefaultProps } from './DatavizWaterfall'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizWaterfall"
      component={DatavizWaterfall}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizWaterfallDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
