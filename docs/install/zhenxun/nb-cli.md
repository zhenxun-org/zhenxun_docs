---
title: 安装小真寻(nb-cli)
subSidebar: false
id: nb-install-zhenxun
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning 版本警告

真寻Bot需要python版本为 **>=3.10**

:::

## 安装nb-cli


```shell
pip install nb-cli
```

## 安装plugin-zhenxun


### 使用nb-cli


```shell
nb self install nb-cli-plugin-zhenxun
```

### 使用pip

```shell
pip install nb-cli-plugin-zhenxun
```

## 安装真寻
---

1.使用nb-cli命令

选择在当前目录安装小真寻
```shell
nb zx
```
![_](/img/install/zhenxun/install_1.png)

2.按自身情况选择安装方式，这里选择下载安装

![_](/img/install/zhenxun/install_2.png)

3.等待下载完成并根据提示设置配置

![_](/img/install/zhenxun/install_3.png)

4.根据提示完成后启动

![_](/img/install/zhenxun/install_4.png)

## 启动

* 使用普通命令
```shell
cd zhenxun_bot

poetry run python bot.py
```

* 使用nb-cli
```shell
cd zhenxun_bot

nb zx start
```


#### 当你的控制台出现以下日志，说明你已经成功了🎉🎉

```bash
08-14 23:18:44 [INFO] zhenxun | CMD[Web UI] API启动成功
08-14 23:18:44 [INFO] uvicorn | Application startup complete.
08-14 23:18:44 [INFO] uvicorn | Uvicorn running on http://127.0.0.1:8080 (Press CTRL+C to quit)
```

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
