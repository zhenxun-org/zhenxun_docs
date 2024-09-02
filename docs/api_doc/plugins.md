
获取插件列表
---

* __说明__  

>获取插件列表

* __请求方式__

>GET

* __请求URL__

>/webui/plugins

* __请求参数__

|请求参数 | 必选 | 参数类型 | 说明 |
|:-----------------:|:-------------:|:---------------:|:---------------:|
|type_   | true |    str   |  normal: 非限制插件<br>admin: 管理员插件<br>superuser: 超级用户插件<br>hidden: 其他插件    |

* __返回示例__

```python
{
    code: 200                                                   # code码
    data: [
        {
      "model": "resin_remind",                                  # 模块名
      "plugin_settings": {                                      # plugin2setting.yaml
        "level": 5,                                             # 群权限
        "default_status": true,                                 # 进群默认开关状态
        "limit_superuser": false,                               # 是否限制超级用户
        "cmd": "原神树脂提醒,关原神树脂提醒,开原神树脂提醒",        # cmd
        "cost_gold": 0,                                         # 花费金币
        "plugin_type": [                                        # 菜单分类
          "原神相关"
        ]
      },
      "plugin_manager": {                                       # plugin_manager.json
        "plugin_name": "原神树脂提醒",                           # 插件名称
        "status": true,                                         # 开关状态
        "error": false,                                         # 加载状态
        "version": 0.1,                                         # 插件版本
        "author": "HibiKier",                                   # 插件作者
        "block_type": null                                      # 禁用类型
      },
      "plugin_config": [                                        # plugin2configs.yaml
        {
          "id": 0,                                              # id
          "key": "AUTO_CLOSE_QUERY_FAIL_RESIN_REMIND",          # 配置key
          "value": true,                                        # 配置值
          "help_": "当请求连续三次失败时，关闭用户的树脂提醒",     # 配置帮助提示
          "default_value": true                                 # 配置默认值
        },
        {
          "id": 1,
          "key": "CUSTOM_RESIN_OVERFLOW_REMIND",
          "value": 20,
          "help_": "自定义树脂溢出指定数量时的提醒，空值是为关闭",
          "default_value": null
        }
      ],
      "cd_limit": {                                             # plugin2cd.yaml
        "cd": 5,                                                # cd时长
        "status": true,                                         # 该限制状态
        "check_type": "all",                                    # 检查类型
        "limit_type": "user",                                   # 限制类型
        "rst": null                                             # 回复内容
      },
      "block_limit": {                                          # plugin2block.yaml
        "status": true,                                         # 该限制状态
        "check_type": "all",                                    # 检查类型
        "limit_type": "user",                                   # 限制类型
        "rst": "..."                                            # 回复内容
      },
      "count_limit": {                                          # plugin2count.yaml
        "status": true,                                         # 该限制状态
        "max_count": 5,                                         # 一天内最大触发次数
        "limit_type": "user",                                   # 限制类型
        "rst": "..."                                            # 回复内容
      }
    },
    ...]
}
```

修改插件数据
---

* __说明__  

>修改某个插件的对应数据

* __请求方式__

>POST

* __请求URL__

>/webui/plugins

* __请求参数__

|请求参数 | 必选 | 参数类型 | 说明 |
|:-----------------:|:-------------:|:---------------:|:---------------:|
|plugin   | true |    Plugin   |  插件实例，即获取插件中的某个实例对象|

* __返回示例__

```python
{
  code: 200,
  data: "修改成功！"
}
```
