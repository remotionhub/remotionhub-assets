import { Composition } from 'remotion'
import React from 'react'
import { MapAreaReveal, mapAreaRevealDefaultProps } from './MapAreaReveal'

export const Root: React.FC = () => {
  return (
    <Composition
      id="MapAreaReveal"
      component={MapAreaReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapAreaRevealDefaultProps}
    />
  )
}
