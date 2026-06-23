import { Composition, registerRoot } from 'remotion'
import { DatavizCounterCard, datavizCounterCardDefaultProps } from './DatavizCounterCard'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizCounterCard"
      component={DatavizCounterCard}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizCounterCardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
