import { Composition } from 'remotion'
import React from 'react'
import { MapPathTrace, mapPathTraceDefaultProps } from './MapPathTrace'

export const Root: React.FC = () => {
  return (
    <Composition
      id="MapPathTrace"
      component={MapPathTrace}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapPathTraceDefaultProps}
    />
  )
}
