import { Composition } from 'remotion'
import React from 'react'
import { TitleTypewriter, titleTypewriterDefaultProps } from './TitleTypewriter'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleTypewriter"
      component={TitleTypewriter}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleTypewriterDefaultProps}
    />
  )
}
