import { Composition, registerRoot } from 'remotion'
import { YtTwoFocus, ytTwoFocusDefaultProps, TWO_FOCUS_DURATION_FRAMES } from './YtTwoFocus'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTwoFocus"
      component={YtTwoFocus}
      durationInFrames={TWO_FOCUS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTwoFocusDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
