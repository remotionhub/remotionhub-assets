import { Composition } from 'remotion'
import React from 'react'
import { TitleKineticBounce, titleKineticBounceDefaultProps } from './TitleKineticBounce'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleKineticBounce"
      component={TitleKineticBounce}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleKineticBounceDefaultProps}
    />
  )
}
