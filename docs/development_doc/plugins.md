真寻Bot插件基本标准
===

简介
---

* 统一插件标准的好处：
  * 自动生成帮助
  * 自动生成配置项
  * 自动生成插件开关
  * 避免了修改插件单独配置文件的麻烦
  * 没有重写matcher，利于增删额外插件
* 普通插件 应该包含：  
  * `__zx_plugin_name__`：插件名
  * `__plugin_usage`：用法
  * `__plugin_des__`：简介
  * `__plugin_cmd__`：命令
  * `__plugin_settings__` ：插件通用设置  

* 有主动发送消息的被动插件（不需要命令调用的插件，如定时任务，hook等） 应该包含：
  * `__plugin_task__`：为你提供一个或多个开关

* 以下作为额外添加选项：
  * `__plugin_type__`：插件帮助分类（被动类插件不需要）
  * `__plugin_version__`：插件版本
  * `__plugin_author__`：插件作者
  * `__plugin_cd_limit__`：插件cd限制
  * `__plugin_block_limit__`：插件阻塞限制
  * `__plugin_count_limit__`: 插件每日调用次数限制
  * `__plugin_resources__`: 资源管理
  * `__plugin_configs__`: 插件配置

_\_zx\_plugin\_name\_\_
---

* __类型__：`str`
* __说明__：  
插件名称，为插件普通帮助的展示内容，基本所有模块都必须有 `__zx_plugin_name__`  
通过在__zx_plugin_name__中添加 [Admin] [Superuser] [Hidden] 控制初始化帮助时插件的分类  
基本为以下四类：  
  * ``：默认，即没有以下三种分类，作为普通插件  
  * `[Admin]`： 纯管理员插件  
  * `[Superuser]`： 纯超级用户插件  
  * `[Hidden]`： 隐藏的插件，一般是不需要命令调用的插件  

```python
__zx_plugin_name__ = "色图"
__zx_plugin_name__ = "管理员操作 [Admin]"
__zx_plugin_name__ = "超级用户操作 [Superuser]"
__zx_plugin_name__ = "自动检测群员数量 [Hidden]"
```

_\_plugin\_usage\_\_
---

* __类型__：`str`
* __说明__：  
插件帮助说明
示例：

```python
"""
usage:
    有什么用处？
    指令：
        ...
        示例：...
""".strip()
```

_\_plugin\_super\_usage\_\_
---

* __类型__：`str`
* __说明__：  
当非 `[Superuser]` 插件含有超级用户的功能时，在该属性中编写超级用户的额外帮助  
帮助写法与 `__plugin_usage__` 一致

_\_plugin\_des\_\_
---

* __类型__：`str`
* __说明__：  
插件简介，不建议太长，详细介绍可以写在usage中，主要在`详细帮助`中显示

_\_plugin\_cmd\_\_
---

* __类型__：`List[str]`
* __说明__：  
插件指令，相同功能的插件指令请使用`/`分离，如果是超级用户的功能，请在命令后添加`[_superuser]`  
示例：

```python
# 发送 ‘我的签到’ 和 ‘好感度’ 效果相同
__plugin_cmd__ = ["我的签到/好感度", "好感度排行", "清空好感度 [_superuser]"]
```

_\_plugin\_settings\_\_
---

* __类型__：`Dict[str, Union[str, int]]`
* __说明__：  
插件的通用设置，普通插件与纯管理员插件会有所不同  
示例：

```python
# 普通插件，以下除cmd外为默认值
__plugin_settings__ = {
    "level": 5,             # 群权限等级，请不要设置为1或9，若无特殊情况请设置为5
    "default_status": True,     # 进群时的默认开关状态
    "limit_superuser": False,   # 开关插件的限制是否限制超级用户
    "cmd": ["b封面", 'B封面'],   # 命令别名，主要用于帮助和开关
    "cost_gold": 0,             # 该功能需要花费的金币
}
#"cmd"第一个值会被作为功能调用统计的显示选项，开关方面：开启b封面=开启B封面=开启cover
#"__zx_plugin_name__"不需要额外写入，在bot启动时会自动将"__zx_plugin_name__"导入对应的"cmd"

# 只填写需要的部分，其他默认
__plugin_settings__ = {
    "level": 5,             # 群权限等级，请不要设置为1或9，若无特殊情况请设置为5
    "cmd": ["b封面", 'B封面'],   # 命令别名，主要用于帮助和开关
}

# 再简化一点
__plugin_settings__ = {
    "cmd": ["b封面", 'B封面'],   # 命令别名，主要用于帮助和开关
}

# 管理员插件
__plugin_settings__ = {
    "admin_level": 1,       # 管理员等级，建议设置在5及以下，敏感操作设置在5以上
}
```

_\_plugin\_task\_\_
---

* __类型__：`Dict[str, Union[str, str]]`
* __说明__：  
为你提供一个或多个开关，主要用于被动类插件的开关  
示例：

```python
# 定义开关
__plugin_task__ = {
    "名称": "开关中文名",
    "abcd": "统计开关",
    "...": "..."
}

# 使用被动技能控制页面的方法（推荐！
# 使用最最基本的控制：在插件中设置（不推荐

# 导入管理器
from utils.manager import group_manager

# 下方法为最最基本的插件控制
async def _(...):
    if await group_manager.check_group_task_status(event.group_id, "名称"):
        ...
    if await group_manager.check_group_task_status(event.group_id, "abcd"):
        ...
```

_\_plugin\_type\_\_
---

* __类型__：`Tuple[Union[str, int]]`
* __说明__：  
为普通插件分类，当没有`__plugin_type__`时，将统一放置普通功能分类中  
相同分类的插件在帮助图片中将会统合在一起  
示例：

```python
# 定义格式：
# 排列：无或0时：横向排列，1：列项排序(当你的__plugin_cmd__指令很多，建议使用 1)
__plugin_type__ = (分类名称, 详细帮助中的排列)
# 创建一个`工具`的分类
__plugin_type__ = ('工具',)
# 创建一个`原神相关`的分类，并在详细功能中命令以列向排列显示
__plugin_type__ = ('原神相关', 1)
```

_\_plugin\_version\_\_
---

* __类型__：`Union[float, int]`
* __说明__：  
插件版本，将作为插件自动更新的依照

_\_plugin\_author\_\_
---

* __类型__：`str`
* __说明__：  
插件作者

_\_plugin\_cd\_limit\_\_
---

* __类型__：`Dict[str, Optional[Union[int, str]]]`
* __说明__：  
插件cd限制

```python
# 以下为默认值
__plugin_cd_limit__ = {
    "cd": 5,                # 限制 cd 时长
    "check_type": "all",    # 'private'/'group'/'all'，限制私聊/群聊/全部
    "limit_type": "user",   # 监听对象，以user_id或group_id作为键来限制，'user'：用户id，'group'：群id
    "rst": None,            # 回复的话，为None时不回复，可以添加[at]，[uname]，[nickname]来对应艾特，用户群名称，昵称系统昵称
    "status": true          # 此限制的开关状态
}

# 可以只添加需要的内容，其他选用默认值
__plugin_cd_limit__ = {
    "cd": 10,
    "rst": "冷静点，别冲了！"
}
# 甚至全部使用默认值
__plugin_cd_limit__ = {}
```

_\_plugin\_block\_limit\_\_
---

* __类型__：`Dict[str, Optional[str]]`
* __说明__：  
插件阻塞限制

```python
# 以下为默认值
__plugin_block_limit__ = {
    "check_type": "all",    # 'private'/'group'/'all'，限制私聊/群聊/全部
    "limit_type": "user",   # 监听对象，以user_id或group_id作为键来限制，'user'：用户id，'group'：群id
    "rst": None,            # 回复的话，为None时不回复，可以添加[at]，[uname]，[nickname]来对应艾特，用户群名称，昵称系统昵称
    "status": true          # 此限制的开关状态
}
# 可以只添加需要的内容，其他选用默认值
__plugin_block_limit__ = {
    "rst": "你正在冲！"
}
# 甚至全部使用默认值
__plugin_block_limit__ = {}
```

_\_plugin\_count\_limit\_\_
---

* __类型__：`Dict[str, Optional[Union[int, str]]]`
* __说明__：  
插件每日调用次数限制

```python
# 以下为默认值
__plugin_count_limit__ = {
    "max_count": 5,    # 每日次数限制数量
    "limit_type": "user",   # 监听对象，以user_id或group_id作为键来限制，'user'：用户id，'group'：群id
    "rst": None,            # 回复的话，为None时不回复，可以添加[at]，[uname]，[nickname]来对应艾特，用户群名称，昵称系统昵称
    "status": true          # 此限制的开关状态
}
# 可以只添加需要的内容，其他选用默认值
__plugin_count_limit__ = {
    "max_count": 10,
    "rst": "你今天没得冲了！"
}
# 甚至全部使用默认值
__plugin_count_limit__ = {}
```

_\_plugin\_resource\_\_
---

* __类型__：`Dict[Union[str, Path], Union[str, Path]]`
* __说明__：  
将插件目录下资源移动要指定文件夹并记录保存，在插件删除后自动删除对应资源文件

```python
# 提供示例
__plugin_resources__ = {
    "cases": IMAGE_PATH
    }
```

_\_plugin\_configs\_\_
---

* __类型__：`Dict[str, Union[int, str, float, Dict[str, Union[int, str, float]]]]`
* __说明__：  
插件配置项，用于生成统一的config.yaml文件供用户统一修改  
其中 key 大小写不敏感，生成与返回会统一使用大写  
__注__
  * 公用部分例如`hibiapi`等请直接添加和使用`hibiapi`配置组，包括`pixiv`等
  * 公用部分可以新增和删除配置项

```python
# 配置项(默认值)
__plugin_configs__ = {
    "key1": {
        "value": value,         # 配置值
        "help": None,            # 配置项说明，为空时则不添加配置项说明注释
        "name": None,           # 插件名称说明，如果含有__zx_plugin_name__一般不需要设置
        "default_value": None   # 当value值为空时返回的默认值   
    },
    "key2": {
        ...
    },
    "key3": value,              # 只设置value值，其他值为 None
    ...
}
# 增加一个配置项
############ 方式一 ############
# 不添加 help, name, default_value 等设置，仅仅设置 value 
__plugin_configs__ = {
    "key1": value,
    "key2": 9,
    "key3": "Hello 真寻",
    ...
}
# 添加 help, name, default_value 等
__plugin_configs__ = {
    "key1": {
        "value": 1,
        "help": "这是一个示例",
        "default_value": 10
    },
    ...
}
# 是一个需要设置权限等级的插件，需要在key末尾添加 [LEVEL]
# 且 value 或 default_value 必须有值
__plugin_configs__ = {
    "key1 [LEVEL]": {
        "value": 1,
        "help: "这是一个示例",
        "default_value": 10
    },
    ...
}
########################

############ 方式二 ############
# 常用于一个包下有多个插件，需要使用 nonebot.load_plugins加载时统一配置组和权限
# 从 configs.config 中 导入 Config
from configs.config import Config
# 添加配置方法
Config.add_plugin_config(
    module: str,                            # 模块名称（相当于自定义创建一个配置组），一般为插件模块名称
    key: str,                               # 配置key
    value: Optional[Any],                   # 值
    *,
    name: Optional[str] = None,             # 插件名称，相同 module 的 name 将会覆盖
    help_: Optional[str] = None,            # 配置项说明
    default_value: Optional[str] = None,    # 默认值
    _override: bool = False                 # 是否覆盖，一般开发不使用，主要用于init_config时的读取问题
)
# 添加一个配置项, name, help_, default
Config.add_plugin_config(
    "module",
    "key1",
    1,
    name="这是一个示例",
    help_="没错，还是示例",
    default_value=10,
)
# 添加一个管理员插件等级配置项
# 使用 : 分割开，前是配置组名称，后是管理插件模块
# 且 key 末尾需要添加 [LEVEL]，且 value 或 default_value 必须有值
Config.add_plugin_config(
    "module:admin_module",
    "key1 [LEVEL]",
    1,
    name="这是一个示例",
    help_="默认是1级",
    default_value=10,
)

########################

# 获取配置
# 从 configs.config 中 导入 Config
from configs.config import Config

data = Config.get_config("module", "key")

############ 完成示例 ############

# 添加一个配置组，名称为 pix， 并为其添加一个配置项，名称为image_num，
Config.add_plugin_config(
    "pix",
    "image_num",
    5,
    name="PIX图库操作",
    help_="每次访问图片返回的数量",
    default_value=5,
)

# 获取数据，key 的大小写不敏感
image_num = Config.get_config("pix", "IMAGE_NUM")

print(f"图片数量: {image_num}")

### out ###
图片数量: 5

```
