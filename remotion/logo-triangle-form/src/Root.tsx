import { Composition, registerRoot } from 'remotion'
import { LogoTriangleForm, logoTriangleFormDefaultProps } from './LogoTriangleForm'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoTriangleForm"
      component={LogoTriangleForm}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoTriangleFormDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
