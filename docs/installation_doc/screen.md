---
title: Linux下持久化运行
subSidebar: false
---


恭喜！经历困难之后到了最后一步，那就是持久化运行 0v<
===

::: warning
本节教程为Linux持久化运行教程，Windows可直接跳过
:::

:::tip
教程中使用的是较为简单的Screen，如果你有其他工具的使用经验，可以跳过本节。
:::

即刻开始（以Ubuntu为例）
===

1.安装screen

```bash
sudo apt install screen
```

2.创建会话

```bash
screen -S zhenxun
```

3.进入真寻目录

```bash
cd .....
```

4.启动！

```bash
poetry shell    # 进入虚拟环境
python3 bot.py
```

如果退出或关闭后
===

:::tip
使用以下命令恢复会话

```bash
screen -r zhenxun
```

:::
