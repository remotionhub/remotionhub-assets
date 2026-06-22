import { Composition, registerRoot } from 'remotion'
import { TitleWaveText, titleWaveTextDefaultProps } from './TitleWaveText'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleWaveText"
      component={TitleWaveText}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleWaveTextDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
