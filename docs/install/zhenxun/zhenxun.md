---
title: 安装小真寻(手动)
subSidebar: false
id: install-zhenxun
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning 版本警告

真寻Bot需要python版本为 **>=3.10**

:::

##  下载


从 [HibiKier / zhenxun_bot](https://github.com/zhenxun-org/zhenxun_bot) clone代码 或 直接下载 [压缩包](https://github.com/zhenxun-org/zhenxun_bot/archive/refs/heads/main.zip) 解压

## 安装依赖包

### 安装poetry

```shell
pip install poetry
```

### 安装依赖

```shell
poetry install
```

:::warning
如果提示找不到命令，你可以尝试使用以下命令
```shell
python -m poetry install
```
:::


## 基础配置

### 设置超级用户，打开 **.env.dev** 文件，在`SUPERUSERS`和`qq`中添加自己的QQ

```python title="env.dev"
SUPERUSERS=["123456789"]

PLATFORM_SUPERUSERS = '
  {
    "qq": ["123456789"],
    "dodo": [],
    "kaiheila": [],
    "discord": []
  }
'
```

### 数据库配置

<Tabs>
  <TabItem value="Postgresql" label="Postgresql" default>
    建议的数据库，嫌麻烦请使用`Sqlite`
    ```python title="env.dev"
    # 示例: "postgres://user:password@127.0.0.1:5432/database"

    DB_URL = "postgres://用户名:密码@127.0.0.1:端口/数据库名称"

    # 如果你是与教程一模一样的命令代码，且数据库也在该服务器上，可以直接复制以下URL
    DB_URL = "postgres://postgres:zhenxun_bot@127.0.0.1:5432/zhenxun_bot"
    ```
  </TabItem>
  <TabItem value="Sqlite" label="Sqlite">
    Sqlite可以放置在任何位置，`sqlite:`之后为存放路径，但建议在data文件夹下新建db文件夹后使用以下
    ```python title="env.dev"
    # 示例: "sqlite:data/db/zhenxun.db"

    DB_URL = "sqlite:data/db/zhenxun.db"
    ```
  </TabItem>
  <TabItem value="Mysql" label="Mysql">
    与`Postgresql`相同
    ```python title="env.dev"
    # 示例: "mysql://user:password@127.0.0.1:3306/database"

    DB_URL = "mysql://用户名:密码@127.0.0.1:端口/数据库名称"
    ```
  </TabItem>
</Tabs>

### 基础插件配置

文件保存在 **data/config.yaml**，所有真寻相关插件都在使用该配置文件，按需修改

启动
---

```bash
poetry run python bot.py
```

#### 当你的控制台出现以下日志，说明你已经成功了🎉🎉

```bash
08-14 23:18:44 [INFO] zhenxun | CMD[Web UI] API启动成功
08-14 23:18:44 [INFO] uvicorn | Application startup complete.
08-14 23:18:44 [INFO] uvicorn | Uvicorn running on http://127.0.0.1:8080 (Press CTRL+C to quit)
```

:::warning
如果遇到 playwright 安装相关的报错（以下）

<img src={require("/img/zhenxun/install-playwright.png").default} width="500" />

可以尝试使用以下命令后再运行
```shell
poetry run playwright install
```
:::

:::tip 提示
当前版本真寻本体与插件库分离，你可以在以下获取插件或其他相关，或通过与真寻的对话命令安装插件（插件商店）
:::

|                                项目名称                                | 主要用途 |                      仓库作者                       |             备注              |
| :--------------------------------------------------------------------: | :------: | :-------------------------------------------------: | :---------------------------: |
|      [插件库](https://github.com/zhenxun-org/zhenxun_bot_plugins)      |   插件   |    [zhenxun-org](https://github.com/zhenxun-org)    |     原 plugins 文件夹插件     |
| [插件索引库](https://github.com/zhenxun-org/zhenxun_bot_plugins_index) |   插件   |    [zhenxun-org](https://github.com/zhenxun-org)    |        扩展插件索引库         |
|    [一键安装](https://github.com/soloxiaoye2022/zhenxun_bot-deploy)    |   安装   | [soloxiaoye2022](https://github.com/soloxiaoye2022) |           第三方            |
|         [WebUi](https://github.com/HibiKier/zhenxun_bot_webui)         |   管理   |       [hibikier](https://github.com/HibiKier)       | 基于真寻 WebApi 的 webui 实现 |
|  [安卓 app(WebUi)](https://github.com/YuS1aN/zhenxun_bot_android_ui)   |   安装   |         [YuS1aN](https://github.com/YuS1aN)         |            第三方             |
