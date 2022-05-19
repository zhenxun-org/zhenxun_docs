---
title: 配置文件
---

::: tip
首次运行会在 **data/configs/** 和 **configs/** 下生成配置文件  
该页面解释配置文件注解
:::

::: warning
修改yaml需要注意：  
  1.布尔值需要首字母大写，如：__True__, __False__  
  2.冒号后面要带 __空格__！冒号后面要带 __空格__！冒号后面要带 __空格__！
:::

configs目录
===

config.yaml
---

插件配置项文件，摒弃了原所有插件配置都在**config.py**，对新增插件无法很好的进行统一配置管理  
现在将通过插件标准将插件配置项统一管理和修改  
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

data/configs目录
===

plugins2settings.yaml
---

该配置文件主要是插件的一些基本配置  
主要包含了  

* 功能对应的群权限
* cmd/命令别名
* 功能分类
* 进群时功能默认开关
* 开关是否限制超级用户  

***该文件自动生成，仅仅可修改值，请不要手动添加插件配置***  
示例：

```yaml
  wbtop:
  # wbtop：微博热搜
    level: 5                    # 群权限
    default_status: true        # 进群时功能默认开关
    limit_superuser: false      # 开关是否限制超级用户 
    cmd:                        # cmd/命令别名
    - 微博热搜
    plugin_type:                # 功能分类，默认是normal
    - normal
  ...
```

plugins2config.yaml
---

该配置文件主要是用于生成**configs/config.yaml**文件  
***该文件自动生成，不要修改和新增***  

plugins2cd.yaml
---

该配置文件主要是保存插件cd限制  
***该文件自动生成，可以修改和新增***  
示例：

```yaml
  send_setu:                        # 模块名称
    cd: 5                           # cd 时长（秒）
    status: true                    # 此限制的开关状态
    check_type: all                 # 'private'/'group'/'all'，限制私聊/群聊/全部
    limit_type: user                # 监听对象
    rst: 您冲的太快了，请稍后再冲.      # 回复内容
  ...
```

plugins2block.yaml
---

该配置文件主要保存插件block限制（阻塞限制）  
***该文件自动生成，可以修改和新增***  
示例：

```yaml
  pix:                              # 模块名称
    status: true                    # 此限制的开关状态
    check_type: all                 # 'private'/'group'/'all'，限制私聊/群聊/全部
    limit_type: user                # 监听对象
    rst: 您有PIX图片正在处理，请稍等... # 回复内容
```

plugins2count.yaml
---

该配置文件主要保存插件每日调用次数限制  
每日调用限制直到 00:00 刷新  
用户每日调用次数保存在内存中，重启会导致用户每日调用次数限制次数清零  
***该文件自动生成，可以修改和新增***  
示例：

```
  comments_163:             # 模块名称
    max_count: 3            # 每日调用上限
    status: true            # 此限制的开关状态
    limit_type: user        # 监听对象
    rst: 已经过了这个点了      # 回复内容
```
