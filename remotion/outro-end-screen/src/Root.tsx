import { Composition, registerRoot } from 'remotion'
import { OutroEndScreen, outroEndScreenDefaultProps } from './OutroEndScreen'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroEndScreen"
      component={OutroEndScreen}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroEndScreenDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
