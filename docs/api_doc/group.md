
获取群组数据
---

* __说明__  

>获取群组列表

* __请求方式__

>GET

* __请求URL__

>/webui/group

* __请求参数__

> None

* __返回示例__

```python
{
  "code": 200,
  "data": [
    {
      "group": {                                # 群组信息
        "group_id": 123456567,                  # 群号
        "group_name": "群群",                   # 群名称
        "member_count": 4,                      # 当前群员数量
        "max_member_count": 200                 # 最大群员数量
      },
      "level": 5,                               # 群权限
      "status": false,                          # 真寻在群中的状态
      "close_plugins": [],                      # 关闭的插件
      "task": [                                 # 被动技能
        {
          "name": "broadcast",                  # 被动技能模块
          "nameZh": "广播",                     # 被动进中文名称
          "status": false                       # 被动状态
        },
        {
          "name": "group_welcome",
          "nameZh": "进群欢迎",
          "status": true
        },
        {
          "name": "refund_group_remind",
          "nameZh": "退群提醒",
          "status": true
        },
        {
          "name": "zwa",
          "nameZh": "早晚安",
          "status": true
        },
        {
          "name": "open_case_reset_remind",
          "nameZh": "每日开箱重置提醒",
          "status": false
        },
        {
          "name": "epic_free_game",
          "nameZh": "epic免费游戏",
          "status": true
        },
        {
          "name": "fudu",
          "nameZh": "复读",
          "status": true
        },
        {
          "name": "genshin_alc",
          "nameZh": "原神黄历提醒",
          "status": true
        }
      ]
    }
  ...]
}
```

修改群组数据
---

* __说明__  

>修改某个插件的对应数据

* __请求方式__

>POST

* __请求URL__

>/webui/group

* __请求参数__

|请求参数 | 必选 | 参数类型 | 说明 |
|:-----------------:|:-------------:|:---------------:|:---------------:|
|group   | true |    GroupResult   |  群组实例    |

* __返回示例__

```python
{
  code: 200,
  data: "修改成功！"
}
```
