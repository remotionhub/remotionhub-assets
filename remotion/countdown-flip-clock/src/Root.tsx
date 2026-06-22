import { Composition } from 'remotion'
import React from 'react'
import { CountdownFlipClock, countdownFlipClockDefaultProps } from './CountdownFlipClock'

export const Root: React.FC = () => {
  return (
    <Composition
      id="CountdownFlipClock"
      component={CountdownFlipClock}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownFlipClockDefaultProps}
    />
  )
}
