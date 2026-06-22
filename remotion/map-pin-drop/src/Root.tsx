import { Composition } from 'remotion'
import React from 'react'
import { MapPinDrop, mapPinDropDefaultProps } from './MapPinDrop'

export const Root: React.FC = () => {
  return (
    <Composition
      id="MapPinDrop"
      component={MapPinDrop}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapPinDropDefaultProps}
    />
  )
}
