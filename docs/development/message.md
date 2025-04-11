---
title: 消息发送
subSidebar: false
---

## 插件内消息发送

```python
from nonebot import on_command
from zhenxun.utils.message import MessageUtils

_matcher = on_command('test')

@_matcher.handle()
async def _():
    # 发送文本
    await MessageUtils.build_message("你好").send()
    # 发送图片
    # 图片数据可以是BuildImage, bytes, Path, base64, BytesIO
    img = ...
    await MessageUtils.build_message(img).send()
    # 发送图片和文本
    await MessageUtils.build_message(["你好啊", img]).send()
```

## 转发消息

```python
from zhenxun.utils.message import MessageUtils

# 消息列表
msg_list = ['123', '123', img]
# 转为alc消息
alc_msg = MessageUtils.build_message(msg_list)
# 发送转发消息，头像为qq是`123123123`的头像，名称为小真寻
await MessageUtils.alc_forward_msg(alc_msg, '123123123', '小真寻').send()
```

## 主动消息发送

```python
from zhenxun.utils.platform import PlatformUtils


await PlatformUtils.send_message(bot, user_id, group_id, message)
# 示例
# 在群组123123123发送消息
await PlatformUtils.send_message(bot, None, 123123123, "大家好")
# 对好友123123123发送消息
await PlatformUtils.send_message(bot, 123123123, None, "你好")
```

## 发送给超级用户
```python
from zhenxun.utils.platform import PlatformUtils

await PlatformUtils.send_superuser(bot, message, superuser_id)
# 示例
# 随机发送给一个超级用户
# 需要在.env.dev中配置好 `PLATFORM_SUPERUSERS`
await PlatformUtils.send_superuser(bot, "大家好")

# 发送给指定的超级用户（123123123）
await PlatformUtils.send_superuser(bot, "大家好", 123123123)
```

## 广播

```python
# 广播方法
async def broadcast_group(
    message: str | UniMessage,
    bot: Bot | list[Bot] | None = None,
    bot_id: str | set[str] | None = None,
    ignore_group: set[int] | None = None,
    check_func: Callable[[Bot, str], Awaitable] | None = None,
    log_cmd: str | None = None,
    platform: Literal["qq", "dodo", "kaiheila"] | None = None,
):
    """获取所有Bot或指定Bot对象广播群聊

    参数:
        message: 广播消息内容
        bot: 指定bot对象.
        bot_id: 指定bot id.
        ignore_group: 忽略群聊列表.
        check_func: 发送前对群聊检测方法，判断是否发送.
        log_cmd: 日志标记.
        platform: 指定平台
    """
    ...


from zhenxun.utils.platform import broadcast_group

# 发送给所有群组
await broadcast_group("大家好")
```