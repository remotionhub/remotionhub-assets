import { Composition } from 'remotion'
import React from 'react'
import { TitleShimmer, titleShimmerDefaultProps } from './TitleShimmer'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleShimmer"
      component={TitleShimmer}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleShimmerDefaultProps}
    />
  )
}
