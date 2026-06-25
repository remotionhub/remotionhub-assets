import { Composition, registerRoot } from 'remotion'
import { YtSimpleAiProduct, ytSimpleAiProductDefaultProps , SIMPLE_AI_PRODUCT_203_DURATION_FRAMES } from './YtSimpleAiProduct'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSimpleAiProduct"
      component={YtSimpleAiProduct}
      durationInFrames={SIMPLE_AI_PRODUCT_203_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSimpleAiProductDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
