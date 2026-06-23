import { Composition, registerRoot } from 'remotion'
import { OutroPlaylist, outroPlaylistDefaultProps } from './OutroPlaylist'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroPlaylist"
      component={OutroPlaylist}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroPlaylistDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
