import { Composition } from 'remotion'
import React from 'react'
import { TitleSplitReveal, titleSplitRevealDefaultProps } from './TitleSplitReveal'

export const Root: React.FC = () => {
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
