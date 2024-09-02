添加商品和对应使用方法
===

::: tip

在不修改shop插件代码的情况，添加商品和对应生效方法

:::

## 导入方法1（不推荐）

```python

# 该导入方式可能由于插件加载顺序先后问题导致出错！！

# use 提供了一个方法
# use.register_use(goods_name: str, **kwargs) ： 注册插件使用方法

# shop提供了三个方法
#
# 注册商品
# register_goods(
#         name: str,                            # 商品名称
#         price: int,                           # 商品价格
#         des: str,                             # 商品简介
#         discount: Optional[float] = 1,        # 商品折扣
#         limit_time: Optional[int] = 0,        # 商品限时
#         daily_limit: Optional[int] = 0,       # 每日次数购买限制
#         is_passive: Optional[int] = 0,        # 是否为被动道具（无法主动使用）
#         icon: Optional[int] = 0,              # 图标，路径为 resources/shop_icon
#         **kwargs,
# )
# 删除商品
# delete_goods(name: str, id_: int)

# 更新商品
# update_goods(**kwargs)

# 导入添加商品的（使用require）
from nonebot.plugin import require

use = require("use")
shop = require("shop_handle")

from basic_plugins.shop.use.data_source import register_use, func_manager
from basic_plugins.shop.shop_handle.data_source import register_goods

```

## 导入方法2（推荐）

```python

from utils.decorator.shop import shop_register

```

## 参数说明

```python

# 注册道具方法（以下均为默认值）
register_goods(
    name: str,                            # 商品名称
    price: int,                           # 商品价格
    des: str,                             # 商品简介
    discount: Optional[float] = 1,        # 商品折扣
    limit_time: Optional[int] = 0,        # 商品限时
    daily_limit: Optional[int] = 0,       # 每日次数购买限制
    load_status: bool = True,             # 每日次数购买限制
    is_passive: bool = False,             # 是否为被动道具（无法主动使用）
    icon: str = None,                     # 图标，路径为 resources/image/shop_icon
    **kwargs,
)

# kwargs中的特殊key（以下为默认值）
kwargs["max_num_limit"]: 1,        # 设置单次使用最大数量，默认为1
kwargs["send_success_msg"]: True   # 是否发送基础的使用道具提示，默认提示


# 例子
# 注册好感度加持卡
await register_goods(
    "好感度双倍加持卡Ⅰ", 30, "下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）", **{"prob": 0.1}
)

# 道具使用前函数（非必要，仅在需要时注册）
shop_register.before_handle(
    name: Union[str, Tuple[str, ...]],                  # 道具名称
    load_status: bool = True    # 加载状态
)

# 道具使用后函数（非必要，仅在需要时注册）
shop_register.after_handle(
    name: Union[str, Tuple[str, ...]],                  # 道具名称
    load_status: bool = True    # 加载状态
)


# 道具生效方法，使用前方法，使用后方法，参数的获取方法三种函数均相同
# 更推荐第二种和第三种方式
# 第一种
async def sign_card(**kwargs):
    goods_name = kwargs.get('goods_name')     # 所有方法中都会含有goods_name
    user_id = kwargs.get('user_id')           # 所有方法中都会含有user_id
    group_id = kwargs.get('group_id')         # 所有方法中都会含有group_id
    bot = kwargs.get('_bot')                  # 所有方法中都会含有bot
    event = kwargs.get('event')               # 所有方法中都会含有event
    num = kwargs.get('num')                   # 所有方法中道具单次使用数量
    text = kwargs.get('text')                 # 所有方法中附带的纯文本信息
    message = kwargs.get('message')           # event.message（可以获取at，图片等） 
    prob = kwargs.get('prob')                 # prob为自己定义传递的值
    ...     # 处理逻辑

# 第二种
async def sign_card(goods_name: str, user_id: int, group_id: int, num: int, bot: Bot, event: Event, text: str, message: Message, prob: float): 
    print(f'{user_id}用了{num}个{goods_name}')
    ...     # 处理逻辑

# 第三种
from utils.models import ShopParam

async def sign_card(shop_param: ShopParam):     
    goods_name = shop_param.goods_name
    user_id = shop_param.user_id
    group_id = shop_param.group_id
    bot = shop_param.bot
    event = shop_param.event
    num = shop_param.num
    text = shop_param.text
    message = shop_param.message
    prob = shop_param.prob      # prob为自己定义传递的值
    ...     # 处理逻辑

# 特别提醒！
# 道具使用前方法可以通过抛出异常来阻断使用并回复内容
from utils.decorator.shop import NotMeetUseConditionsException

async def before_handle(user_id: int): 
    print(f'{user_id}太笨了！不准使用道具！')
    raise NotMeetUseConditionsException("小真寻嫌弃你！")     # 消息内容 Union[str, MessageSegment, Message]
    ...     # 处理逻辑
```

<!-- ## 注册商品和生效方法（方式一，不推荐！）

> 注册商品方法可以通过功能`添加商品`替代，在代码中一般为启动注册

```python

# 导入依赖

from nonebot.plugin import require

use = require("use")
shop = require("shop_handle")

from basic_plugins.shop.use.data_source import register_use, func_manager
from basic_plugins.shop.shop_handle.data_source import register_goods

# 注册商品
await register_goods(
    "好感度双倍加持卡Ⅰ", 30, "下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）", **{"prob": 0.1}
)

# 定义生效方法
# 注册商品对应的使用方法
### 方式一
async def sign_card(**kwargs):
    goods_name = kwargs.get('goods_name')     # 所有方法中都会含有goods_name
    user_id = kwargs.get('user_id')           # 所有方法中都会含有user_id
    group_id = kwargs.get('group_id')         # 所有方法中都会含有group_id
    bot = kwargs.get('_bot')                  # 所有方法中都会含有bot
    event = kwargs.get('event')               # 所有方法中都会含有event
    num = kwargs.get('num')                   # 道具单次使用数量
    prob = kwargs.get('prob')                 # prob为自己定义传递的值
    ...     # 处理逻辑

# 以下两种方式是通过参数名称赋予值，所以参数名称必须相同

### 方式二（推荐！）
# 方式一中的所有参数可以通过args方式传递，注：_bot为bot               # prob为自己定义传递的值
async def sign_card(goods_name: str, user_id: int, group_id: int, num: int, bot: Bot, event: Event, prob: float): 
    print(f'{user_id}用了{num}个{goods_name}')
    ...     # 处理逻辑

### 方式三
# 使用BaseModel ShopParam
from utils.models import ShopParam

async def sign_card(shop_param: ShopParam):     
    goods_name = shop_param.goods_name
    user_id = shop_param.user_id
    group_id = shop_param.group_id
    bot = shop_param.bot
    event = shop_param.event
    num = shop_param.num
    prob = shop_param.prob      # prob为自己定义传递的值
    ...     # 处理逻辑

# 进行方法注册
use.register_use("好感度双倍加持卡Ⅰ", sign_card)

``` -->

## 注册商品和生效方法

可以直接注册商品和对应使用函数以及道具使用前，使用后函数

```python

# 定义商品对应使用方法与方法一无异，含有三种形式，这里使用推荐的第二种形式

from utils.decorator.shop import shop_register

# 注册单个商品
@shop_register(
    name="好感度双倍加持卡Ⅰ",
    price=30,
    des="下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）",
    load_status=True,   # 加载状态，控制是否导入该道具，默认值为 True
    daily_limit=1,      # 每日购买次数限制，默认值为 1
    is_passive=False,   # 是否为被动道具，被动道具无法被主动使用，默认值为 False
    icon="favorability_card_1.png",     # 道具图标，路径在 resources/image/shop_icon 下，往该文件夹添加图片即可
    ** {"prob": 0.1},   # s
)
async def sign_card(user_id: int, group_id: int, prob: float): 
    print(f"{user_id}的好感度加持卡生效咯...")
    ...     # 处理逻辑

# 注册多个商品，即多个商品使用相同的处理函数
# 这时参数类型将由字符串转为元祖
# 每个商品拥有各自的数据
# 自定义参数需要使用 {f"{name}_xxx": value} 的形式
@shop_register(
    name=("好感度双倍加持卡Ⅰ", "好感度双倍加持卡Ⅱ", "好感度双倍加持卡Ⅲ"),
    price=(30, 150, 250),
    des=(
        "下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）",
        "下次签到双倍好感度概率 + 20%（平平庸庸）（同类商品将覆盖）",
        "下次签到双倍好感度概率 + 30%（金币才是真命天子！）（同类商品将覆盖）",
    ),
    load_status=Config.get_config("shop", "IMPORT_DEFAULT_SHOP_GOODS"),
    daily_limit=(10, 20, 30)    # 每日购买次数限制
    is_passive=(True, False, True)      # 第二个好感度卡为被动道具，无法主动使用
    icon=("favorability_card_1.png", "favorability_card_2.png", "favorability_card_3.png")
    ** {"好感度双倍加持卡Ⅰ_prob": 0.1, "好感度双倍加持卡Ⅱ_prob": 0.2, "好感度双倍加持卡Ⅲ_prob": 0.3},
)
async def sign_card(user_id: int, group_id: int, prob: float):
    user = await SignGroupUser.ensure(user_id, group_id)
    await user.update(add_probability=prob).apply()

# 注册多个商品，共用价格，简介，加载状态，是否被动，图标等等
# 其中 价格(price)，简介(des)，加载状态(load_status) 可不为元祖
@shop_register(
    name=("好感度双倍加持卡Ⅰ", "好感度双倍加持卡Ⅱ", "好感度双倍加持卡Ⅲ"),
    price=30,       # 等同于 (30, 30, 30)
    des="下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）",
    load_status=Config.get_config("shop", "IMPORT_DEFAULT_SHOP_GOODS"),
    is_passive=True,
    icon="favorability_card_1.png",
    ** {"好感度双倍加持卡Ⅰ_prob": 0.1, "好感度双倍加持卡Ⅱ_prob": 0.2, "好感度双倍加持卡Ⅲ_prob": 0.3},
)
async def sign_card(user_id: int, group_id: int, prob: float):
    user = await SignGroupUser.ensure(user_id, group_id)
    await user.update(add_probability=prob).apply()

# 道具使用前函数和使用后可以注册多个，会遍历执行，顺序为方法顺序，参数与生效方法参数一致可以通过参数名称获取

# 道具使用前函数
@shop_register.before_handle(name="测试道具A")
async def _(user_id: int, group_id: int, goods_name: str):
    print(f"有人要使用{goods_name}道具咯，让我检查一下道具是否安全")
    ...

from utils.decorator.shop import NotMeetUseConditionsException

# 道具使用前函数
@shop_register.before_handle(name="测试道具A")
async def _(user_id: int, goods_name: str):
    if goods_name == '炸弹':
        print(f"坏了！是炸弹！别让他使用！")
        raise NotMeetUseConditionsException("炸弹危险物品！不许用！")       # 该消息将反馈给道具使用者
    ...

# 道具使用后函数
@shop_register.after_handle(name="测试道具A")
async def _(goods_name: str):
    print(f'{goods_name}这个道具已经使用完成啦')

# 道具使用后函数
@shop_register.after_handle(name="测试道具A")
async def _(goods_name: str):
    print(f'{goods_name}这个道具已经使用完成啦（再一次！）')

```

## 完整代码（方式一，看看参数就好了，不推荐啦）

```python

######################################
## 示例：在Bot启动时导入商品和对应方法 ##
#####################################

from nonebot import Driver
from nonebot.plugin import require

driver: Driver = nonebot.get_driver()


use = require("use")
shop = require("shop_handle")

@driver.on_startup
async def _():
    # 生效方法 方式一
    async def sign_card(**kwargs):
        goods_name = kwargs['goods_name']
        user_id = kwargs['user_id']
        group_id = kwargs['group_id']
        prob = kwargs['prob']
        print(f"USER {user_id} GROUP {group_id} 这个道具：{goods_name}使用成功了：{prob}")
        # do something....
        # 使用 bot 进行发送消息
        # bot = kwargs.get('_bot')
        # await bot.send_group_msg(group_id=group_id, message="这个道具生效了！")
        return "这个道具生效了！"       # 返回值将作为提示内容输出，也可以返回None，在sign_card中使用bot发送消息

    # 生效方法 方式二
    async def sign_card(goods_name: str, user_id: int, group_id: int, prob: float):
        print(f"USER {user_id} GROUP {group_id} 这个道具：{goods_name}使用成功了：{prob}")
        # do something....
        return "这个道具生效了！"       # 返回值将作为提示内容输出，也可以返回None，在sign_card中使用bot发送消息

    # 生效方法 方式三
    from utils.models import ShopParam
    async def sign_card(shop_param: ShopParam):
        goods_name = shop_param.goods_name
        user_id = shop_param.user_id
        group_id = shop_param.group_id
        prob = shop_param.prob
        print(f"USER {user_id} GROUP {group_id} 这个道具：{goods_name}使用成功了：{prob}")
        # do something....
        return "这个道具生效了！"       # 返回值将作为提示内容输出，也可以返回None，在sign_card中使用bot发送消息
        

    # 在数据库中注册商品数据
    await shop.register_goods(
        "好感度双倍加持卡Ⅰ", 30, "下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）"
    )

    # 注册商品生效方法
    use.register_use("好感度双倍加持卡Ⅰ", sign_card, **{
        "max_num_limit": 10,       # 设置单次使用最大数量
        "send_success_msg": False   # 不发送基础的使用道具提示
        "prob": 0.1                 # 自己传递的值，在函数中需要使用到
    })
```

## 完整代码（方式二，NICE推荐）

```python
from nonebot import Driver
from utils.decorator.shop import shop_register, NotMeetUseConditionsException
driver: Driver = nonebot.get_driver()


@driver.on_startup
async def _():

    # 注册单个
    @shop_register(
        name="好感度双倍加持卡Ⅰ",
        price=30,
        des="下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）",
        load_status=True,
        daily_limit=100,
        icon="favorability_card_1.png",
        ** {"prob": 0.1},
    )
    async def sign_card(goods_name: str, user_id: int, group_id: int, prob: float):
        print(f"USER {user_id} GROUP {group_id} 这个道具：{goods_name}使用成功了：{prob}")
        # do something....
        return "这个道具生效了！"       # 返回值将作为提示内容输出，也可以返回None，在sign_card中使用bot发送消息

    # 道具使用前，使用后方法仅在需要时注册

    # 注册道具使用前函数
    @shop_register.before_handle(name="好感度双倍加持卡Ⅰ")
    async def _(user_id: int, group_id: int, goods_name: str):
        print("在使用之前，让我给你的道具检查一下发育健不健康")
        ...

    # 注册道具使用前函数
    @shop_register.before_handle(name="好感度双倍加持卡Ⅰ")
    async def _(user_id: int, group_id: int, goods_name: str):
        user = await SignGroupUser.ensure(user_id, group_id)
        if user.impression < 100:
            raise NotMeetUseConditionsException("你的好感度小于100，不准你使用好感度加持卡")
        await user.update(add_probability=prob).apply()

    @shop_register.after_handle(name="测试道具A")
    async def _():
        print("用完了，味道不错")
        ...


    # 注册多个
    @shop_register(
        name=("好人卡", "坏人卡"),
        price=(30, 10),
        des=("这是好人卡", "这是坏人卡"),
        load_status=(True, False),
        daily_limit=(10, 20),
        ** {"好人卡_prob": 0.1, "坏人卡_prob": 0.2},
    )
    async def sign_card(goods_name: str, user_id: int, group_id: int, prob: float):
        print(f"USER {user_id} GROUP {group_id} 这个道具：{goods_name}使用成功了：{prob}")
        # do something....
        return "这个道具生效了！"       # 返回值将作为提示内容输出，也可以返回None，在sign_card中使用bot发送消息
    
    # 一个道具使用前函数和使用后可以注册给多个商品
    # 注册道具使用前函数
    @shop_register.before_handle(name=("好人卡", "坏人卡"))
    async def _(user_id: int, group_id: int, goods_name: str):
        if goods_name == '好人卡':
            print('滴，检测到好人卡')
        if goods_name == '坏人卡':
            print('滴，检测到坏人卡')
        ...

    # 注册道具使用前函数
    @shop_register.before_handle(name=("好人卡", "坏人卡"))
    async def _(user_id: int, group_id: int, goods_name: str):
        if goods_name == '坏人卡':
            raise NotMeetUseConditionsException("你是坏人，抓起来")

    @shop_register.after_handle(name="测试道具A")
    async def _(goods_name: str):
        if goods_name == '好人卡':
            print('好人再见')
        ...

```
