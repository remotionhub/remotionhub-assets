import { Composition, registerRoot } from 'remotion'
import { YtSvgCards, ytSvgCardsDefaultProps , SVG_CARDS_DURATION_FRAMES } from './YtSvgCards'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSvgCards"
      component={YtSvgCards}
      durationInFrames={SVG_CARDS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSvgCardsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
