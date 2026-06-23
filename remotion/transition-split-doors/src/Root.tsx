import { Composition, registerRoot } from 'remotion'
import { TransitionSplitDoors, transitionSplitDoorsDefaultProps } from './TransitionSplitDoors'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionSplitDoors"
      component={TransitionSplitDoors}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionSplitDoorsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
