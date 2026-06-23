import { Composition, registerRoot } from 'remotion'
import { OutroSponsor, outroSponsorDefaultProps } from './OutroSponsor'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroSponsor"
      component={OutroSponsor}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroSponsorDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
