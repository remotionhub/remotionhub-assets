import { Composition, registerRoot } from 'remotion'
import { YtSvgCards, ytSvgCardsDefaultProps } from './YtSvgCards'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSvgCards"
      component={YtSvgCards}
      durationInFrames={270}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSvgCardsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
