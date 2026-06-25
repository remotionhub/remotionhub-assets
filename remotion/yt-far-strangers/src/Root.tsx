import { Composition, registerRoot } from 'remotion'
import { YtFarStrangers, ytFarStrangersDefaultProps , FAR_STRANGERS_DURATION_FRAMES } from './YtFarStrangers'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFarStrangers"
      component={YtFarStrangers}
      durationInFrames={FAR_STRANGERS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFarStrangersDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
