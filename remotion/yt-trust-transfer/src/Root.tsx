import { Composition, registerRoot } from 'remotion'
import {
  YtTrustTransfer,
  ytTrustTransferDefaultProps,
  TRUST_TRANSFER_DURATION_FRAMES,
} from './YtTrustTransfer'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTrustTransfer"
      component={YtTrustTransfer}
      durationInFrames={TRUST_TRANSFER_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTrustTransferDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
