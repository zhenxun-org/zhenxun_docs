---
title: 自动备份(auto_backup)
subSidebar: false
---


### 说明

自动备份文件夹数据

- 插件类型: `None`
- 响应规则: `None`
- 插件等级: `None`

### 配置项

- `_backup`
  - `BACKUP_FLAG`
    - 说明: 是否开启文件备份
    - 类型: `bool`
    - 默认值: `True`
  - `BACKUP_DIR_OR_FILE`
    - 说明: 备份的文件夹或文件
    - 类型: `list[str]`
    - 默认值: `["data"]`
  
### 指令

无

### 定时任务

- `auto_backup`
  - 时间: 3:25
  - 任务: 备份文件夹
