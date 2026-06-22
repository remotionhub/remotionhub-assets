import { Composition } from 'remotion'
import React from 'react'
import { SubtitleKaraoke, subtitleKaraokeDefaultProps } from './SubtitleKaraoke'

export const Root: React.FC = () => {
  return (
    <Composition
      id="SubtitleKaraoke"
      component={SubtitleKaraoke}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleKaraokeDefaultProps}
    />
  )
}
