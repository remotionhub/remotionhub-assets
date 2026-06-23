# Dataviz Gantt

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-gantt/822ad5fb6214-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-gantt.

## Usage

Copy `src/DatavizGantt.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizGantt, datavizGanttDefaultProps } from './DatavizGantt'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizGantt"
      component={DatavizGantt}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizGanttDefaultProps}
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
我有一个用 Remotion 写的项目时程甘特图组件（文件：GanttChart.tsx），请帮我做以下调整： 1. 把标题从「项目时程甘特图」改成「___」 2. 把副标题从「14 周开发周期总览」改成「___」 3. 在 TASKS 数组中，把任务名称（`name`）依序改成「___、___、…」 4. 把各任务的开始周（`start`）与结束周（`end`）依序调整为「___」（单位为周，从 0 起算） 5. 把 `TODAY-WEEK` 从 9 改成 ___（代表今日标记线出现在第几周） 6. 把每条 bar 的出场间隔从 15 帧改成 ___（数字越小出场越密集） 请保留原本的弹簧展开动画、发光效果与今日线淡入，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-gantt
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-gantt

## License

MIT
