添加商品和对应使用方法
===

::: tip

在不修改shop插件代码的情况，添加商品和对应生效方法

:::

## 导入方法

```python

# 导入添加商品的 export 和 注册方法的 export
from nonebot.plugin import require

# use 提供了一个方法
# use.register_use(goods_name: str, **kwargs) ： 注册插件使用方法

# shop提供了三个方法
#
# 注册商品
# shop.register_goods(
#         name: str,                            # 商品名称
#         price: int,                           # 商品价格
#         des: str,                             # 商品简介
#         discount: Optional[float] = 1,        # 商品折扣
#         limit_time: Optional[int] = 0,        # 商品限时
#         **kwargs,
# )
# 删除商品
# shop.delete_goods(name: str, id_: int)

# 更新商品
# shop.update_goods(**kwargs)

use = require("use")
shop = require("shop_handle")

```

## 注册商品和生效方法（方式一）

> 注册商品方法可以通过功能`添加商品`替代，在代码中一般为启动注册

```python

# 注册商品
await shop.register_goods(
    "好感度双倍加持卡Ⅰ", 30, "下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）", **{"prob": 0.1}
)

# 定义生效方法
# 注册商品对应的使用方法
### 方式一
async def sign_card(**kwargs):
    goods_name = kwargs.get('goods_name')     # 所有方法中都会含有goods_name
    user_id = kwargs.get('user_id')     # 所有方法中都会含有user_id
    group_id = kwargs.get('group_id')   # 所有方法中都会含有group_id
    bot = kwargs.get('_bot')            # 所有方法中都会含有bot
    event = kwargs.get('event')         # 所有方法中都会含有event
    num = kwargs.get('num')             # 道具单次使用数量
    prob = kwargs.get('prob')             # prob为自己定义传递的值
    ...     # 处理逻辑


# 以下两种方式是通过参数名称赋予值，所以参数名称必须相同

### 方式二（推荐！）
# 方式一中的所有参数可以通过args方式传递，注：_bot为bot               # prob为自己定义传递的值
async def sign_card(goods_name: str, user_id: int, group_id: int, num: int, bot: Bot, event: Event, prob: float): 
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

```

## 注册商品和生效方法（方式二，推荐！）

可以直接注册商品和对应使用函数

```python

# 定义商品对应使用方法与方法一无异，含有三种形式，这里使用推荐的第二种形式

from utils.decorator.shop import shop_register

# 注册单个商品
@shop_register(
    name=好感度双倍加持卡Ⅰ,
    price=30,
    des="下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）",
    load_status=True,
    ** {"prob": 0.1},
)
async def sign_card(user_id: int, group_id: int, prob: float): 
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
    ** {"好感度双倍加持卡Ⅰ_prob": 0.1, "好感度双倍加持卡Ⅱ_prob": 0.2, "好感度双倍加持卡Ⅲ_prob": 0.3},
)
async def sign_card(user_id: int, group_id: int, prob: float):
    user = await SignGroupUser.ensure(user_id, group_id)
    await user.update(add_probability=prob).apply()

# 注册多个商品，共用价格，简介，加载状态等
# 其中 价格(price)，简介(des)，加载状态(load_status) 可不为元祖
@shop_register(
    name=("好感度双倍加持卡Ⅰ", "好感度双倍加持卡Ⅱ", "好感度双倍加持卡Ⅲ"),
    price=30,       # 等同于 (30, 30, 30)
    des="下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）",
    load_status=Config.get_config("shop", "IMPORT_DEFAULT_SHOP_GOODS"),
    ** {"好感度双倍加持卡Ⅰ_prob": 0.1, "好感度双倍加持卡Ⅱ_prob": 0.2, "好感度双倍加持卡Ⅲ_prob": 0.3},
)
async def sign_card(user_id: int, group_id: int, prob: float):
    user = await SignGroupUser.ensure(user_id, group_id)
    await user.update(add_probability=prob).apply()
```

## 完整代码（方式一）

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
        goods_name = kwargs.['goods_name']
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

## 完整代码（方式二）

```python
from nonebot import Driver
from utils.decorator.shop import shop_register

driver: Driver = nonebot.get_driver()


@driver.on_startup
async def _():

    # 注册单个
    @shop_register(
        name="好感度双倍加持卡Ⅰ",
        price=30,
        des="下次签到双倍好感度概率 + 10%（谁才是真命天子？）（同类商品将覆盖）",
        load_status=True,
        ** {"prob": 0.1},
    )
    async def sign_card(goods_name: str, user_id: int, group_id: int, prob: float):
        print(f"USER {user_id} GROUP {group_id} 这个道具：{goods_name}使用成功了：{prob}")
        # do something....
        return "这个道具生效了！"       # 返回值将作为提示内容输出，也可以返回None，在sign_card中使用bot发送消息

    # 注册多个
    @shop_register(
        name=("好人卡", "坏人卡"),
        price=(30, 10),
        des=("这是好人卡", "这是坏人卡"),
        load_status=(True, False),
        ** {"好人卡_prob": 0.1, "坏人卡_prob": 0.2},
    )
    async def sign_card(goods_name: str, user_id: int, group_id: int, prob: float):
        print(f"USER {user_id} GROUP {group_id} 这个道具：{goods_name}使用成功了：{prob}")
        # do something....
        return "这个道具生效了！"       # 返回值将作为提示内容输出，也可以返回None，在sign_card中使用bot发送消息
        

```
