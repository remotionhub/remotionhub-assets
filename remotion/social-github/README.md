# Social Github

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-github/1d17236bb5d3-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-github.

## Usage

Copy `src/SocialGithub.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialGithub, socialGithubDefaultProps } from './SocialGithub'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialGithub"
      component={SocialGithub}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialGithubDefaultProps}
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
我有一个用 Remotion 写的 GitHub Repo 卡片组件（文件：GithubRepoCard.tsx），请帮我做以下调整： 1. 把仓库拥有者名称从 "username" 改成「___」（修改顶部 USERNAME 常数） 2. 把仓库名称从 "awesome-project" 改成「___」（修改顶部 REPO-NAME 常数） 3. 把描述文字改成「___」（修改顶部 DESCRIPTION 常数） 4. 把主题标签数组 TOPICS 改成你想要的标签 5. 把星数 STARS、FORKS、WATCHERS 改成你想要的数字 6. 把语言名称 LANGUAGE 与百分比 LANG-PERCENT 改成你的语言 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-github
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-github

## License

MIT
