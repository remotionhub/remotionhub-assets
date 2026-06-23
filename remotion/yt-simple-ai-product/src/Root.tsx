import { Composition, registerRoot } from 'remotion'
import { YtSimpleAiProduct, ytSimpleAiProductDefaultProps } from './YtSimpleAiProduct'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSimpleAiProduct"
      component={YtSimpleAiProduct}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSimpleAiProductDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
