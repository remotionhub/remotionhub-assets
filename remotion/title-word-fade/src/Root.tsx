import { Composition } from 'remotion'
import React from 'react'
import { TitleWordFade, titleWordFadeDefaultProps } from './TitleWordFade'

export const Root: React.FC = () => {
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
