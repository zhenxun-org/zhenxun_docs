---
title: 安装Postgresql数据库
subSidebar: false
---

::: tip
一个关系型数据库，占用比mysql小小小小多了...  
目前来看postgresql版本似乎对真寻没有太大影响（指9.0以上），不会影响正常使用
:::

开始安装
===

Windows
---

1. 在[Postgresql下载页面](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)下载对应系统的Postgresql安装程序
2. 选择安装路径，一路next，中途会让你设置以下postgres用户的密码
3. 在安装目录下找到pgAdmin，使用pgAdmin连接数据库，创建连接，新建数据库即可

Linux (以Ubuntu为例)
---

1. 安装Postgresql

        sudo apt update
        sudo apt install postgresql postgresql-contrib

2. 创建数据库和用户

        sudo su - postgres  # 切换用户
        psql
              #  用户名↓                # 密码↓
        CREATE USER uname WITH PASSWORD 'zhenxun';      # 创建用户
                # 数据库名称↓       所有者↓
        CREATE DATABASE testdb OWNER uname;             # 创建数据库

::: tip

 到这一步数据库已经可以正常使用了！以下步骤主要用于外网可以连接入服务器数据库，可以等需要的时候再配置。

:::

3. 编辑数据库配置文件（路径请已自己的为准）

    * 打开数据库配置文件

            vim /etc/postgresql/12/main/postgresql.conf

    * 找到 `listen_addresses: '*'` 取消前面的 `#` 注释，使用:wq保存退出
    > 建议公网ip同时修改 Port
    * 打开 **pg_hba.conf**

            vim /etc/postgresql/12/main/pg_hba.conf

    * 在最下添加或修改后，使用:wq保存退出

            # 允许任意用户从任意机器上以密码方式访问数据库
            host    all             all             0.0.0.0/0               md5

4. 重启数据库

        sudo systemctl restart postgresql
