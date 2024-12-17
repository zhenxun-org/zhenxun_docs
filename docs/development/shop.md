---
title: 商店配置
subSidebar: false
---

## 介绍

添加商店的商品信息与使用函数

## 注册函数

```python

from nonebot_plugin_alconna import UniMessage, UniMsg
from nonebot_plugin_uninfo import Uninfo

@shop_register(
    name="测试道具A",
    price=99,
    des="随便侧而出",
    load_status=False,
    icon="sword.png",
)
async def _(
    user_id: str,               # 用户id
    group_id: str | None,       # 群组id
    bot: Bot,                   # Bot实例
    event: Event,               # event实例
    num: int,                   # 道具使用个数
    send_success_msg: bool,     # 是否发送使用成功消息
    max_num_limit: int,         # 最大使用个数限制
    session: Uninfo,            # Uninfo实例
    message: UniMsg             # UniMsg实例
):
    # print(user_id, group_id, "使用测试道具")
    pass
```
