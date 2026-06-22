import { Composition } from 'remotion'
import React from 'react'
import { MapRadarScan, mapRadarScanDefaultProps } from './MapRadarScan'

export const Root: React.FC = () => {
  return (
    <Composition
      id="MapRadarScan"
      component={MapRadarScan}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapRadarScanDefaultProps}
    />
  )
}
