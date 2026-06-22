# Logo Shield Crest

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-shield-crest/75a5c3d5aebc-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-shield-crest.

## Usage

Copy `src/LogoShieldCrest.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoShieldCrest, logoShieldCrestDefaultProps } from './LogoShieldCrest'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoShieldCrest"
      component={LogoShieldCrest}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoShieldCrestDefaultProps}
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
我有一个用 Remotion 写的盾牌徽章 Logo 动画组件（文件：LogoShieldCrest.tsx），请帮我做以下调整： 1. 修改品牌缩写：把「AC」改成你的品牌缩写（1–3 个大写字母），字体大小默认 80px 可调整 2. 修改彩带文字：把「ACME CORP」改成你的公司全名（建议 2–4 个英文单字，letterSpacing 0.12em） 3. 修改副标语：把「Est. 2024」改成你的品牌标语或成立年份 4. 调整盾牌配色： - 外框描边色默认金色 #f59e0b，可改为品牌色 - 填色默认深蓝 #1e3a5f，可改为你的品牌色（建议深色） - 彩带背景默认金色 #f59e0b，通常与外框同色 5. 调整盾牌大小：默认路径 "M 960 260 L 1080 310..." 中心 960,425，可缩放顶点坐标 6. 调整描边粗细：默认 3px，strokeDasharray 固定 1200（约等于盾牌路径周长） 7. 调整各动画段落时机： - 描边 frame 0-50（约 1.7 秒） - 填色 frame 40-70 - 品牌缩写 spring：frame 60 起动 - 彩带展开 frame 80-105 - 文字淡入 frame 95-120 - 副标语 frame 110-130 请保留盾牌→填色→缩写→彩带→文字→副标语的序列结构，只修改我指定的部分，并返回完整修改后代码。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-shield-crest
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-shield-crest

## License

MIT
