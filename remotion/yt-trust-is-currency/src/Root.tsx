import { Composition, registerRoot } from 'remotion'
import {
  YtTrustIsCurrency,
  ytTrustIsCurrencyDefaultProps,
  TRUST_IS_CURRENCY_DURATION_FRAMES,
} from './YtTrustIsCurrency'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTrustIsCurrency"
      component={YtTrustIsCurrency}
      durationInFrames={TRUST_IS_CURRENCY_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTrustIsCurrencyDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
