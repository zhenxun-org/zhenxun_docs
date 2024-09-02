
获取请求数据
---

* __说明__  

>获取请求列表

* __请求方式__

>GET

* __请求URL__

>/webui/group

* __请求参数__

|请求参数 | 必选 | 参数类型 | 说明 |
|:-----------------:|:-------------:|:---------------:|:---------------:|
|type_   | true |    str   |  group: 群聊请求<br>private: 好友请求    |

* __返回示例__

```python

{
  "code": 200,
  "data": [
    {
      "oid": "37",                      # 内部id编号
      "id": 123456789,                  # 邀请人qq
      "flag": "34534534673443",         # 请求flag
      "nickname": "xx",                 # 邀请人名称  
      "level": null,                    # 邀请人等级
      "sex": "female",                  # 邀请人性别
      "age": 0,                         # 邀请人年龄
      "from_": null,                    # 忘了
      "comment": null,                  # 留言
      "invite_group": 1095249770,       # 邀请券群聊
      "group_name": null                # 群聊名称
    },
    ...]
}
```

清空请求
---

* __说明__  

>清空请求

* __请求方式__

>DELETE

* __请求URL__

>/webui/request

* __请求参数__

|请求参数 | 必选 | 参数类型 | 说明 |
|:-----------------:|:-------------:|:---------------:|:---------------:|
|type_   | true |    str   |  group: 群聊请求<br>private: 好友请求    |

* __返回示例__

```python
{
  code: 200,
  data: "修改成功！"
}
```

操作请求
---

* __说明__  

>同意/拒绝/忽略请求

* __请求方式__

>POST

* __请求URL__

>/webui/request

* __请求参数__

|请求参数 | 必选 | 参数类型 | 说明 |
|:-----------------:|:-------------:|:---------------:|:---------------:|
|id   | true |    int   |  oid    |
|handle   | true |    str   |  approve: 同意<br>refuse: 拒绝<br>delete: 删除    |
|type   | true |    str   |  group: 群聊请求<br>private: 好友请求    |

* __返回示例__

```python
{
  code: 200,
  data: "操作成功！"
}

{
  code: 200,
  data: "该请求已失效"
}

{
  code: 200,
  data: "未找到此Id"
}
```
