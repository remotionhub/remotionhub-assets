import { Composition, registerRoot } from 'remotion'
import { YtTwoFocus, ytTwoFocusDefaultProps } from './YtTwoFocus'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTwoFocus"
      component={YtTwoFocus}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTwoFocusDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
