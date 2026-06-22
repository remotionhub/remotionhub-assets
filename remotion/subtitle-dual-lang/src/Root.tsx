import { Composition } from 'remotion'
import React from 'react'
import { SubtitleDualLang, subtitleDualLangDefaultProps } from './SubtitleDualLang'

export const Root: React.FC = () => {
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
