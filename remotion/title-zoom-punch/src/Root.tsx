import { Composition, registerRoot } from 'remotion'
import { TitleZoomPunch, titleZoomPunchDefaultProps } from './TitleZoomPunch'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleZoomPunch"
      component={TitleZoomPunch}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleZoomPunchDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
