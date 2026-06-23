import { Composition, registerRoot } from 'remotion'
import { DatavizBubble, datavizBubbleDefaultProps } from './DatavizBubble'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizBubble"
      component={DatavizBubble}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizBubbleDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
