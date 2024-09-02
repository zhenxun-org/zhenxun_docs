
获取系统所有状态
---

* __说明__  

>获取系统所有状态

* __请求方式__

>GET

* __请求URL__

>/webui/system

* __请求参数__

> None

* __返回示例__

```python
{
  "code": 200,
  "data": {
    "status": {
      "cpu": 12,
      "memory": 70,
      "disk": 6,
      "check_time": "2022-06-05T17:20:16"
    },
    "network": {
      "baidu": 200,
      "google": 200
    },
    "disk": {
      "font_dir_size": 133.74005889892578,
      "image_dir_size": 101.92905139923096,
      "text_dir_size": 5.104050636291504,
      "record_dir_size": 4.068230628967285,
      "temp_dir_size": 0,
      "data_dir_size": 2.0905447006225586,
      "log_dir_size": 50.793667793273926,
      "check_time": "2022-06-05T17:20:16"
    },
    "check_time": "2022-06-05T17:20:16"
  }
}
```

获取系统状态
---

* __说明__  

>获取系统状态

* __请求方式__

>GET

* __请求URL__

>/webui/system/status

* __请求参数__

> None

* __返回示例__

```python
{
  "code": 200,
  "data": {
    "cpu": 24,                              # CPU
    "memory": 69,                           # 内存
    "disk": 6,                              # 硬盘
    "check_time": "2022-06-05T17:10:36"
  }
}
```

获取资源状态
---

* __说明__  

>获取资源状态

* __请求方式__

>GET

* __请求URL__

>/webui/system/status

* __请求参数__

|请求参数 | 必选 | 参数类型 | 说明 |
|:-----------------:|:-------------:|:---------------:|:---------------:|
|type_   | false |    str   |  image: 图片资源<br>font: 字体资源<br>text: 文本资源<br>record: 音频资源<br>data: 数据文件<br>temp: 临时文件<br>log: 日志文件    |

* __返回示例__

```python
{
  "code": 200,
  "data": {
    "font_dir_size": 133.74005889892578,        # 字体资源
    "image_dir_size": 101.93039226531982,       # 图片资源
    "text_dir_size": 5.104050636291504,         # 文本资源
    "record_dir_size": 4.068230628967285,       # 音频资源
    "temp_dir_size": 0,                         # 临时文件
    "data_dir_size": 2.0905447006225586,        # 数据文件
    "log_dir_size": 50.7503080368042,           # 日志文件
    "check_time": "2022-06-05T17:12:17"
  }
}

# type_=image
{
  "code": 200,
  "data": {
    "background": 7.677274703979492,
    "bilibili_sub": 0,
    "border": 0,
    "card": 31.94981861114502,
    "cases": 20.799235343933105,
    "dayouxi": 0.24110698699951172,
    "draw_card": 0,
    "genshin": 30.648005485534668,
    "image_management": 0,
    "luoxiang": 0.17495346069335938,
    "noresult": 0.10628223419189453,
    "other": 0.3809242248535156,
    "pa": 3.7564477920532227,
    "prts": 2.9031734466552734,
    "qxz": 0.0879507064819336,
    "sign": 0.11782073974609375,
    "wordcloud": 0.7114677429199219,
    "zai": 0.46816253662109375,
    "zhenxun": 0.91046142578125,
    "其他文件": 0.9973068237304688,
    "check_time": "2022-06-05T17:15:42"
  }
}
```
