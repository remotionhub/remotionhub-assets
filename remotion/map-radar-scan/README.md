# Map Radar Scan

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/map-radar-scan/cf506e3db31d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/map-radar-scan.

## Usage

Copy `src/MapRadarScan.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { MapRadarScan, mapRadarScanDefaultProps } from './MapRadarScan'

export function RemotionRoot() {
  return (
    <Composition
      id="MapRadarScan"
      component={MapRadarScan}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapRadarScanDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `▌ 台湾雷达扫描系统 v2.4` | Main title text. |
| `subtitle` | `string` | `TAIWAN RADAR SURVEILLANCE ACTIVE` | Subtitle text. |
| `themeColor` | `string` | `#4ade80` | Primary theme color. |
| `bgColor` | `string` | `#020b02` | Background color of the radar screen. |
| `scanSpeed` | `number` | `2` | Degrees of rotation per frame. |
| `tailDegrees` | `number` | `70` | Length of the sweep tail in degrees. |
| `radarRadius` | `number` | `390` | Radius of the radar display circle. |
| `cities` | `array` | `[{"name":"台北","lat":25.033,"lng":121.565},{"name":"新竹","lat":24.807,"lng":120.969},{"name":"台中","lat":24.148,"lng":120.674},{"name":"台南","lat":23,"lng":120.227},{"name":"高雄","lat":22.627,"lng":120.301},{"name":"花莲","lat":23.991,"lng":121.611}]` | List of cities/targets on the radar display. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的雷达扫描动画组件（文件：MapRadarScan.tsx），请帮我做以下调整： 1. 把城市目标点改成「___」（修改 RADAR-CITIES 阵列，提供 name/lat/lng） 2. 把雷达颜色主题从绿色 #4ade80 改成「___」（全域替换） 3. 把扫描速度从每帧 2 度改成「___」度（修改 frame * 2 的乘数） 4. 把扫描尾迹长度从 70 度改成「___」度（修改 TAIL-DEGREES 常数） 5. 把雷达半径从 390 改成「___」 6. 把系统版本号从「v2.4」改成「___」 请保留台湾轮廓、雷达扫描逻辑与目标闪烁效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/map-radar-scan
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/map-radar-scan

## License

MIT
