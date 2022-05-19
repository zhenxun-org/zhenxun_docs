---
title: 安装go-cqhttp
subSidebar: false
---

::: tip
go-cqhttp 是什么？  
使用OneBot协议实现的无头QQ，接受消息发往后端处理
:::

::: warning
此页没有显示图片刷新即可
:::

如何安装？
===

1. 从[Mrs4s / go-cqhttp](https://github.com/Mrs4s/go-cqhttp)的Release中下载与你系统对应的最新版本
2. 首次运行会让你选择通信方式，选择 `3`  (反向 Websocket 通信)，会生成一个配置文件**config.yml**
![_](/zhenxun_bot/gocq/gocq0.png)
3. 打开**config.yml**文件，将uin修改为bot账号  
![_](/zhenxun_bot/gocq/gocq1.png)
4. 在**config.yml**文件中将  
`universal: ws://your_websocket_universal.server`  
修改为  
`universal: ws://127.0.0.1:8080/onebot/v11/ws/`

![_](/zhenxun_bot/gocq/gocq2.png)

5. 重启go-cqhttp后扫码登录即可

::: tip
因本项目使用了语音文件等，该音频需要依赖ffmpeg

```
Ubuntu：
    sudo apt install -y ffmpeg
```

:::

::: tip
没有 ws-reverse 怎么办？  
第二步的配置文件选错了，删除**config.yml**重新生成即可
:::
