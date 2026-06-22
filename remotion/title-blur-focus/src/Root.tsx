import { Composition } from 'remotion'
import React from 'react'
import { TitleBlurFocus, titleBlurFocusDefaultProps } from './TitleBlurFocus'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleBlurFocus"
      component={TitleBlurFocus}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleBlurFocusDefaultProps}
    />
  )
}
