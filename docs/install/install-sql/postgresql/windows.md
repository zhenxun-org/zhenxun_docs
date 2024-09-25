---
title: Windows
sidebar_position: 1
---

Windows下安装
===

1.下载
----

点击[这里](https://get.enterprisedb.com/postgresql/postgresql-15.1-1-windows-x64.exe)将下载Postgresql-15.1-1版本安装包

2.安装
----

1.双击安装程序，点击`Next`  
![_](/img/install/install_sql/install_1.png)

2.选择安装路径（没有特殊情况一般默认即可），继续`Next`

:::warning
安装路径请不要出现中文！
:::

![_](/img/install/install_sql/install_2.png)

3.去掉`Stack Builder`即可，不影响使用，`Next`  
![_](/img/install/install_sql/install_3.png)

4.数据存储路径（没有特殊情况一般默认即可），`Next`  
![_](/img/install/install_sql/install_4.png)

5.输入postgres用户的密码，例如: `zhenxun_bot`  
![_](/img/install/install_sql/install_5.png)

6.默认端口，`Next`  
![_](/img/install/install_sql/install_6.png)

7.接下来一路`Next`直到进入安装  
![_](/img/install/install_sql/install_7.png)

8.✨✨ 安装完成 ✨✨  
![_](/img/install/install_sql/install_8.png)

3.配置连接
----

1.找到安装的pgAdmin，直接启动！  
![_](/img/install/install_sql/setup_1.png)

:::tip
是英文界面？别急，已[百度](https://www.baidu.com/baidu?tn=monline_3_dg&ie=utf-8&wd=pgadmin4%E8%AE%BE%E7%BD%AE%E4%B8%AD%E6%96%87)
:::

2.新建连接

左侧栏右键点击`Servers`后选择`Register`，在点击`服务器`  
![_](/img/install/install_sql/setup_2.png)

3.随便(bushi 起一个响亮的名字  
![_](/img/install/install_sql/setup_3.png)

4.填写配置  
填写`主机名称/地址`，如果是连接远程服务器的话对应的服务器IP，本地的话可以直接填写`127.0.0.1`  
`端口`就是安装时配置的端口，没有修改的话默认`5432`  
`密码`就是安装时配置的密码  
![_](/img/install/install_sql/setup_4.png)

5.✨✨ 点击保存 ✨✨  
左侧栏会出现一头🐘  
![_](/img/install/install_sql/setup_5.png)

4.新建数据库
---

1.展开🐘🐘  
右击`数据库`，选择`创建`后点击`数据库`  
![_](/img/install/install_sql/create_1.png)

2.✨✨ 直接创建！ ✨✨  
设置数据库名称后点击`保存`  
![_](/img/install/install_sql/create_2.png)

:::tip
✨✨ 嗨呀，终于完成`Postgresql`的数据库配置了，好累呀，火速下一步，安装真寻捏 ✨✨
:::
