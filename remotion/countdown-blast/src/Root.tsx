import { Composition, registerRoot } from 'remotion'
import { CountdownBlast, countdownBlastDefaultProps } from './CountdownBlast'

export function RemotionRoot() {
  return (
    <Composition
      id="CountdownBlast"
      component={CountdownBlast}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownBlastDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
