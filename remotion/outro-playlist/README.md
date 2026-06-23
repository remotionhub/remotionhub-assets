# Outro Playlist

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/outro-playlist/91305c585c84-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/outro-playlist.

## Usage

Copy `src/OutroPlaylist.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
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
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |


## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的播放清单推荐片尾组件（文件：PlaylistOutro.tsx），请帮我做以下调整： 1. 把标题从「你可能也喜欢」改成「___」 2. 把第一张视频卡片标题改成「___」 3. 把所有卡片的频道名称从「Remotion 中文社群」改成「___」 4. 把进度条颜色从 `#3b82f6` 改成「___」 5. 把「播放全部」文字改成「___」 6. 把背景色从 `#0f0f0f` 改成「___」 请保留原本的依序滑入与进度条动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/outro-playlist
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/outro-playlist

## License

MIT
