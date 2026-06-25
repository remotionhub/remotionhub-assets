import { Composition, registerRoot } from 'remotion'
import { YtGenericChatbot, ytGenericChatbotDefaultProps } from './YtGenericChatbot'

export function RemotionRoot() {
  return (
    <Composition
      id="YtGenericChatbot"
      component={YtGenericChatbot}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytGenericChatbotDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
