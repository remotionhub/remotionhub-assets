import { Composition } from 'remotion'
import React from 'react'
import { SubtitleSlide, subtitleSlideDefaultProps } from './SubtitleSlide'

export const Root: React.FC = () => {
  return (
    <Composition
      id="SubtitleSlide"
      component={SubtitleSlide}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleSlideDefaultProps}
    />
  )
}
