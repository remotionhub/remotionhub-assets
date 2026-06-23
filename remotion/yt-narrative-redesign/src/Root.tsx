import { Composition, registerRoot } from 'remotion'
import { YtNarrativeRedesign, ytNarrativeRedesignDefaultProps } from './YtNarrativeRedesign'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNarrativeRedesign"
      component={YtNarrativeRedesign}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNarrativeRedesignDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
