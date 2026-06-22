import { Composition } from 'remotion'
import React from 'react'
import { SubtitleFade, subtitleFadeDefaultProps } from './SubtitleFade'

export const Root: React.FC = () => {
  return (
    <Composition
      id="SubtitleFade"
      component={SubtitleFade}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleFadeDefaultProps}
    />
  )
}
