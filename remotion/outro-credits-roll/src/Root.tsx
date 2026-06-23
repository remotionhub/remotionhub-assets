import { Composition, registerRoot } from 'remotion'
import { OutroCreditsRoll, outroCreditsRollDefaultProps } from './OutroCreditsRoll'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroCreditsRoll"
      component={OutroCreditsRoll}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroCreditsRollDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
