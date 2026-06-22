import { Composition } from 'remotion'
import React from 'react'
import { TitleGradientWipe, titleGradientWipeDefaultProps } from './TitleGradientWipe'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleGradientWipe"
      component={TitleGradientWipe}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleGradientWipeDefaultProps}
    />
  )
}
