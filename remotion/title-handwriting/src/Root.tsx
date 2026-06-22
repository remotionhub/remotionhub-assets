import { Composition } from 'remotion'
import React from 'react'
import { TitleHandwriting, titleHandwritingDefaultProps } from './TitleHandwriting'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleHandwriting"
      component={TitleHandwriting}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleHandwritingDefaultProps}
    />
  )
}
