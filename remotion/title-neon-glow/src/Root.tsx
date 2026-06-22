import { Composition } from 'remotion'
import React from 'react'
import { TitleNeonGlow, titleNeonGlowDefaultProps } from './TitleNeonGlow'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleNeonGlow"
      component={TitleNeonGlow}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleNeonGlowDefaultProps}
    />
  )
}
