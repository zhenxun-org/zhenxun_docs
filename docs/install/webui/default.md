---
title: 默认安装
subSidebar: false
id: install-webui-default
---

WebUI安装
===

::::tip

真寻的WebUI已内置，在启动时会自动进行下载，无需手动安装。  
当你出现以下日志时，说明你的WebUI生产非常成功🎉🎉

![_](/img/install/webui_1.png)  

可以直接跳过当前章节🎉🎉

:::tip
登录地址(ip地址与nb端口) 默认: `127.0.0.1:8080`  
如果希望外网访问，需要将.env.dev中的`host`修改为`0.0.0.0`
:::

:::warning
如果你启动时没有出现以上日志，请继续阅读本章节进行手动安装
:::

::::

手动安装
---

### 1. 创建文件夹

在`data`目录下创建文件夹`web_ui`

### 2. 下载WebUI

点击 [此处](https://mirror.ghproxy.com/https://github.com/HibiKier/zhenxun_bot_webui/archive/refs/heads/dist.zip) 下载dist文件夹

### 3.移动文件

将压缩包中`dist`文件夹改名为`public`后解压到`data/web_ui`文件夹中，如下所示  

在目录`data/web_ui/public`下  

![_](/img/install/webui_2.png)

:::info

到此处已安装完成，再次启动不会出现WebUI相关报错的日志🎉🎉

:::

### 4.配置账号密码

在`data/config.yaml`文件中配置项设置账号密码

```yaml
web-ui:
  # web-ui
  # USERNAME: 前端管理用户名
  # PASSWORD: 前端管理密码
  USERNAME: admin
  PASSWORD: 
```

:::warning
必须要设置账号密码，否则无法登陆！
:::
