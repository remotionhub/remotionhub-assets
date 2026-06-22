# Map Area Reveal

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/map-area-reveal/4c9787b19d36-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/map-area-reveal.

## Usage

Copy `src/MapAreaReveal.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { MapAreaReveal, mapAreaRevealDefaultProps } from './MapAreaReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="MapAreaReveal"
      component={MapAreaReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapAreaRevealDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `台湾五大区域` | Main title text. |
| `subtitle` | `string` | `地理区域揭示` | Subtitle text. |
| `springDamping` | `number` | `20` | Spring damping for the reveal animation. |
| `springStiffness` | `number` | `140` | Spring stiffness for the reveal animation. |
| `regions` | `array` | `[{"id":"north","name":"北部","color":"#3b82f6","glowColor":"#60a5fa","startFrame":0,"centerLat":25,"centerLng":121.4,"rx":100,"ry":70,"cities":[{"name":"台北","lat":25.033,"lng":121.565},{"name":"基隆","lat":25.128,"lng":121.739},{"name":"桃园","lat":24.994,"lng":121.301},{"name":"新竹","lat":24.807,"lng":120.969}]},{"id":"central","name":"中部","color":"#22c55e","glowColor":"#4ade80","startFrame":25,"centerLat":24.1,"centerLng":120.7,"rx":100,"ry":90,"cities":[{"name":"台中","lat":24.148,"lng":120.674},{"name":"彰化","lat":24.052,"lng":120.516},{"name":"南投","lat":23.961,"lng":120.972}]},{"id":"south","name":"南部","color":"#f97316","glowColor":"#fb923c","startFrame":50,"centerLat":22.85,"centerLng":120.35,"rx":100,"ry":100,"cities":[{"name":"台南","lat":23,"lng":120.227},{"name":"高雄","lat":22.627,"lng":120.301},{"name":"屏东","lat":22.671,"lng":120.488}]},{"id":"east","name":"东部","color":"#a855f7","glowColor":"#c084fc","startFrame":75,"centerLat":23.9,"centerLng":121.6,"rx":55,"ry":130,"cities":[{"name":"花莲","lat":23.991,"lng":121.611},{"name":"台东","lat":22.798,"lng":121.1}]},{"id":"offshore","name":"外岛","color":"#ef4444","glowColor":"#f87171","startFrame":100,"centerLat":23.5,"centerLng":119.5,"rx":0,"ry":0,"cities":[],"isOffshore":true}]` | Regions config with color and cities. |
| `offshoreIcons` | `array` | `[{"name":"澎湖","x":90,"y":530},{"name":"金门","x":55,"y":460}]` | Positions of offshore island icons. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的地图区域揭示组件（文件：MapAreaReveal.tsx），请帮我做以下调整： 1. 把某个区域的颜色改成「___」（修改 REGIONS 阵列中对应项目的 color/glowColor） 2. 把某个区域的城市清单改成「___」（修改 cities 阵列，提供 name/lat/lng） 3. 把标题「台湾五大区域」改成「___」 4. 调整揭示动画速度：修改各区域 spring 的 stiffness 改大可加速揭示 5. 把外岛图标位置调整（修改 OFFSHORE-ICONS 阵列中的 x/y 值） 请保留台湾轮廓、渐层椭圆色块与城市标记弹出逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/map-area-reveal
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/map-area-reveal

## License

MIT
