import { Composition, registerRoot } from 'remotion'
import { AudioVinylRecord, audioVinylRecordDefaultProps } from './AudioVinylRecord'

export function RemotionRoot() {
  return (
    <Composition
      id="AudioVinylRecord"
      component={AudioVinylRecord}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={audioVinylRecordDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
