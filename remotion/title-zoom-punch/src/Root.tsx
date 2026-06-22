import { Composition } from 'remotion'
import React from 'react'
import { TitleZoomPunch, titleZoomPunchDefaultProps } from './TitleZoomPunch'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleZoomPunch"
      component={TitleZoomPunch}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleZoomPunchDefaultProps}
    />
  )
}
