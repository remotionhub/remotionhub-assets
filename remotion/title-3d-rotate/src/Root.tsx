import { Composition, registerRoot } from 'remotion'
import { Title3dRotate, title3dRotateDefaultProps } from './Title3dRotate'

export function RemotionRoot() {
  return (
    <Composition
      id="Title3dRotate"
      component={Title3dRotate}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={title3dRotateDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
