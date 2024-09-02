便捷工具/方法
===

::: tip

开发中一些便利的工具类或方法

:::

定时清理临时文件
---

该方法可以将目标文件夹标记为临时文件文件夹，可以使用命令`清理临时文件`命令来清理  
同时会在每日凌晨`1点`进行自动清理  
并且不需要担心刚刚生成的文件还未使用就强行删除，只有大于`5`分钟的文件才会被清理掉

```python
# 使用 def add_temp_dir(self, path: Union[str, Path])
# 示例

from utils.manager import resources_manager
from pathlib import Path

TEMP_PATH = "D:\\zhenxun_bot\\resources\\temp"
IMAGE_PATH = Path() / "resources" / "image" / "temp"

# 添加临时文件夹
resources_manager.add_temp_dir(TEMP_PATH)

resources_manager.add_temp_dir(IMAGE_PATH)
```

自动撤回
---

真寻中已经包含了自动撤回的公共方法，只需要将`matcher.send`返回的message_id调用方法即可

```python
# 导入消息撤回管理
from utils.manager import withdraw_message_manager


# 获取消息id字典
msg_id = matcher.send("xxxx")

# 将消息id添加入撤回队列
# 将在10秒后撤回该消息
withdraw_message_manager.append((msg_id, 10))

# 快捷处理从配置文件中的消息撤回设置
withdraw_message_manager.withdraw_message(event, msg_id["message_id"], Config.get_config("coser", "WITHDRAW_COS_MESSAGE"))

```

全局字典
---

用于一些通用调用，不同插件可以通过此字典传递数据

```python
# 已占用的key

GDict['run_sql']: List[str]  # 启动时需要执行的sql语句

```
