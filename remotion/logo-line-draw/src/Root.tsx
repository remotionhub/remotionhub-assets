import { Composition, registerRoot } from 'remotion'
import { LogoLineDraw, logoLineDrawDefaultProps } from './LogoLineDraw'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoLineDraw"
      component={LogoLineDraw}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoLineDrawDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
