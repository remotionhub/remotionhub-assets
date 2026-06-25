import { Composition, registerRoot } from 'remotion'
import { YtMagazineLayout, ytMagazineLayoutDefaultProps , MAGAZINE_STYLE_DURATION_FRAMES } from './YtMagazineLayout'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMagazineLayout"
      component={YtMagazineLayout}
      durationInFrames={MAGAZINE_STYLE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMagazineLayoutDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
