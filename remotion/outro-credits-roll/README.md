# Outro Credits Roll

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/outro-credits-roll/de438265c5fc-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/outro-credits-roll.

## Usage

Copy `src/OutroCreditsRoll.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { OutroCreditsRoll, outroCreditsRollDefaultProps } from './OutroCreditsRoll'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroCreditsRoll"
      component={OutroCreditsRoll}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroCreditsRollDefaultProps}
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
我有一个用 Remotion 写的卷动字幕片尾组件（文件：CreditsRollOutro.tsx），请帮我做以下调整： 1. 把制作人姓名从 `张小明` 改成「___」 2. 把导演姓名从 `李美丽` 改成「___」 3. 把感谢观看文字从 `感谢观看` 改成「___」 4. 把感谢副文字从 `Thank you for watching` 改成「___」 5. 把字幕栏宽从 600px 改成「___」 6. 在字幕列表中新增一组职称「___」、姓名「___」 请保留原本的卷动动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/outro-credits-roll
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/outro-credits-roll

## License

MIT
