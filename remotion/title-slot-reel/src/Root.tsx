import { Composition } from 'remotion'
import React from 'react'
import { TitleSlotReel, titleSlotReelDefaultProps } from './TitleSlotReel'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleSlotReel"
      component={TitleSlotReel}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleSlotReelDefaultProps}
    />
  )
}
