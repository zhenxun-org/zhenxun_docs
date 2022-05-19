被动技能发送控制
===

::: tip

通过hook来阻断被动技能发送的信息

:::

被动技能
---

一般为 __主动发送消息__ ，不受真寻插件控制的定时任务或on_message等

使用hook被动控制
---

* 在消息添加特定字符为来达到阻断消息发送的目的
* 在权限为-1的群中不再需要手动发送“关闭全部被动”之类的命令
* 不需要写if，完全由hook来管理

定义被动技能
---
  
使用标准定义一个被动，如果不明白如何定义请查看插件标准！

```python
__plugin_task__ = {"genshin_alc", "原神黄历提醒"}
```

::: tip

特定字符串：

* \[\_task|{plugin_name}\]]

:::

栗子
---

```python
matcher.send("[[_task|genshin_alc]]" + "这是原神黄历提醒的被动提醒")
```

完整栗子
---

```python
@scheduler.scheduled_job(
    "cron",
    hour=10,
    minute=25,
)
async def _():
    # 每日提醒
    bot = get_bot()
    if bot:
        gl = await bot.get_group_list()
        gl = [g["group_id"] for g in gl]
        alc_img = await get_alc_image(ALC_PATH)
        if alc_img:
            mes = "[[_task|genshin_alc]]" + alc_img + "\n ※ 黄历数据来源于 genshin.pub"
            for gid in gl:
                if await group_manager.check_group_task_status(gid, "genshin_alc"):
                    await bot.send_group_msg(group_id=int(gid), message="" + mes)
```
