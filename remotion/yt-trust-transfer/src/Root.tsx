import { Composition, registerRoot } from 'remotion'
import { YtTrustTransfer, ytTrustTransferDefaultProps } from './YtTrustTransfer'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTrustTransfer"
      component={YtTrustTransfer}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTrustTransferDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
