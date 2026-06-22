import { Composition } from 'remotion'
import React from 'react'
import { CountdownDigital, countdownDigitalDefaultProps } from './CountdownDigital'

export const Root: React.FC = () => {
  return (
    <Composition
      id="CountdownDigital"
      component={CountdownDigital}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownDigitalDefaultProps}
    />
  )
}
