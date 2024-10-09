---
title: 自动备份(auto_backup)
subSidebar: false
---


### 说明

检测群组发言判断是否关全部群被动

- 插件类型: `None`
- 响应规则: `None`
- 插件等级: `None`

### 配置项

- `chat_check`
  - `STATUS`
    - 说明: 是否开启群组两日内未发送任何消息，关闭该群全部被动
    - 类型: `bool`
    - 默认值: `True`
  
### 指令

无

### 定时任务

- `chat_check`
  - 时间: 4:40
  - 任务: 群组发言时间检测
