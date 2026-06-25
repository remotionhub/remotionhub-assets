import { Composition, registerRoot } from 'remotion'
import { YtGrowth24, ytGrowth24DefaultProps , GROWTH_24_DURATION_FRAMES } from './YtGrowth24'

export function RemotionRoot() {
  return (
    <Composition
      id="YtGrowth24"
      component={YtGrowth24}
      durationInFrames={GROWTH_24_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytGrowth24DefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
