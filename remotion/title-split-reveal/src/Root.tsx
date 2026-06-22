import { Composition, registerRoot } from 'remotion'
import { TitleSplitReveal, titleSplitRevealDefaultProps } from './TitleSplitReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleSplitReveal"
      component={TitleSplitReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleSplitRevealDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
