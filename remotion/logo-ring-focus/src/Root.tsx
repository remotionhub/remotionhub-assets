import { Composition, registerRoot } from 'remotion'
import { LogoRingFocus, logoRingFocusDefaultProps } from './LogoRingFocus'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoRingFocus"
      component={LogoRingFocus}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoRingFocusDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
