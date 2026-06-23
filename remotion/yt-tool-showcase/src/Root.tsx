import { Composition, registerRoot } from 'remotion'
import { YtToolShowcase, ytToolShowcaseDefaultProps } from './YtToolShowcase'

export function RemotionRoot() {
  return (
    <Composition
      id="YtToolShowcase"
      component={YtToolShowcase}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytToolShowcaseDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
