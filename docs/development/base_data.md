---
title: 基础数据
subSidebar: false
---

## 基础数据

### 好感度

```python
from zhenxun.models.sign_user import SignUser

# 获取用户签到数据
sign_user = await SignUser.get_or_none(user_id=user_id)

# 好感度
impression = sign_user.impression

# 签到次数
sign_count = sign_user.sign_count

# 双倍签到增加概率
add_probability = sign_user.add_probability

# 修改好感度
sign_user.impression = sign_user.impression + 100
await sign_user.save()
```

### 金币/道具

```python
from zhenxun.models.user_console import UserConsole

# 获取用户数据
user = await UserConsole.get_user(user_id)

# 用户金币
gold = user.gold

# 用户道具
props = user.props

# 增加金币方法
async def add_gold(
    cls, user_id: str, gold: int, source: str, platform: str | None = None
):
    """添加金币

    参数:
        user_id: 用户id
        gold: 金币
        source: 来源，一般是插件模块名
        platform: 平台.
    """
    ...
# 例如，用户12345678从签到获取100金币
await UserConsole.add_gold(12345678, 100, 'sign_in')

# 减少金币方法
from zhenxun.utils.enum import GoldHandle

async def reduce_gold(
    cls,
    user_id: str,
    gold: int,
    handle: GoldHandle,
    plugin_module: str,
    platform: str | None = None,
):
    """消耗金币

    参数:
        user_id: 用户id
        gold: 金币
        handle: 金币处理
        plugin_name: 插件模块
        platform: 平台.

    异常:
        InsufficientGold: 金币不足
    """
    ...
# 例如，用户12345678从购买道具花费200金币
await UserConsole.reduce_gold(12345678, 200, GoldHandle.BUY , 'shop')


# 道具增加方法（使用道具uuid）
async def add_props(
    cls, user_id: str, goods_uuid: str, num: int = 1, platform: str | None = None
):
    """添加道具

    参数:
        user_id: 用户id
        goods_uuid: 道具uuid
        num: 道具数量.
        platform: 平台.
    """
    ...
# 例如，用户12345678增加1个道具
await UserConsole.add_props(12345678, 'dfwenoignwqwe-qwe21ddd-2', 1)

# 道具增加方法（使用道具名称）
async def add_props_by_name(
    cls, user_id: str, name: str, num: int = 1, platform: str | None = None
):
    """根据名称添加道具

    参数:
        user_id: 用户id
        name: 道具名称
        num: 道具数量.
        platform: 平台.
    """
    ...
# 例如，用户12345678增加1个道具
await UserConsole.add_props_by_name(12345678, '测试道具A', 1)


# 使用道具方法（推荐，使用道具uuid）
async def use_props(
    cls, user_id: str, goods_uuid: str, num: int = 1, platform: str | None = None
):
    """添加道具

    参数:
        user_id: 用户id
        goods_uuid: 道具uuid
        num: 道具数量.
        platform: 平台.
    """
    ...
# 例如，用户12345678使用1个道具
await UserConsole.use_props(12345678, 'dfwenoignwqwe-qwe21ddd-2', 1)

# 使用道具方法（使用道具名称）
async def use_props_by_name(
    cls, user_id: str, name: str, num: int = 1, platform: str | None = None
):
    """根据名称添加道具

    参数:
        user_id: 用户id
        name: 道具名称
        num: 道具数量.
        platform: 平台.
    """
    ...
# 例如，用户12345678使用1个道具
await UserConsole.use_props_by_name(12345678, '测试道具A', 1)
```
## 好友/群组列表

### 好友列表

```python
from zhenxun.utils.platform import PlatformUtils

# 获取好友列表，平台
friend_list, platform = await PlatformUtils.get_friend_list(bot)
```

### 群组列表

```python
from zhenxun.utils.platform import PlatformUtils

# 获取群组列表，平台
group_list, platform = await PlatformUtils.get_group_list(bot)
```

## 其他

### 获取平台

```python
from nonebot import on_command, Bot
from nonebot_plugin_uninfo import Uninfo
from zhenxun.utils.platform import PlatformUtils

_matcher = on_command("test")

@_matcher.handle()
async def _(bot: Bot, session: Uninfo):
    # 获取平台，使用Bot
    platform = await PlatformUtils.get_platform(bot)
    # 获取平台，使用Uninfo
    platform = await PlatformUtils.get_platform(session)
```