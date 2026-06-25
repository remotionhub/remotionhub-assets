import { Composition, registerRoot } from 'remotion'
import { YtFarStrangers, ytFarStrangersDefaultProps } from './YtFarStrangers'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFarStrangers"
      component={YtFarStrangers}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFarStrangersDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
