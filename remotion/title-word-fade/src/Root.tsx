import { Composition, registerRoot } from 'remotion'
import { TitleWordFade, titleWordFadeDefaultProps } from './TitleWordFade'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleWordFade"
      component={TitleWordFade}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleWordFadeDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
