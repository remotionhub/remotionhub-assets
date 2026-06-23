# Dataviz Bullet

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-bullet/d70d3411d590-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-bullet.

## Usage

Copy `src/DatavizBullet.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizBullet, datavizBulletDefaultProps } from './DatavizBullet'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizBullet"
      component={DatavizBullet}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizBulletDefaultProps}
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
我有一个用 Remotion 写的 KPI 达成率子弹图组件（文件：BulletChart.tsx），请帮我做以下调整： 1. 把标题从「KPI 达成率」改成「___」 2. 把指标名称依序改成「___、___、___、___、___」 3. 把各指标的单位依序改成「___、___、___、___、___」 4. 把各指标的最大值、满意值、目标值、实际值依序调整为符合新数据的数字 5. 把各指标的颜色依序改成「___、___、___、___、___」 6. 把每列的入场间隔从 20 帧改成 ___（数字越小出场越密集） 请保留原本的弹簧动画与达标判断逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-bullet
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-bullet

## License

MIT
