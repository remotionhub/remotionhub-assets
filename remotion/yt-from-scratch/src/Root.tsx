import { Composition, registerRoot } from 'remotion'
import { YtFromScratch, ytFromScratchDefaultProps } from './YtFromScratch'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFromScratch"
      component={YtFromScratch}
      durationInFrames={270}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFromScratchDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
