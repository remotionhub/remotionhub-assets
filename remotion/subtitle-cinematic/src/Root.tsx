import { Composition } from 'remotion'
import React from 'react'
import { SubtitleCinematic, subtitleCinematicDefaultProps } from './SubtitleCinematic'

export const Root: React.FC = () => {
  return (
    <Composition
      id="SubtitleCinematic"
      component={SubtitleCinematic}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleCinematicDefaultProps}
    />
  )
}
