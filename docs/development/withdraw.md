---
title: 消息撤回
subSidebar: false
---

## 消息撤回
```python
from nonebot import on_command, Bot
from zhenxun.utils.withdraw_manage import WithdrawManager
from zhenxun.utils.message import MessageUtils

_matcher = on_command("test")

@_matcher.handle()
async def _(bot: Bot):
    receipt = await MessageUtils.build_message("123").send()
    message_id = receipt.msg_ids[0]["message_id"]
    # 10秒后撤回消息
    WithdrawManager.append(
        bot,
        message_id,
        10,
    )
```