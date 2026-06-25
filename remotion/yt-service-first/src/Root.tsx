import { Composition, registerRoot } from 'remotion'
import { YtServiceFirst, ytServiceFirstDefaultProps } from './YtServiceFirst'

export function RemotionRoot() {
  return (
    <Composition
      id="YtServiceFirst"
      component={YtServiceFirst}
      durationInFrames={450}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytServiceFirstDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
