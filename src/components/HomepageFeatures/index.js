import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

const FeatureList = [
  {
    title: "权限控制",
    Svg: require("@site/static/img/zhenxun3.svg").default,
    description: (
      <>
        自带插件管理功能，可以实现插件的权限控制，针对群组内，私聊内，全局和单个指定群组的插件管理，
        同时nonebot2插件如果带有PluginMetadata，同样也会被纳入插件管理中，无需额外配置。
      </>
    ),
  },
  {
    title: "WebUI",
    Svg: require("@site/static/img/zhenxun4.svg").default,
    description: <>集成功能丰富的真寻WebUI，方便管理。</>,
  },
  {
    title: "轻松开发",
    Svg: require("@site/static/img/zhenxun6.svg").default,
    description: (
      <>
        除了原生nonebot2外，提供大量已实现方法帮助开发，对于真寻内部插件也提供相应接口和方法。
      </>
    ),
  },
  {
    title: "插件众多",
    Svg: require("@site/static/img/zhenxun2.svg").default,
    description: <>原plugins目录以及第三方插件库，轻松扩展。</>,
  },
  {
    title: "支持多平台",
    Svg: require("@site/static/img/zhenxun5.svg").default,
    description: (
      <>使用Alconna来构建响应期，内部区分频道代码逻辑，支持大部分平台使用。</>
    ),
  },
  {
    title: "有文档(很可爱)",
    Svg: require("@site/static/img/zhenxun1.svg").default,
    description: (
      <>这么可爱的小真寻还提供了文档，对可爱的小真寻还有什么好要求的捏。</>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
