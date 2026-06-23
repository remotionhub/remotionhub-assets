import { Composition, registerRoot } from 'remotion'
import { OutroSubscribeCta, outroSubscribeCtaDefaultProps } from './OutroSubscribeCta'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroSubscribeCta"
      component={OutroSubscribeCta}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroSubscribeCtaDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
