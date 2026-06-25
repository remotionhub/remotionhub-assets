import { Composition, registerRoot } from 'remotion'
import { YtFromScratch, ytFromScratchDefaultProps , FROM_SCRATCH_DURATION_FRAMES } from './YtFromScratch'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFromScratch"
      component={YtFromScratch}
      durationInFrames={FROM_SCRATCH_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFromScratchDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
