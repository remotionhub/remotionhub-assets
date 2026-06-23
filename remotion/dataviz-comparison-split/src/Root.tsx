import { Composition, registerRoot } from 'remotion'
import { DatavizComparisonSplit, datavizComparisonSplitDefaultProps } from './DatavizComparisonSplit'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizComparisonSplit"
      component={DatavizComparisonSplit}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizComparisonSplitDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
