import { Composition } from 'remotion'
import React from 'react'
import { CountdownFirework, countdownFireworkDefaultProps } from './CountdownFirework'

export const Root: React.FC = () => {
  return (
    <Composition
      id="CountdownFirework"
      component={CountdownFirework}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownFireworkDefaultProps}
    />
  )
}
