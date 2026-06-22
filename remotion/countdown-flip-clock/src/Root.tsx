import { Composition, registerRoot } from 'remotion'
import { CountdownFlipClock, countdownFlipClockDefaultProps } from './CountdownFlipClock'

export function RemotionRoot() {
  return (
    <Composition
      id="CountdownFlipClock"
      component={CountdownFlipClock}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownFlipClockDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
