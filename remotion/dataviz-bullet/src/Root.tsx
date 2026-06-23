import { Composition, registerRoot } from 'remotion'
import { DatavizBullet, datavizBulletDefaultProps } from './DatavizBullet'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizBullet"
      component={DatavizBullet}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizBulletDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
