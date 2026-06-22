import { Composition, registerRoot } from 'remotion'
import { TitleSlotReel, titleSlotReelDefaultProps } from './TitleSlotReel'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleSlotReel"
      component={TitleSlotReel}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleSlotReelDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
