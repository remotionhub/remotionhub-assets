import { Composition } from 'remotion'
import React from 'react'
import { MapRouteProgress, mapRouteProgressDefaultProps } from './MapRouteProgress'

export const Root: React.FC = () => {
  return (
    <Composition
      id="MapRouteProgress"
      component={MapRouteProgress}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapRouteProgressDefaultProps}
    />
  )
}
