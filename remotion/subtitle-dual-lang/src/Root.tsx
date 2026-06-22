import { Composition, registerRoot } from 'remotion'
import { SubtitleDualLang, subtitleDualLangDefaultProps } from './SubtitleDualLang'

export function RemotionRoot() {
  return (
    <Composition
      id="SubtitleDualLang"
      component={SubtitleDualLang}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleDualLangDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
