---
title: 安装使用WebUi
subSidebar: false
---


# 这一步并不是必须的！只是为了可视化方便管理，并且webUi也还未完善

::: warning
因为我是直接使用vue run的，所以该教程也以vue run为主，其他方式如nginx可略过
:::

::: tip
别忘了打开服务器端口，默认是8081，修改端口在vue.config.js文件中！
:::

# 开始安装

## 安装nodejs

   略（百度很多教程，我的环境是Nodejs14

## 安装yarn

```
npm install -g yarn
```

## 安装vue-cli

```
yarn global add @vue/cli
```

## 获取项目

点击 [WebUi](https://codeload.github.com/HibiKier/zhenxun_bot_webui/zip/refs/heads/main) 下载项目压缩包  
or

```
git clone https://github.com/HibiKier/zhenxun_bot_webui.git
```

## 安装依赖

```
yarn
```

## 开始运行

```
yarn run serve
```

# 配置账号密码

在`configs/config.yaml`文件中配置项设置账号密码

```yaml
web-ui:
  # web-ui
  # USERNAME: 前端管理用户名
  # PASSWORD: 前端管理密码
  USERNAME: admin
  PASSWORD: 
```

::: tip
必须要设置账号密码，否则无法登陆！
:::
