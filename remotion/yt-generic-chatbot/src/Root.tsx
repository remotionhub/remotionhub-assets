import { Composition, registerRoot } from 'remotion'
import { YtGenericChatbot, ytGenericChatbotDefaultProps , GENERIC_CHATBOT_DURATION_FRAMES } from './YtGenericChatbot'

export function RemotionRoot() {
  return (
    <Composition
      id="YtGenericChatbot"
      component={YtGenericChatbot}
      durationInFrames={GENERIC_CHATBOT_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytGenericChatbotDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
