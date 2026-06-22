import { Composition } from 'remotion'
import React from 'react'
import { TitleStaggerLines, titleStaggerLinesDefaultProps } from './TitleStaggerLines'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleStaggerLines"
      component={TitleStaggerLines}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleStaggerLinesDefaultProps}
    />
  )
}
