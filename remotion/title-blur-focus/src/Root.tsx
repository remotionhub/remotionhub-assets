import { Composition, registerRoot } from 'remotion'
import { TitleBlurFocus, titleBlurFocusDefaultProps } from './TitleBlurFocus'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleBlurFocus"
      component={TitleBlurFocus}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleBlurFocusDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
