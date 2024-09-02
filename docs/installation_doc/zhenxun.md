---
title: 安装真寻Bot
subSidebar: false
---

::: warning 版本警告
真寻Bot需要python环境为 **python3.9+**
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

# 在Linux环境还需要安装额外依赖
playwright install-deps chromium
```

3. 设置超级用户，打开 **.env.dev** 文件，在`SUPERUSERS`和`qq`中添加自己的QQ

```python
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

4. 首次运行后会在data目录下生成 **database.json**(数据库配置) 和 **config.yaml**(插件配置) 文件

```python
# 数据库（必要）
# 如果填写了bind就不需要再填写后面的字段了#）
# 示例："bind": "postgres://user:password@127.0.0.1:5432/database"
{
    "bind": "",
    "sql_name": "postgres",
    "user": "",         # 用户名
    "password": "",     # 密码
    "address": "",      # 地址
    "port": "",         # 端口
    "database": ""      # 数据库名
}

############################################################
### 如果你是与教程一模一样的命令代码，且数据库也在该服务器上 ###
############################################################
# 可以直接复制以下配置
{
    "bind": "",
    "sql_name": "postgres",
    "user": "postgres",         # 用户名
    "password": "zhenxun_bot",     # 密码
    "address": "127.0.0.1",      # 地址
    "port": "5432",         # 端口
    "database": "zhenxun_bot"      # 数据库名
}
```

5. 启动真寻，会在 **configs** 和 **data/configs** 目录下生成各种配置文件

```bash
python3 bot.py
# or
python bot.py
```

:::tip 提示
首次启动会下载资源，时间较久，请耐心等待
:::

当你的控制台出现以下日志，说明你已经成功了🎉🎉
---

```bash
08-14 23:18:44 [INFO] zhenxun | CMD[Web UI] API启动成功
08-14 23:18:44 [INFO] uvicorn | Application startup complete.
08-14 23:18:44 [INFO] uvicorn | Uvicorn running on http://127.0.0.1:8080 (Press CTRL+C to quit)
```
:::tip


:::