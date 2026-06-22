import { Composition } from 'remotion'
import React from 'react'
import { TitleWaveText, titleWaveTextDefaultProps } from './TitleWaveText'

export const Root: React.FC = () => {
  return (
    <Composition
      id="TitleWaveText"
      component={TitleWaveText}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleWaveTextDefaultProps}
    />
  )
}
