---
title: 整合包文档
subSidebar: false
---

:::warning
该整合包仅支持Windows,整合包内已内置Python,GIT
:::

## 下载压缩包文件

- **百度云：**  
  https://pan.baidu.com/s/1MKGOoIgQW1qom_KT3rNhlg?pwd=t7iz

- **夸克云盘：**  
  https://pan.quark.cn/s/b4dc6cb8fb08  
  访问码：Yi46

- **Google Drive：**  
  https://drive.google.com/drive/folders/1dcTWhPZhSt9WqLehyjF6Gj0CXQCS4OWh?usp=drive_link

## 解压文件

将压缩包解压到任意位置，获得里面`zhenxun`文件夹，点击进入文件夹。

## 首次启动

双击`win启动.bat`文件，启动真寻。

:::warning
启动过程中可能因为系统环境问题提示报错：
```
ImportError: DLL load failed while importing ujson: 找不到指定模块。
```

需要根据你的系统下载并安装（选择下方适合你的系统的文件，如果你不知道，请下载第一个）

- [Microsoft Visual C++ Redistributable（x64）](https://aka.ms/vs/17/release/vc_redist.x64.exe)
- [Microsoft Visual C++ Redistributable（x86）](https://aka.ms/vs/17/release/vc_redist.x86.exe)

安装完成后重新启动即可。
:::

如果一切正常，你的命令行窗口会显示以下内容：

![_](/img/beginner/0.png)

## 打开浏览器进行配置

根据提示打开`http://127.0.0.1:8080/#/configure`，会进入以下页面：

![_](/img/beginner/1.png)

:::warning
如果你是在服务器部署，通过本地(外网)打开了真寻前端页面，你需要先进行端口设置  

<details>
<summary>点击查看示例</summary>

例如：  
  你的服务器ip是：`43.133.22.44`  
  真寻启动端口是：`8080`  
  那么你需要先点击地址设置设置端口，修改完成后点击确认  

  <img src={require("/img/beginner/ip_port_set.png").default} width="400" />

</details>

:::

### 配置

* 在`超级用户ID`中填入你的QQ号或其他平台的ID。
* 如果你有其他数据库地址，可以在`数据库地址`中填入，否则保持默认即可。
* 登录用户名和登录密码是真寻前端的登录密码，必须填写，否则无法登录。
* 运行地址和运行端口（除非端口占用）一般默认即可。

### 完成配置

配置完成后点击 **提交** 出现弹框（直接选择确定）：

![_](/img/beginner/2.png)

## 重启

选择 **确定** 之后页面将进行跳转到登录页：

![_](/img/beginner/3.png)

同时后台将会开始重启并下载资源，等待资源下载完毕（总量大概在150mb左右）

![_](/img/beginner/4.png)

下载完成后命令行会显示以下内容：

![_](/img/beginner/5.png)

## 打开浏览器进行登录

在浏览器页面中`http://127.0.0.1:8080/#/`（就是你完成配置跳转的页面）  
输入你刚刚设置的用户名和密码  
点击**登录**

<img src={require("/img/beginner/6.png").default} width="400" />

成功进入该页面

![_](/img/beginner/7.png)

## 完成

至此真寻部分已经完全安装完成  
你可以跳转到 [安装QQ](https://zhenxun-org.github.io/zhenxun_bot/install/install-qq) 进行下一步


<img src={require("/img/beginner/8.png").default} width="700" />

## 测试

如果你 [安装QQ](https://zhenxun-org.github.io/zhenxun_bot/install/install-qq) 完成并且成功连接  
可以通过 `签到` 命令进行测试，`签到`是真寻最基本和重要的功能

<img src={require("/img/beginner/9.png").default} width="700" />