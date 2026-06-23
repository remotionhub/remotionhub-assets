import { Composition, registerRoot } from 'remotion'
import { OutroCommentCta, outroCommentCtaDefaultProps } from './OutroCommentCta'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroCommentCta"
      component={OutroCommentCta}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroCommentCtaDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
