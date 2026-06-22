import { Composition } from 'remotion'
import React from 'react'
import { Title3dRotate, title3dRotateDefaultProps } from './Title3dRotate'

export const Root: React.FC = () => {
  return (
    <Composition
      id="Title3dRotate"
      component={Title3dRotate}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={title3dRotateDefaultProps}
    />
  )
}
