import { Composition, registerRoot } from 'remotion'
import { YtTrustIsCurrency, ytTrustIsCurrencyDefaultProps } from './YtTrustIsCurrency'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTrustIsCurrency"
      component={YtTrustIsCurrency}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTrustIsCurrencyDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
