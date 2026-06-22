# Map Route Progress

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/map-route-progress/a7f11309dccc-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/map-route-progress.

## Usage

Copy `src/MapRouteProgress.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { MapRouteProgress, mapRouteProgressDefaultProps } from './MapRouteProgress'

export function RemotionRoot() {
  return (
    <Composition
      id="MapRouteProgress"
      component={MapRouteProgress}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapRouteProgressDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `路线进度` | Main title text. |
| `subtitle` | `string` | `高速铁路` | Subtitle text. |
| `themeColor` | `string` | `#f97316` | Primary theme color. |
| `themeGradientColors` | `array` | `["#f97316","#ea580c"]` | Linear gradient colors for the progress bar. |
| `dotColor` | `string` | `#fbbf24` | Blinking train light dot color. |
| `speedFrameStart` | `number` | `20` | Start frame of the route progress animation. |
| `speedFrameEnd` | `number` | `155` | End frame of the route progress animation. |
| `totalDistanceKm` | `number` | `345` | Total distance parameter in kilometers. |
| `stations` | `array` | `[{"name":"台北","lat":25.033,"lng":121.565,"major":true},{"name":"板桥","lat":25.014,"lng":121.464,"major":false},{"name":"桃园","lat":24.994,"lng":121.301,"major":false},{"name":"新竹","lat":24.807,"lng":120.969,"major":false},{"name":"苗栗","lat":24.56,"lng":120.82,"major":false},{"name":"台中","lat":24.148,"lng":120.674,"major":true},{"name":"彰化","lat":24.052,"lng":120.516,"major":false},{"name":"云林","lat":23.709,"lng":120.431,"major":false},{"name":"嘉义","lat":23.48,"lng":120.449,"major":false},{"name":"台南","lat":23,"lng":120.227,"major":true},{"name":"高雄","lat":22.627,"lng":120.301,"major":true}]` | List of train route stations. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的路线进度条组件（文件：MapRouteProgress.tsx），请帮我做以下调整： 1. 把主要站名改成「___、___、___、___」（修改 HSR-STATIONS 阵列中 major: true 的站点） 2. 把进度条颜色从橘色 #f97316 改成「___」（同时更新 hsrGrad 渐层） 3. 把闪烁脉冲圆点颜色从黄色 #fbbf24 改成「___」 4. 调整填充速度：修改 interpolate(frame, [20, 155], ...) 的第二个参数来加快或放慢 5. 把左上角副标题从「高速铁路」改成「___」 请保留台湾轮廓、高铁路线与列车光点逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/map-route-progress
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/map-route-progress

## License

MIT
