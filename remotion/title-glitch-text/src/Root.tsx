import { Composition } from 'remotion'
import React from 'react'
import { TitleGlitchText, titleGlitchTextDefaultProps } from './TitleGlitchText'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleGlitchText"
      component={TitleGlitchText}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleGlitchTextDefaultProps}
    />
  )
}
