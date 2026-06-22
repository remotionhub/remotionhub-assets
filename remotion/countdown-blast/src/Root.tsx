import { Composition } from 'remotion'
import React from 'react'
import { CountdownBlast, countdownBlastDefaultProps } from './CountdownBlast'

export const Root: React.FC = () => {
  return (
    <Composition
      id="CountdownBlast"
      component={CountdownBlast}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownBlastDefaultProps}
    />
  )
}
