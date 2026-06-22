import { Composition } from 'remotion'
import React from 'react'
import { TitleScramble, titleScrambleDefaultProps } from './TitleScramble'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleScramble"
      component={TitleScramble}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleScrambleDefaultProps}
    />
  )
}
