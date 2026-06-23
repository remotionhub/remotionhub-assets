import { Composition, registerRoot } from 'remotion'
import { IntroNewsBroadcast, introNewsBroadcastDefaultProps } from './IntroNewsBroadcast'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroNewsBroadcast"
      component={IntroNewsBroadcast}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introNewsBroadcastDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
