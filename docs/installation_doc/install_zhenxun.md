---
title: 安装真寻Bot
subSidebar: false
---

::: warning 版本警告
真寻Bot需要python环境为 **python3.8** 或 **python3.9**
:::

开始部署
===

1. 从 [HibiKier / zhenxun_bot](https://github.com/HibiKier/zhenxun_bot) clone代码 或 直接下载 [压缩包](https://github.com/HibiKier/zhenxun_bot/archive/refs/heads/main.zip) 解压
2. 安装依赖包

```shell
pip3 install poetry     # 使用poetry管理python包
poetry install          # 安装依赖

poetry shell            # 进入虚拟环境

## playwright 需要安装额外的系统环境，在命令行输入以下
playwright install chromium

# 该命令在win下无需输入
playwright install-deps chromium
```

3. 设置超级用户，打开 **.env.dev** 文件，在`SUPERUSERS`中添加自己的QQ

```
SUPERUSERS=["123456789"]
```

4. 打开 **configs/config.py** 填写数据库数据

```python
# 数据库（必要）
# 如果填写了bind就不需要再填写后面的字段了#）
# 示例："bind": "postgresql://user:password@127.0.0.1:5432/database"
bind: str = ""  # 数据库连接链接
sql_name: str = "postgresql"
user: str = ""  # 数据用户名
password: str = ""  # 数据库密码
address: str = ""  # 数据库地址
port: str = ""  # 数据库端口
database: str = ""  # 数据库名称

############################################################
### 如果你是与教程一模一样的命令代码，且数据库也在该服务器上 ###
############################################################
# 可以直接复制以下配置
bind: str = ""  # 数据库连接链接
sql_name: str = "postgresql"
user: str = "uname"
password: str = "zhenxun"
address: str = "127.0.0.1"
port: str = "5432"
database: str = "testdb"
```

1. 启动真寻，会在 **configs** 和 **data/configs** 目录下生成各种配置文件

```
python3 bot.py
# or
python bot.py
```

6. 打开 **configs/config.yaml**，里面包含的是各种插件的配置项，填写完毕后重启真寻Bot
