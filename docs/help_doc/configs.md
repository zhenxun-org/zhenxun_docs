---
title: 配置文件
---

::: tip
首次运行会在 **data/configs/** 和 **data/** 下生成配置文件  
该页面解释配置文件注解
:::

::: warning
修改yaml需要注意：  
  冒号后面要带 **空格**！冒号后面要带 **空格**！冒号后面要带 __空格__！
:::

configs目录
===

config.yaml
---

插件配置项文件，摒弃了原所有插件配置都在**config.py**，对新增插件无法很好的进行统一配置管理  
现在将通过插件标准将插件配置项统一管理和修改  
***所有插件的配置项全部在这里！***  
***该文件自动生成，仅仅可修改值，请不要手动添加配置项***  
示例：

```yaml
admin_bot_manage:
  # 群管理员操作
  # SET_GROUP_WELCOME_MESSAGE_LEVEL: 设置群欢迎消息权限
  # CHANGE_GROUP_SWITCH_LEVEL: 开关群功能权限
  # ADMIN_DEFAULT_AUTH: 默认群管理员权限
  SET_GROUP_WELCOME_MESSAGE_LEVEL: 2
  CHANGE_GROUP_SWITCH_LEVEL: 2
  ADMIN_DEFAULT_AUTH: 5
...
```


plugins2config.yaml
---

该配置文件主要是用于生成**configs/config.yaml**文件  
***该文件自动生成，不要修改和新增***  




