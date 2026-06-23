import { Composition, registerRoot } from 'remotion'
import { DatavizFunnel, datavizFunnelDefaultProps } from './DatavizFunnel'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizFunnel"
      component={DatavizFunnel}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizFunnelDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
