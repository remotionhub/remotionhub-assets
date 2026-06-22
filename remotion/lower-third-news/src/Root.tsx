import { Composition, registerRoot } from 'remotion'
import { LowerThirdNews, lowerThirdNewsDefaultProps } from './LowerThirdNews'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdNews"
      component={LowerThirdNews}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdNewsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
