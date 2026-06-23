import { Composition, registerRoot } from 'remotion'
import { SocialTwitterQuote, socialTwitterQuoteDefaultProps } from './SocialTwitterQuote'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialTwitterQuote"
      component={SocialTwitterQuote}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialTwitterQuoteDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
