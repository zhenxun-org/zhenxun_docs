---
title: 商店配置
subSidebar: false
---

## 概览

添加商店的商品信息与使用函数

## 方法介绍

### 使用方法注册函数

```python

from nonebot_plugin_alconna import UniMessage, UniMsg
from nonebot_plugin_uninfo import Uninfo

@shop_register(
    name="测试道具A",
    price=99,
    des="随便侧而出",
    load_status=False,
    icon="sword.png",
    **{"prob": 100}             # 自定义参数传递
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
    prob: int                   # 自定义参数
):
    print(user_id, group_id, "使用测试道具")
    return "谢谢你使用道具"     # 在这里返回信息将会发送给用户，不返回时将发送使用道具默认回复
```

使用方法中的参数可以根据自身需求来  
例如当仅需要用户id和群组id时，可以使用以下

```python

from nonebot_plugin_alconna import UniMessage, UniMsg
from nonebot_plugin_uninfo import Uninfo

@shop_register(
    name="测试道具A",
    price=99,
    des="随便侧而出",
    load_status=True,           # 为False时不加载该函数
    icon="sword.png",
    **{"prob": 100}             # 自定义参数传递
)
async def _(user_id: str, group_id: str | None):
    print(user_id, group_id, "使用测试道具")
```

### 道具使用前函数

函数参数规则与注册函数相同  
道具名称作为键值，相同道具可以拥有多个使用前函数  
可以抛出`NotMeetUseConditionsException`异常，阻断使用，并返回信息

```python
from zhenxun.utils.decorator.shop import NotMeetUseConditionsException

from nonebot_plugin_alconna import UniMessage, UniMsg
from nonebot_plugin_uninfo import Uninfo

@shop_register.before_handle(name="测试道具A")
async def _(user_id: str, group_id: str):
    print(user_id, group_id, "第一个使用前函数（before handle）")


@shop_register.before_handle(name="测试道具A", load_status=False)   # load_status为False，不加载该函数
async def _(user_id: str, group_id: str):
    print(user_id, group_id, "第二个使用前函数（before handle）")
    raise NotMeetUseConditionsException("太笨了！")  # 抛出异常，阻断使用，并返回信息
```

### 道具使用后函数

与使用前函数相同，但无法抛出`NotMeetUseConditionsException`

```python
@shop_register.after_handle(name="测试道具A")
async def _(user_id: str, group_id: str):
    print(user_id, group_id, "第一个使用后函数（after handle）")

@shop_register.after_handle(name="测试道具A")
async def _(user_id: str, group_id: str):
    print(user_id, group_id, "第二个使用后函数（after handle）")
```

## 多个道具使用同一个注册函数（以签到为栗子）

可以使用元祖参数来传递多个道具名称和配置

### 使用方法注册函数

```python
from nonebot_plugin_alconna import UniMessage, UniMsg
from nonebot_plugin_uninfo import Uninfo

@shop_register(
    name=("好感度双倍加持卡Ⅰ", "好感度双倍加持卡Ⅱ", "好感度双倍加持卡Ⅲ"),
    price=(30, 150, 250),
    des=(
        "下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）",
        "下次签到双倍好感度概率 + 20%（平平庸庸）（同类商品将覆盖）",
        "下次签到双倍好感度概率 + 30%（金币才是真命天子！）（同类商品将覆盖）",
    ),
    load_status=True,
    icon=(
        "favorability_card_1.png",
        "favorability_card_2.png",
        "favorability_card_3.png",
    ),
    **{
        "好感度双倍加持卡Ⅰ_prob": 0.1,
        "好感度双倍加持卡Ⅱ_prob": 0.2,
        "好感度双倍加持卡Ⅲ_prob": 0.3,
    },  # 自定义参数，多个道具时需要格式为  道具名称 + 参数名称
)
async def _(session: Uninfo, user_id: int, prob: float):
    """
    prob会根据使用的道具不同而不同
    当使用好感度双倍加持卡Ⅰ时prob为0.1
    当使用好感度双倍加持卡Ⅱ时prob为0.2，以此类推
    """
    pass
```

### 道具使用前/后函数

使用方法与单个使用相同，只是参数使用元祖传递

```python
from zhenxun.utils.decorator.shop import NotMeetUseConditionsException

@shop_register.before_handle(name=("好感度双倍加持卡Ⅰ", "好感度双倍加持卡Ⅱ", "好感度双倍加持卡Ⅲ"))
async def _(user_id: str, group_id: str):
    print(user_id, group_id, "第一个使用前函数（before handle）")

@shop_register.after_handle(name=("好感度双倍加持卡Ⅰ", "好感度双倍加持卡Ⅱ", "好感度双倍加持卡Ⅲ"))
async def _(user_id: str, group_id: str):
    print(user_id, group_id, "第一个使用后函数（after handle）")

```
