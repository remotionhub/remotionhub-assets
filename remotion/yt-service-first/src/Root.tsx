import { Composition, registerRoot } from 'remotion'
import { YtServiceFirst, ytServiceFirstDefaultProps , SERVICE_FIRST_DURATION_FRAMES } from './YtServiceFirst'

export function RemotionRoot() {
  return (
    <Composition
      id="YtServiceFirst"
      component={YtServiceFirst}
      durationInFrames={SERVICE_FIRST_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytServiceFirstDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
