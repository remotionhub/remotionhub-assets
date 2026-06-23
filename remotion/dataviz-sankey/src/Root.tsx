import { Composition, registerRoot } from 'remotion'
import { DatavizSankey, datavizSankeyDefaultProps } from './DatavizSankey'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizSankey"
      component={DatavizSankey}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizSankeyDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
