import { Composition, registerRoot } from 'remotion'
import { CountdownDigital, countdownDigitalDefaultProps } from './CountdownDigital'

export function RemotionRoot() {
  return (
    <Composition
      id="CountdownDigital"
      component={CountdownDigital}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownDigitalDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
