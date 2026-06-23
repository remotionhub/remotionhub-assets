# Map Pin Drop

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/map-pin-drop/d8d3524a8033-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/map-pin-drop.

## Usage

Copy `src/MapPinDrop.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { MapPinDrop, mapPinDropDefaultProps } from './MapPinDrop'

export function RemotionRoot() {
  return (
    <Composition
      id="MapPinDrop"
      component={MapPinDrop}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapPinDropDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `城市图钉落点` | Main title text. |
| `sidebarTitle` | `string` | `标记地点` | Title of the sidebar panel. |
| `sidebarSubtitle` | `string` | `台湾城市` | Subtitle of the sidebar panel. |
| `pinColor` | `string` | `#ef4444` | Primary fill color of the drop pin. |
| `pinStrokeColor` | `string` | `#991b1b` | Stroke color of the drop pin. |
| `pinDotColor` | `string` | `#fca5a5` | Inner circle dot color of the drop pin. |
| `springDamping` | `number` | `14` | Damping of the dropping spring animation. |
| `springStiffness` | `number` | `200` | Stiffness of the dropping spring animation. |
| `springMass` | `number` | `0.8` | Mass of the dropping spring animation. |
| `rippleStartFrame` | `number` | `110` | Frame to start the final ripple pulse animation. |
| `pins` | `array` | `[{"name":"台北","lat":25.033,"lng":121.565,"delay":0},{"name":"台中","lat":24.148,"lng":120.674,"delay":18},{"name":"台南","lat":23,"lng":120.227,"delay":36},{"name":"高雄","lat":22.627,"lng":120.301,"delay":54},{"name":"花莲","lat":23.991,"lng":121.611,"delay":72}]` | List of pins to drop with geographical coordinates and delays. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的图钉落点动画组件（文件：MapPinDrop.tsx），请帮我做以下调整： 1. 把城市清单改成「___」（修改 PINS 数组的 name/lat/lng 字段） 2. 把图钉颜色从红色 #ef4444 改成「___」（同时更新 stroke 的 #991b1b） 3. 调整落下弹性：想更有弹感请把 stiffness 从 200 改大；damping 从 14 改小 4. 把涟漪脉冲触发时间从 frame > 110 改成「___」 5. 把右侧图例标题从「标记地点」改成「___」 请保留台湾轮廓、泪滴形图钉路径与压扁动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/map-pin-drop
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/map-pin-drop

## License

MIT
