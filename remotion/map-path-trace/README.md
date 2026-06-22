# Map Path Trace

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/map-path-trace/485081b6e2b7-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/map-path-trace.

## Usage

Copy `src/MapPathTrace.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { MapPathTrace, mapPathTraceDefaultProps } from './MapPathTrace'

export function RemotionRoot() {
  return (
    <Composition
      id="MapPathTrace"
      component={MapPathTrace}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapPathTraceDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `西部走廊路线` | Main title text. |
| `subtitle` | `string` | `台北 → 高雄` | Subtitle path text. |
| `traceColor` | `string` | `#38bdf8` | Color of the trace line. |
| `dotColor` | `string` | `#facc15` | Color of the navigator dot. |
| `distanceText` | `string` | `约 355 公里` | Distance display text. |
| `passCountText` | `string` | `5 个` | Count of intermediate pass cities. |
| `speedFrameLimit` | `number` | `110` | Frames count for completing the path trace. |
| `cities` | `array` | `[{"name":"台北","lat":25.033,"lng":121.565},{"name":"桃园","lat":24.994,"lng":121.301},{"name":"新竹","lat":24.807,"lng":120.969},{"name":"台中","lat":24.148,"lng":120.674},{"name":"嘉义","lat":23.48,"lng":120.449},{"name":"台南","lat":23,"lng":120.227},{"name":"高雄","lat":22.627,"lng":120.301}]` | List of cities on the path route. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的路径描绘动画组件（文件：MapPathTrace.tsx），请帮我做以下调整： 1. 把起点城市从「台北」改成「___」（修改 ROUTE-CITIES 阵列第一个元素的 name/lat/lng） 2. 把终点城市从「高雄」改成「___」（修改 ROUTE-CITIES 阵列最后一个元素的 name/lat/lng） 3. 把路径描绘颜色从蓝色 #38bdf8 改成「___」 4. 把移动小圆点颜色从黄色 #facc15 改成「___」 5. 调整描绘速度：想更快请把 interpolate 的第二个参数从 [0, 110] 改小；想更慢改大 6. 把左侧资讯面板「预计距离」的数值改成「___」 请保留台湾轮廓、polyline 路径与站点标记逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/map-path-trace
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/map-path-trace

## License

MIT
