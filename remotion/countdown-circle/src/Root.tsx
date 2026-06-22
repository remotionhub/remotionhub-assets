import { Composition, registerRoot } from 'remotion'
import { CountdownCircle, countdownCircleDefaultProps } from './CountdownCircle'

export function RemotionRoot() {
  return (
    <Composition
      id="CountdownCircle"
      component={CountdownCircle}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownCircleDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
