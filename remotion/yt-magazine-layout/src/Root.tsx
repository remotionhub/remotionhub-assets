import { Composition, registerRoot } from 'remotion'
import { YtMagazineLayout, ytMagazineLayoutDefaultProps } from './YtMagazineLayout'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMagazineLayout"
      component={YtMagazineLayout}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMagazineLayoutDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
