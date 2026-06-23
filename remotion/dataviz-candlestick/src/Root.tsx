import { Composition, registerRoot } from 'remotion'
import { DatavizCandlestick, datavizCandlestickDefaultProps } from './DatavizCandlestick'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizCandlestick"
      component={DatavizCandlestick}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizCandlestickDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
