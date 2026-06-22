import { Composition } from 'remotion'
import React from 'react'
import { CountdownCircle, countdownCircleDefaultProps } from './CountdownCircle'

export const Root: React.FC = () => {
  return (
    <Composition
      id="CountdownCircle"
      component={CountdownCircle}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownCircleDefaultProps}
    />
  )
}
