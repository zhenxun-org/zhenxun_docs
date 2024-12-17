---
title: 配置管理
subSidebar: false
---


## 介绍

除了Nonebot使用的配置文件`.env`外，真寻内部还维护了一个配置文件`config.yaml`，用于存储一些插件配置，可以理解为一个全局字典。

## 添加配置

### 方式一（推荐）

通过`PluginExtraData`的方式添加

#### `PluginExtraData`

```python
class RegisterConfig(BaseModel):
    """
    注册配置项
    """

    key: str
    """必填，配置项键，字典的key值"""
    value: Any
    """必填，配置项值，字典的值，可以在配置文件中被修改"""
    module: str | None = None
    """一般为插件模块名称（文件夹名称），除非需要自定义键，否则不需要填写"""
    help: str | None
    """配置注解"""
    default_value: Any | None = None
    """默认值，当value是None时返回"""
    type: Any = None
    """参数类型，除str外必须填写，用于类型"""
    arg_parser: Callable | None = None
    """参数解析器，用于解析配置文件中的值，返回值必须与type一致，用于一些type无法转换的操作"""

```

#### 示例

```python
# zhenxun/plugins/test.py
#    文件名称（模块名）↑

from nonebot.plugin import PluginMetadata

from zhenxun.configs.utils import PluginExtraData, RegisterConfig


__plugin_meta__ = PluginMetadata(
    name="测试插件",
    description="",
    usage="",
    extra=PluginExtraData(
        author="author",
        version="0.1",
        is_show=False,
        configs=[
            RegisterConfig(
                key="test键1",
                value="桀桀桀1",
                help="哈喽，这是一个测试配置项1",
                default_value="桀桀桀2",
            ),
            RegisterConfig(
                key="test键2",
                value="桀桀桀2",
                help="哈喽，这是一个测试配置项2",
                default_value="桀桀桀2",
            ),
            ...
        ],
    ).dict(),
)

```

根据上面的配置，在`config.yaml`中会自动生成以下配置项

```yaml
test:
  # 测试插件
  # test键: 哈喽，这是一个测试配置项1
  # test键: 哈喽，这是一个测试配置项2
  test键1: 桀桀桀1
  test键2: 桀桀桀2
```

### 方式二

使用全局`Config`类添加

#### 示例

```python
from zhenxun.configs.config import Config

Config.add_plugin_config(
    "test模块",         # 模块名
    "test键",
    666,
    help="哈喽，这是一个测试配置项",
    type=int,
)

```

根据上面的配置，在`config.yaml`中会自动生成以下配置项

```yaml
test模块:
  # 测试插件
  # test键: 哈喽，这是一个测试配置项
  test键: 666
```

## 获取配置

通过全局`Config`来获取配置

```python
from zhenxun.configs.config import Config

# 直接获取配置项
value = Config.get_config("test模块", "test键")

# 先获取配置组后
base_config = Config.get("test模块")    # test模块的模块组，模组该组(module)的所有配置
value = base_config.get("test键")     # 获取配置项
```

## 修改模块配置

```python
from zhenxun.configs.config import Config

Config.set_config("test模块", "test键", 999)

# 当 auto_save 为True时，会保存至 config.yaml
Config.set_config("test模块", "test键", 999, True)
```

## 设置模块中文名称（无关紧要的设置）

当使用`Config.add_plugin_config`方式添加配置时，无法获取到插件名称，因此可以手动设置模块中文名称

```python
from zhenxun.configs.config import Config

Config.set_name("test模块", "测试插件")
```
