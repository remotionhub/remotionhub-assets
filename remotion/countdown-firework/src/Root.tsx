import { Composition, registerRoot } from 'remotion'
import { CountdownFirework, countdownFireworkDefaultProps } from './CountdownFirework'

export function RemotionRoot() {
  return (
    <Composition
      id="CountdownFirework"
      component={CountdownFirework}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownFireworkDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
