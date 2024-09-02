---
title: 更新日志
---

### 2022/9/19

* 更换bilibili_sub获取用户昵称用的API&尝试修了一下get_video() [@pull/1097](https://github.com/HibiKier/zhenxun_bot/pull/1097)
* 修复csgo每日开箱可以多开一次

### 2022/9/18

* 修复 bilireq 版本过低导致 B 站视频解析错误 [@pull/1090](https://github.com/HibiKier/zhenxun_bot/pull/1096)

### 2022/9/16

* fix: bilibili_sub, azur_draw_card [@pull/1090](https://github.com/HibiKier/zhenxun_bot/pull/1090)
* 修复原神资源查询查询完毕后图片存储错误
* b站订阅发送 与 b站订阅 使用相同开关，即：关闭b站订阅

### 2022/9/10

* 自定义群欢迎消息参数不完全时提示报错
* 修改bt插件的url地址 [@pull/1067](https://github.com/HibiKier/zhenxun_bot/pull/1067)

### 2022/9/8

* 添加插件数据初始化判断

### 2022/9/4

* 旧词条提供图片迁移（需要重新获取old_model文件，并将数据库中user_qq为0的数据删除）

### 2022/9/3

* 原神玩家查询增加须弥地区 [@pull/1053](https://github.com/HibiKier/zhenxun_bot/pull/1053)
* av号覆盖全面，且修复av号链接 [@pull/1033](https://github.com/HibiKier/zhenxun_bot/pull/1033)
* 修复词条含有CQ回答的模糊匹配无法被解析
* 禁言检测图片在内存中获取图片hash
* B站订阅在群里中任意群管理员可以统一管理（原来为管理员1无法删除管理员2的订阅）
* 修复原神资源查询地图api数据变更导致更新的地图不完全

### 2022/8/27

* 修复签到积分双倍后，日志记录获得积分变4倍问题 [@pull/1044](https://github.com/HibiKier/zhenxun_bot/pull/1044)

### 2022/8/26

* 修复群管理员无法添加词条
* 修复词条关键词"问"前空格问题

### 2022/8/23

* 修了下模糊匹配 issue#1026 [@pull/1026](https://github.com/HibiKier/zhenxun_bot/pull/1026)

### 2022/8/22

* 修复首次安装时词条旧表出错（因为根本就没有这张表！）
* 取消配置替换定时任务，统一存储
* 对米游社cookie进行判断，整合米游社签到信息 [@pull/1014](https://github.com/HibiKier/zhenxun_bot/pull/1014)
* 修正尘歌壶和质变仪图片获取地址 [@pull/1010](https://github.com/HibiKier/zhenxun_bot/pull/1010)
* 修复词库问答 **很多** 问题[@pull/1012](https://github.com/HibiKier/zhenxun_bot/pull/1012)

### 2022/8/21 \[v0.1.6.3]

* 重构群词条，改为词库Plus，增加 精准|模糊|正则 问题匹配，问题与回答均支持at，image，face，超级用户额外提供 全局|私聊 词库设置，数据迁移目前只提供了问题和回答都是纯文本的词条
* 修复b站转发解析av号无法解析
* B站订阅直播订阅支持短号
* 开箱提供重置开箱命令，重置今日所有开箱数据（重置次数，并不会删除今日已开箱记录）
* 提供全局字典GDict，通过from utils.manager import GDict导入
* 适配omega 13w张图的数据结构表（建议删表重导）
* 除首次启动外将配置替换加入单次定时任务，加快启动速度
* fix: WordBank.check() [@pull/1008](https://github.com/HibiKier/zhenxun_bot/pull/1008)
* 改进插件 `我有一个朋友`，避免触发过于频繁 [@pull/1001](https://github.com/HibiKier/zhenxun_bot/pull/1001)
* 原神便笺新增洞天宝钱和参量质变仪提示 [@pull/1005](https://github.com/HibiKier/zhenxun_bot/pull/1005)
* 新增米游社签到功能，自动领取（白嫖）米游币 [@pull/991](https://github.com/HibiKier/zhenxun_bot/pull/991)

### 2022/8/14

* 修复epic未获取到时间时出错
* 修复订阅主播时动态获取的id是直播间id

### 2022/8/8

* 修复赛马娘重载卡池失败的问题 [@pull/969](https://github.com/HibiKier/zhenxun_bot/pull/969)

### 2022/8/3

* 修复 bili动态链接在投稿视频时URL和分割线连在一起 [@pull/951](https://github.com/HibiKier/zhenxun_bot/pull/961)
* 更新 Epic 免费游戏商城链接拼接规则 [@pull/957](https://github.com/HibiKier/zhenxun_bot/pull/957)

### 2022/8/6

* 修复了原神自动签到返回invalid request的问题，新增查看我的cookie命令 [@pull/971](https://github.com/HibiKier/zhenxun_bot/pull/971)

### 2022/7/31

* 对nonebot.beta4中PluginMeta进行解析
* 修改webui元祖类型无法正确转换类型
* 查看订阅以图片形式发送
* 修复pix无图时不会提醒而是出错

### 2022/7/30

* 替换了cos和bt的url [@pull/951](https://github.com/HibiKier/zhenxun_bot/pull/951)
* 发言记录统计添加日消息统计 [@pull/953](https://github.com/HibiKier/zhenxun_bot/pull/953)

### 2022/7/24 \[v0.1.6.2]

* 订阅up动态提供直链

### 2022/7/23

* 优化开箱次数判断

### 2022/7/16

* cos提供连发命令
* 修复B站视频解析中b23解析错误

### 2022/7/13

* B站订阅提供配置项`LIVE_MSG_AT_ALL`,`UP_MSG_AT_ALL`：控制UP动态投稿和直播是否AT全体
* 修改了Omega图库检测的数据库文件名
* game_utils提供了Game类

### 2022/7/7

* 微博热搜选择单条热搜时也会检测时效性 [@pull/891](https://github.com/HibiKier/zhenxun_bot/pull/891)

### 2022/7/4

* 修复商品未设置限购时无法购买
* 修复B站订阅UP动态 [@pull/886](https://github.com/HibiKier/zhenxun_bot/pull/886)
* 修复色图命令带tag时配置项`MAX_ONCE_NUM2FORWARD`无法生效

### 2022/7/3 \[v0.1.6.1]

* BagUser提供方法`check_props`方法，用于判断用户是否含有该道具并是否使用
* 优化商品显示图片，提供限制，限购，折扣提示
* 修复图库内图片无法被连续删除的问题 [@pull/879](https://github.com/HibiKier/zhenxun_bot/pull/879)
* 色图提供配置项`MAX_ONCE_NUM2FORWARD`：群聊中单次发送图片数量达到指定时使用合并转发
* 优化修复了商品修改命令
* B站订阅UP动态改为详情页截图

### 2022/6/28

* 修复色图插件api修改无法搜索图片 [@pull/866](https://github.com/HibiKier/zhenxun_bot/pull/866)

### 2022/6/26

* 替换了bt URL
* PIX当使用pid查询图片时，会发送该pid下所有图片
* 商店提供了每日购买次数限制

### 2022/6/24

* 对WSL虚拟机 代理 添加写法 [@pull/847](https://github.com/HibiKier/zhenxun_bot/pull/847)

### 2022/6/21

* update parse_bilibili [@pull/840](https://github.com/HibiKier/zhenxun_bot/pull/840)

### 2022/6/19 \[v0.1.6.0]

* 暂时使用hook修复webui中plugins2setting修改时会改变plugins2setting.cmd为字符串
* 修复原神树脂重复提醒的bug [@pull/828](https://github.com/HibiKier/zhenxun_bot/pull/828)
* 词条优化问题展示,修改含机器人昵称和@逻辑 [@pull/835](https://github.com/HibiKier/zhenxun_bot/pull/835)

### 2022/6/18

* 修复昵称系统`BLACK_WORD`为空时造成报错
* 修复特殊头像时背景透明化出错
* 修复text2image纯文本时换行时颜色不统一
* 优化webUI，当有插件出错时不会影响其他插件显示
* 优化Config类型注释 [@pull/830](https://github.com/HibiKier/zhenxun_bot/pull/830)
* 优化browser

### 2022/6/17

* 修复wordbank的一些小问题 @pull/820

### 2022/6/14

* AsyncHttpx提供可关闭 ssl 验证参数 [@pull/812](https://github.com/HibiKier/zhenxun_bot/pull/812)
* fix: 自动更新群组 [@pull/810](https://github.com/HibiKier/zhenxun_bot/pull/810)
* fix: 修复添加词条时对answer中图片的处理 [@pull/806](https://github.com/HibiKier/zhenxun_bot/pull/806)
* 修复pix中指定num无法生效
* 替换了bt URL

### 2022/6/13

* Windows 重启适配 [@pull/804](https://github.com/HibiKier/zhenxun_bot/pull/804)
* 色图等提供修改md5方法 [@pull/800](https://github.com/HibiKier/zhenxun_bot/pull/800)
* webui中token.json文件写入补充 [@pull/798](https://github.com/HibiKier/zhenxun_bot/pull/798)
* 修复识图某些图片可能会出错

### 2022/6/11

* pix当只有一个tag时且为数字时可以通过添加'#'防止判定为数量

### 2022/6/9

* 修复b站订阅同群二人以上相同订阅时发送多次信息
* 修复超级用户帮助中缺少了 ‘插件商店’ 相关帮助
* 昵称系统提供了详细帮助

### 2022/6/5 \[v0.1.5.9]

* webui修复plugin2setting中cmd从list转变为str
* 当命令`我的金币`被风控时将以图片形式发送
* fix gold_redbag [@pull/763](https://github.com/HibiKier/zhenxun_bot/pull/763)
* 金币红包功能增加更多封面 [@pull/764](https://github.com/HibiKier/zhenxun_bot/pull/764)

### 2022/6/3

* 插件仓库在已安装插件边上会提示\[已安装]
* 修复ShopRegister kwargs某些字段无效
* 调整了一下查看所有请求中的年龄绘制 [@pull/745](https://github.com/HibiKier/zhenxun_bot/pull/745)
* 修复原神树脂提醒bug [@pull/756](https://github.com/HibiKier/zhenxun_bot/pull/756)

### 2022/5/31

* 修复开启/关闭全部功能时帮助图片未重绘 [@pull/721](https://github.com/HibiKier/zhenxun_bot/pull/721)
* bot_friend_group将group_handle.修改为friend_handle. [@pull/711](https://github.com/HibiKier/zhenxun_bot/pull/711)
* 修复发红包图片背景未透明化;修复原神树脂提醒参数错误 [@pull/712](https://github.com/HibiKier/zhenxun_bot/pull/712)
* 修复抽卡插件：方舟更新UP池信息时，若公告的第一个池子过期会导致无法更新UP池信息 [@pull/707](https://github.com/HibiKier/zhenxun_bot/pull/707)
* 商店插件判断是否有requirements.txt文件 [@pull/705](https://github.com/HibiKier/zhenxun_bot/pull/705)
* 删除原神玩家查询api返回变更的多余键值
* 优化了text2image方法

### 2022/5/29 \[v0.1.5.8]

* 提供了真寻适配仓库的插件 安装/卸载 操作
* 暂时关闭了插件资源清空
* 通过指令安装插件时会在插件目录下生成plugin_info.json记录当前插件信息

### 2022/5/28

* 修复私聊无法添加昵称
* 修复原神玩家查询层岩巨渊地下矿区没开时报错
* 修复 ```休息吧``` 无法阻断戳一戳
* 当图库无图片时，戳一戳将略过发送图片
* 新增搜图提供配置项```ALLOW_GROUP_R18```：允许在群聊中使用r18参数
* 新增自动更新插件```UPDATE_REMIND```：新版本提醒，原配置项```AUTO_UPDATE_ZHENXUN```改为自动更新升级
* black_word新增当群权限为-1时不再检测该群
* 修复非超级用户绑定原神cookie会被black_word阻拦
* 修复微博热搜报错,发红包小bug [@pull/688](https://github.com/HibiKier/zhenxun_bot/pull/688)
* 更多的中文提示

### 2022/5/26

* 修复\[滴滴滴]会被转义成&#91;滴滴滴&#93;导致无法触发的问题
* 将一些错误以中文提示输出
* 更新BT搜索源地址 [@pull/668](https://github.com/HibiKier/zhenxun_bot/pull/668)
* 更新抽卡插件 [@pull/667](https://github.com/HibiKier/zhenxun_bot/pull/667)

### 2022/5/25

* 修复webui中CountLimit字段limit_type类型错误
* 修改nickname插件：一处文案错误，添加敏感词 [@pull/624](https://github.com/HibiKier/zhenxun_bot/pull/624)
* gamedraw的ba卡池搬运了过来并且进行了真寻的适配 [@pull/617](https://github.com/HibiKier/zhenxun_bot/pull/617)
* feat: stream downloading and progress [@pull/607](https://github.com/HibiKier/zhenxun_bot/pull/607)
* 修改翻译插件，添加缺失的冒号 [@pull/602](https://github.com/HibiKier/zhenxun_bot/pull/602)
* 修复碧蓝航线/明日方舟up池解析出错的问题 [@pull/610](https://github.com/HibiKier/zhenxun_bot/pull/602)

### 2022/5/24

* fix: 修正了签到时日期时间的显示不补齐零的bug （符合日期时间表示法 ISO 8601）[@pull/600](https://github.com/HibiKier/zhenxun_bot/pull/600)
* 更新"微博热搜"接口 [@pull/579](https://github.com/HibiKier/zhenxun_bot/pull/579)
* refactor&fix(manager): modify argument [@pull/576](https://github.com/HibiKier/zhenxun_bot/pull/576)
* 修复复读不能复读图片的问题 [@pull/573](https://github.com/HibiKier/zhenxun_bot/pull/573)
* 修复抽卡插件：方舟抽卡的抽取和显示问题 [@pull/581](https://github.com/HibiKier/zhenxun_bot/pull/581)

### 2022/5/23 \[v0.1.5.6]

* 修复"清除已删除插件数据" [@pull/545](https://github.com/HibiKier/zhenxun_bot/pull/545)
* 修复有置顶的up主B站动态获取失败 [@pull/552](https://github.com/HibiKier/zhenxun_bot/pull/552)
* 添加pixiv搜图多关键词支持;修复p站搜图数量参数问题 [@pull/441](https://github.com/HibiKier/zhenxun_bot/pull/441)
* 修复开箱更新价格错误传参
* 修复pix无法正确查询uid
* 新增色图插件添加配置项```ALLOW_GROUP_R18```：允许群聊中使用色图r
* 新增PIX插件添加配置项```ALLOW_GROUP_SETU```：允许非超级用户使用-s参数
* 新增PIX插件添加配置项```ALLOW_GROUP_R18```：允许非超级用户使用-r参数

### 2022/5/22 \[v0.1.5.4]

* 使用action自动更新poetry.lock [@pull/515](https://github.com/HibiKier/zhenxun_bot/pull/515)
* fix(bilibili_sub): card is None and timeout [@pull/516](https://github.com/HibiKier/zhenxun_bot/pull/516)
* 修复了epic有时获取新免费游戏消息时获取不到图片
* 修复好感度满时签到出错（虽然是不可能满的
* 修复原神资源图标下载路径错误
* 修复自动更新群组可能失败

### 2022/5/21

* 修复搜番无结果时报错无正确反馈
* 解锁了windows上无法使用playwright的限制
* 修复p搜对应pid有多张图时出错，改为连续发送图片
* 修复p搜对数字的错误判断
* 修复添加商品折扣无法正确添加
* 修复了bilibili订阅直播间订阅up名称不一致的问题
* 修复原神玩家查询没开地图时报错
* 最低priority修改为 999
* 修复刷屏检测失效
* 修复刷屏检测设置命令无法生效
* 优化刷屏显示设置禁言时长显示，并改为分钟
* 修复了多连开箱无法指定武器箱
* 修复识番链接无法正确获取
* 新增真寻入群时即刻刷新权限
* 提高了微博热搜截图的等待时间

### 2022/5/19

* fix: mihoyo bbs api changed [@pull/357](https://github.com/HibiKier/zhenxun_bot/pull/357)
* Add word_clouds [@pull/265](https://github.com/HibiKier/zhenxun_bot/pull/265)
* Fix wrong live streamer name [@pull/284](https://github.com/HibiKier/zhenxun_bot/pull/284)

### 2022/5/16

* 词条支持图片和@问题 [@pull/160](https://github.com/HibiKier/zhenxun_bot/pull/160)

### 2022/5/15

* 修复了商店商品无法正确添加
* 修复了多张色图无法正确发送

### 2022/5/14

* 修复B站动态生成失败的问题 [@pull/159](https://github.com/HibiKier/zhenxun_bot/pull/159)

### 2022/5/11

* fix: 更改p搜api，解决p搜无法使用的问题 [@pull/155](https://github.com/HibiKier/zhenxun_bot/pull/155)

### 2022/5/9 \[v0.1.5.3]

* 替换了疫情API
* 修复了私聊.ban/.unban出错

### 2022/5/5

* 修改bilibili_sub插件在windows平台下报错 [@pull/153](https://github.com/HibiKier/zhenxun_bot/pull/153)

### 2022/5/3 \[v0.1.5.2]

* 商品使用函数可以添加特定参数，例如：user_id, group_id, ShopParam等以及自己提供的参数
* 添加商品注册装饰器shop_register
* 修复商品函数kwargs无法获取参数值

## 2022/5/1

* 删除了`group_last_chat`插件（该功能可由`chat_history`替代
* 新增敏感词检测（全新反击系统，是时候重拳出击了

## 2022/4/26

* 修复了群白名单无法正确添加
* 优化了管理员帮助图片，背景图层将位于最下层
* 修复了树脂140时不断提醒（未测试
* 新增了消息记录的消息排行
* WebUI新增CPU，内存，磁盘监控
* WebUI新增资源文件夹统计可视化

## 2022/4/12

* 修复b了命令私聊出错

## 2022/4/10 \[v0.1.4.7]

* 新增消息记录模块
* 丰富处理请求操作提示
* web ui新增配置项修改

## 2022/4/9

* fix: 更新问题，戳一戳图片路径问题 [@pull/144](https://github.com/HibiKier/zhenxun_bot/pull/144)

## 2022/4/8

* 修复原神玩家查询

## 2022/4/6

* update search_type [@pull/143](https://github.com/HibiKier/zhenxun_bot/pull/143)

## 2022/4/5 \[v0.1.4.6]

* 修复web修改插件后帮助图片生成错误

## 2022/4/4 \[v0.1.4.5]

* 替换了bt搜索URL
* 优化使用playwright的相关代码
* 原神玩家查询新增层岩巨渊探索
* 修复原神便笺角色头像黑框
* 修复同意群聊请求错误
* 提供webui方面的api
* 新增web-ui（前端简易管理页面插件）插件

## 2022/3/21

* 修复statistics_handle.py乱码

## 2022/3/18 \[v0.1.4.4]

* 修复戳一戳无法功能关闭与ban禁用
* 新增图片搜索 search_image

## 2022/3/7

* 优化增删权限插件

## 2022/3/6

* 修复树脂提醒无法开启
* 修复p搜图片路径错误

## 2022/3/3 \[v0.1.4.3]

* 修复手动同意群聊请求依旧退出

## 2022/3/1 \[v0.1.4.2]

* 0.1.4内容

## 2022/2/27 \[v0.1.4.1]

* 优化抽卡

## 2022/2/25 \[v0.1.4]

* PIX提供配置MAX_ONCE_NUM2FORWARD：当单次发送图片超过指定张数且在群聊时，将转为合并消息
* 修复点歌无法正确发送
* 修复我有一个朋友有时文本会包含CQ码
* 修复群欢消息被动控制文本未删除 [@pull/124](https://github.com/HibiKier/zhenxun_bot/pull/124)
* message_builder.image不再提供参数：abspath

## 2022/2/23

* 插件状态将从已加载插件模块中读取
* 修复b站订阅插件订阅失败问题
* 修复重启命令无法使用

## 2022/2/21 \[v0.1.3.2]

* 群权限为-1时，超级用户发送的命令依旧生效
* 当群权限为-1时，被动技能也将不会发送
* 修复功能开关，b站转发解析，复读 ignore无法使用
* 修复色图下载文件名与路径错误
* 修复被动技能提醒有时无法删除控制文本

## 2022/2/20 \[v0.1.3.1]

* 修复pix下载临时文件目录错误
* 修复AI，天气，发送图片ignore导致无法使用
* 修复纯文本被动技能提醒有时无法删除控制文本

## 2022/2/19 \[v0.1.3] (nonebot beta2！)

* 由于nonebot升级版本，提供更新建议（__该次升级将会导致nonebot.beta1以下的插件无法使用__
  * 保证services，utils，configs，plugins，basic_plugins，文件夹均为最新
  * 根目录有pyproject.toml与poetry.lock
  * 执行命令：
    * pip3 install poetry
    * poetry install
    * poetry shell
    * playwright install chromium
    * python3 bot.py

* 适配nonebot.beta2
* 删除图片搜索 nonebot_plugin_picsearcher
* 替换cos api
* 原神签到树脂提醒新增绑定群里，在某群绑定uid就会在某群发送提醒信息（有好友则私聊，需要重新绑定uid
* 修改update_info.json
* 修复原神资源查询下载数据失败时导致报错
* 优化BuildImage.circle()锯齿问题 [@pull/109](https://github.com/HibiKier/zhenxun_bot/pull/109)
* epic restful 替换 [@pull/119](https://github.com/HibiKier/zhenxun_bot/pull/119)
* fix: 修复远古时期残留的epic推送问题 [@pull/122](https://github.com/HibiKier/zhenxun_bot/pull/122)

## 2022/2/11

* 修复pix不使用反代无法下载图片

## 2022/2/10 \[v0.1.1]

* 修复购买道具出错

## 2022/2/9 \[v0.1]

* 新增原神自动签到和手动签到
* 新增原神树脂提醒
* 新增手动重载Config.yaml命令以及重载配置定时任务（极少部分帮助或配置可能需要重启
* 修改了发送本地图库的matcher，改为on_message
* register_use可以通过返回值发送消息
* 修复修改商品时限制时间出错
* 修复超时商品依旧可以被购买

## 2022/1/16 \[v0.0.9.0]

* Ai提供文本敏感词过滤器
* 疫情插件适配新版腾讯API
* 修复/t回复带空格切分
* 修复原神玩家查询缺少渊下宫和稻妻家园以及角色不完全
* 修复方法 text2image 中 padding 和 font 无法对纯文本生效
* 修复签到图片中信息并未使用配置文件中的色图概率
* 修改原神大地图合成方式，改为先压缩再合成
* bag_user弃用字段props（该字段会在下次更新删除），使用新字段property
* 数据库中所有belonging_group统一修改为group_id
* 商店将registered_use和register_goods更名为register_use何register_goods
* 商品注册提供了kwargs参数提供：
  * bot
  * event
  * 特殊字段
    * “send_success_msg”(发送成功的交互信息->即：使用道具 {name} {num} 次成功)
    * “_max_num_limit”(该道具单次使用的最多个数，默认1)

## 2022/1/5 \[v0.0.8.2]

* 提供金币消费hook，可在plugins2settings.yaml中配置该功能需要消费的金币
* 商店插件将作为内置插件移动至basic_plugins
* 商店插件通过export提供了方法，不需要修改商店插件代码添加商品数据和生效方法
* 修改了hook插件顺序，主要以auth_hook为主
* 修改商店图片样式
* 取消每次启动更新城市列表（首次除外），采用定时更新，加快bot启动速度
* 取消每次启动时截取今日素材，采用调用时截取保存，加快bot启动速度
* 更新色图时当图片404时会删除并替换
* 疫情消息回复改为图片
* 修复商店折扣和限时时间无法生效
* 修复原神玩家查询尘歌壶缺少图片

## 2021/12/26

* 修复群词条问题 空格 会被录入导致不断回复
* 修复米游社app替换api导致无法正常查询

## 2021/12/24

* 支持国际疫情数据查询 [@pull/99](https://github.com/HibiKier/zhenxun_bot/pull/99)

## 2021/12/20

* 只有发布小于存储时间的新动态/视频的时候才获取并推送 [@pull/96](https://github.com/HibiKier/zhenxun_bot/pull/96)

## 2021/12/16 \[v0.0.7.0]

* 提供了真寻群聊功能总开关和对应默认配置项，命令：休息吧 醒来
* 新增原神玩家查询，原神便笺查询
* 群功能管理提供全部开启/关闭命令：开启/关闭全部功能
* 提供主要数据自动备份，且提供自定义配置项
* 提供命令：关于，用于介绍Bot之类的
* 新增命令exec，用于执行sql语句
* 签到提供参数 "all"，用于签到所有群聊
* Ban提醒提供cd
* 本地图库提供配置项SHOW_ID，用于设置发送图片时是否显示id
* 色图和PIX提供配置项SHOW_INFO，用于设置发送图片时是否显示图片信息
* 所有被动技能提供了进群默认状态配置项
* 修复添加权限第二种添加形式无法正确添加正确的权限
* 修复签到获取好感度卡时金币不会增加
* 修复当红包数量不合法时依旧扣除金币
* 修复金币红包再次使用塞红包时无法正确退回上次未开完的金币
* 修复 滴滴滴- 只包含图片时不会发送至管理员
* 修复添加权限等级错误
* 修复群词条以bot名称为开头时无法正确触发
* 修改了权限插件加载顺序防止小概率优先加载权限插件引起报错
* 本地图库新图库会统一建立在resource/img/image_management文件夹下，如果该文件夹内未找到图库，会从上级目录查找（即：resource/img/）

## 2021/12/1 \[v0.0.6.5/6]

* 群权限-1时超级用户命令依旧生效
* 修复以真寻为开头的词条不会被回复
* 修复购买道具可以为负数
* P站排行/搜图提供配置项，将略过大于指定张数的作品
* 昵称提供关键词屏蔽配置项，会将指定关键词替换为“*”
* 取消了自动更新，改为自动检测版本
* 自动更新不再覆盖config.py和移动config.yaml

## 2021/11/29 \[v0.0.6.4]

* 新增cos图撤回配置项
* 新增默认群权限配置项
* 修复权限等级类配置无法正常应用

## 2021/11/24 \[v0.0.6.3]

* 修复在线搜索色图出错
* 修复pix无法正确获取HIBIAPI

## 2021/11/23 \[v0.0.6.2]

* 替换cos API
* 提供私聊b了，即跨群b了用户
* 修复游戏抽卡导入角色失败(原神)
* 修复无Pixiv代理时报错
* 将项目中大部分aiohttp替换为httpx
* 删除了丘丘人翻译插件
* 新增群词条
* 修复游戏抽卡碧蓝航线bwiki格式更改导致获取报错
* 首次启动会生成配置文件后停止程序，配置后再次启动即可

## 2021/11/18

* 修复超级用户无法正确拉真寻入群

## 2021/11/14
  
* 修复功能总开关无法正确开启

## 2021/11/12

* 修复PIX无法url无法正确获取

## 2021/11/10

* 修复PIX表重复创建导致首次无法运行
* 检测Omage图库改为命令方式：检测omega图库

## 2021/11/9

* 修复管理员帮助无法正常响应
* 修复被ban时会一直回复被ban提醒

## 2021/11/5

* 修复ai没有图灵key时报错
* 提供图片路径resource/img/background/check

## 2021/11/4

* 通用排行榜改用图片消息，且可以自定义排行榜人数
* 优化CreateMat排行榜数据显示
* 修复了pix更新多余参数导致失败的问题
* 修复滴滴滴-注入风险
* 修复无法正常关闭滴滴滴，戳一戳
* 添加了发送图片撤回配置项WITHDRAW_IMAGE_TIME
* 修复了天气regex文本过长时会正则匹配过久导致nb卡顿
* message_build新增custom_forward_msg用于快捷生成转发消息
* 插件配置改为yaml存储，新增Config，用于获取和新增插件配置
* 新增 当插件加载失败时，会发送消息提醒超级用户，且在功能状态中对应失败插件写上[ERROR]
* 修复当查看-spuer插件帮助时无法正确回复
* 群内帮助图片会随群内功能开关和插件总开关变化
* 自检改为图像形式
* 更新色图删除了rar_setu，r18_rar和rar文件夹，压缩将统一在temp文件夹
* 更新色图只有在有更新数量或报错时才会提醒超级用户
* 群欢迎消息加入cd
* 加入资源管理resources_manager
* 新增 好友请求/群聊邀请 控制命令

## 2021/10/15

* 适配了原神资源查询米游社地图返回的新格式

## 2021/10/8

* 修复疫情省份查询失效
* 修复功能调用统计全局下统计可能发生错误

## 2021/10/4

* 修复了功能调用统计失效问题
* 当色图库中没有色图时，会在线搜索色图而不是‘没找到符合条件的色图...’
* 快速更新权限再给超级用户发送错误日志
* 修复疫情未加载省份城市无法正常使用

## 2021/10/3

* 对插件进行分离
* 重写了插件与限制管理器以及帮助获取
* 修改一些插件目录和数据存储目录
* 插件通用配置与限制数据将以ymal文件存储 \[路径：data/configs]
* 所有商店相关操作调用统计合并为商店（包括之前已经保存的数据，会先进行备份）
* 简化了点歌的代码相关
* 修复了碧蓝航线抽卡新框导致报错无法正常初始化
* 修复了P站排行/搜图在PC端无法正常显示
* 添加了插件对超级用户是否限制的配置 ‘limit_superuser’
* 添加命令 ‘重载插件配置’，用于生效手动修改配文件
* 超级用户帮助可以添加 -super 来显示该插件的超级用户帮助，示例：帮助.ban -super
* 原神黄历改为网页截图
* 修改了鲁迅说逻辑结构
* 修改了统计图表样式，改为自定义CreateMat
* 节日红包不再被24小时限制，群内多个节日红包将会覆盖
* 当群权限为-1时，不会对群发送修改权限通知，并屏蔽此群一切命令（包括提醒）
* 修复了红包数量可以过大或为负数，红包数量大于群员数量时会修改为群员数量
* 修复了负数开箱
* 签到最低好感度设置为0.01 [@pull/53](https://github.com/HibiKier/zhenxun_bot/pull/53)
* pip安装新依赖 ruamel.yaml
* 修复功能 EPIC [@pull/58](https://github.com/HibiKier/zhenxun_bot/pull/58)

## 2021/9/10

* 修复撤回消息有时无法正确获取消息id

## 2021/9/9

* 替换coser API
* 修复签到uid可能不默认为0
* 修复签到可能重复的问题
* 修复无订阅时递归出错
* 启用了plugins2info_dict, plugins2cd_dict, plugins2exists_dict配置文件，通过USE_CONFIG_FILE=True开启
* 修复涩图local_id会被固定为50
* 优化图库数量查询
* 修复原神大地图过大无法打开报错
* 修复无法显示正确的涩图上限

## 2021/9/7

* 修改 update_info.json
* 修改 更新信息 图片大小
* 修复 查看订阅 命令 UP和番剧无法正常显示
* 修复订阅推送无法正确推送
* 修复搜图返回列表为空时无法正确回复 [@pull/40](https://github.com/HibiKier/zhenxun_bot/pull/40)

## 2021/9/5

* 添加配置PIX_IMAGE_SIZE，调整PIX下载图片大小，当设置的图片404时，改为原图
* 新增配置DEFAULT_GROUP_LEVEL，默认群等级
* 新增超级用户功能 super ban，将屏蔽被ban用户的所有消息，指令：b了
* b站转发解析支持纯BV号解析，且五分钟内不会解析相同url
* 俄罗斯轮盘新增 连胜/最高连胜/连败/最高连败 纪录，新增 最高连胜排行榜/最高连败排行榜
* 增加扩展图库 OmegaPixivIllusts，不想自己找图的人福音（[Ailitonia](https://github.com/Ailitonia) 佬的高质量精品手筛图库）([传送门](https://github.com/Ailitonia/omega-miya/blob/master/archive_data/db_pixiv.7z) )，可以手动导入图库，也可以将解压文件放在bot.py同级目录重启bot
* 增加配置PIX_OMEGA_PIXIV_RATIO，PIX功能发送PIX图库和扩展图库OmegaPixivIllusts图片的比例，如果没有使用扩展图库OmegaPixivIllusts，请设置为(10, 0)
* 增加配置WITHDRAW_PIX_TIME，用于配置在开关PIX图片在群私聊的自动撤回
* 上传图库cases， 开箱 也可以连抽（未更新过没有价格）
* 新增命令 查看群白名单
* plugins2info_dict新增键"default_status"，设置加入新群时功能的默认开关状态
* 增加配置plugins2exists_dict，可自定义是否阻塞某命令同时触发多次
* 增加配置plugins2cd_dict，可自定义为命令添加cd
* 新增B站订阅（直播/番剧/UP）[测试]，提供命令：添加订阅 [主播/UP/番剧] [id/链接/番名]，删除订阅 [id]，查看订阅
* 优化pix和色图的数据库查询
* 触发已关闭的功能的正则时不再触发ai
* 更换coser API
* PIX搜索pid功能在群聊无法搜索PIX图库的r18和OmegaPixivIllusts的r15以及r18，超级用户除外
* PIX单次搜索的图片张数超级用户限制为至多30张，普通用户10张
* PIX超级用户新增-s，-r，可以通过pix -s 查看图库的涩图，pix -r查看图库的r18图，支持搜索，当然，pix图库只区分了r18和非r18，如果-s查询到不色的图也问题不大
* 优化P站排行和搜图，现在需要艾特，改为使用HIBIAPI，在群内时将使用合并消息（群聊搜图会屏蔽R-18）
* win10下playwright相关功能无法使用，但是不再需要删除文件
* 签到大改，优化签到方式与逻辑，改为图片形式发送，有概率额外获得随机道具（好感度有加成）
* 修改撤回功能，改为回复撤回，回复发送撤回
* 更改logging为loguru
* 删除了 发送图片 中的 [N]张图[keyword] 功能
* 修复私聊 关闭[功能] 默认不为 全部 而要添加参数 ‘a’
* 修复0权限用户可以修改禁言检测相关设置

## 2021/8/17

* 新增配置CHECK_NOTICE_INFO_CD，修改群权限，个人权限检测各种检测的提示消息cd
* 新增功能‘连续上传图片’功能，直到输入‘stop’停止
* 新增功能维护时白名单以及对应命令（白名单中的群聊不受维护限制）
* 新增ALAPI功能，微博热搜，可以通过序号来查看部分热搜内容
* 新增配置NICKNAME，偶尔也想换换名字的说（自我介绍仅当NICKNAME=真寻时生效）
* 提供 更新信息 命令，可以使群员查看更新内容（可开关，与其他功能无异，但不会被统计，该命令图片由自动更新生成）
* 超级用户可以通过私聊来对指定qq进行ban/unban
* 超级用户帮助改为图片形式
* 公开图库删除‘色图’
* 群权限检测，个人权限检测，功能开关检测合并，权限检测顺序：个人权限 > 群权限 > 插件开关 >超级用户禁用某群插件 > 超级用户限制群里插件 > 插件维护检测
* 重写群功能管理，超级用户可对群/私聊分别禁用，也可禁用指定群指定功能，新增命令‘功能状态’，超级用户关闭功能提供参数(默认ALL)：group/g（群聊），private/p（私聊）
* 超级用户不会被任何权限等检测阻挡
* 不会重复复读，复读消息只会发送一次
* b站转发解析支持b23.tv，www.bilibili.com链接，cv专栏(playwright截图，压缩倍率0.5，较慢且文字可能不清晰，后优化)
* 我有一个朋友功能，当艾特一个对象时，‘朋友’改为艾特对象的群名片或昵称
* 修复‘上传/删除/移动图片’目录不正确
* 修复天气功能，当城市名在‘天气’后时报错
* 修复配置INITIAL_SETU_PROBABILITY不生效

## 2021/8/10

* 重复的好友请求和邀群提示在5分钟内不会重复提示
* 疫情会优先检查城市，城市省份市区重名时请添加‘市’
* 添加命令‘原神资源查找’，‘设置cookie’
* 添加配置AUTO_UPDATE_ZHENXUN，是否自动更新真寻，默认True
* 添加配置MAX_RUSSIAN_BET_GOLD，俄罗斯轮盘赌注最大金额，默认1000
* 检查更新真寻定时任务时间改为12 : 00
* 添加功能能不能好好说话(nbnhhsh)
* 添加功能随机roll，无参为数字，有参为随机参数
* 添加linux重启脚本以及重启命令‘重启’（建议首次生成restart.sh先查看命令是否正确）
* 修复管理员功能的权限检测
* 修复丢人爬开关

## 2021/8/6

* 天气查询会优先遍历城市
* 添加自动更新真寻命令

#### 如果你的版本为 2021/8/4，可以直接复制plugins/check_zhenxun_update后，通过指令来更新真寻

## 2021/8/4

* 修改天气与疫情城市数据，改为api获取，丰富疫情的回复消息
* 原神资源查询，大地图将被压缩至9M，且启动时当大地图存在时不再自动更新地图
* 下载数据库内色图时将直接存储至_setu，不再存储至临时文件
* 重复的好友请求或邀请请求在一定时间不会重复发送提醒
* 添加每日自动清理临时图片定时任务
* 修复金币排行显示
* 修复无法正常关闭戳一戳功能

## 2021/7/30

* 重构代码，进行优化，添加注释，删除冗余代码，降低代码耦合
* 添加功能：PIX（一套快捷的pixiv存图命令，自建图库存储url等信息？意在获取自己或群友xp的图）
* 添加功能：清理临时图片文件（temp/rar/r18_rar文件夹）
* 添加额外定时任务（5分钟检测一次），解决加入新群时无法及时为管理员提供权限
* 添加配置ALAPI_AI_CHECK，开关AI回复文本检测
* 添加配置IMPORT_DEFAULT_SHOP_GOODS，控制是否导入内置的三个商品（好感度加持卡ⅠⅡⅢ）
* 添加配置ONLY_USE_LOCAL_SETU，仅仅使用本地色图（有的话），提升速度，但无法在线搜索色图和保存链接
* 添加配置WITHDRAW_SETU_TIME，是否需要延迟撤回色图，可配置仅群里，私聊或全部
* 好友请求，入群请求，滴滴滴-，/t，被踢出群提醒，的提示消息更加丰富
* 彻底重写原神资源查找，添加规划路线（路线残缺缺缺缺版，有空补）添加命令‘更新原神资源信息’，强制更新地图等资源
* 优化色图和P站排行/搜图检测用户是否正在触发命令代码
* 当群最后发言大于36小时，也会关闭广播通知
* 功能维护时超级用户依然可以调用（苦了谁都不能苦了自己）
* 修复获取赛马娘UP公告
* 重写 色图/更新色图
  * 色图数据存储改为数据库，启动时会更新之前的色图数据(有的话)，更新完毕后会删除原数据文件，如果需要保留请提前备份，
  * lolicon api改为v2
  * 取消r18次数限制
  * 单次搜索至多保存100条链接
  * 添加定时撤回
  * 暂时取消上传/删除色图
*
* 更新建议（不要替换你的data和resources文件夹！）
  * 删除configs，plugins，services，utils，models文件夹重新clone
  * 删除多余文件夹，resources/img/genshin/seek_god_eye
  * 清空resources/img/genshin/genshin_icon文件夹，仅保留box.png和box_alpha.png
  * 替换bot.py

## 2021/7/27

* 原神今日素材改为单张截图+拼图，更新文件utils/img_utils.py及plugins/genshin/material_remind/__init__.py

## 2021/7/26

* 修复原神今日素材稻妻城开放后截图不完整的问题

## 2021/7/14

* 原神今日素材自动更新时间由 00:01 -> 04:01 [#issues7](https://github.com/HibiKier/zhenxun_bot/issues/7)
* 小问题的修复和优化

## 2021/7/12

* 修复开箱功能单抽出金时存储格式错误导致 ‘我的金色’ 无法正常发送图片
* 小问题的修复和优化

## 2021/7/6

* 识番功能 trace.moe 替换为新API（旧API已失效）
* 小问题的修复和优化

## 2021/6/30

* 将plugin2name和plugin2level合并为plugin2info
* util改为utils（。。！）
* 修复当用户发送速度极快时开箱会突破每日限制
* 新增功能：通过PID获取图片
* 发送图片新增功能：搜索图片
* 功能统计可视化
* 新增命令：好感度总排行
* 原神每日素材改为从"可莉特调"截图，提供命令‘更新原神每日素材’和定时任务
* 修复月功能统计错误的问题

## 2021/6/24

* 添加了一些ALAPI：网易云热评，获取b站视频封面，古诗（需要填写ALAPI_TOKEN）
* 如果填写了ALAPI_TOKEN，将会检测备用接口回复的文本是否合规
* 优化了色图，当搜索色图下载失败时，会从本地色图库中发送相关tag色图
* 当网易云点歌繁忙时会尝试多次点歌

## 2021/6/23

* 添加功能：群权限（所以说内鬼都快爬，可以在configs/config.py中修改各个功能的权限等级）
* 优化了数据统计，将以7天，30天为周期，为将来更方便实现数据可视化
* 更新坎公骑冠剑UP卡池
* 修复赛马娘UP卡池
* 修复一些小问题

## 2021/6/18

* 修复p站排行，搜图因网络问题爆炸时没有具体回复
* 更换色图显示方式为 id，title，author，pid
* 修复修改商品后商品顺序改变
* 滴滴滴- 和 /t支持图片回复
* 将/t回复更加简单(可以通过序号)，且可以直接发送群
* 修复bt功能无法交互

## 2021/6/17

* 修复p站排行，搜图因网络问题爆炸时没有具体回复
* 更换色图显示方式为 id，title，author，pid

## 2021/6/15

* 修改了‘帮助’功能，具体为‘帮助 指令名’，未指定指令名时则为查看全部功能列表
* 修改了色图的存储数据格式
* 色图功能搜索的色图改为随机从urls中随机抽取
* 将商品数据存储入数据库，提供 '增加/删除/修改商品' 指令
* 商店列表图片不再使用固定背景图，改为直接拼图
* 增加功能：俄罗斯轮盘/胜场排行/败场排行/欧洲人排行/慈善家排行
* 增加功能：金币红包（节日红包与群红包相互独立）
* 金币排行
* 重写一个朋友插件
* 其他微小调整

## 2021/6/4

* 重写BT功能
* 进行一些BUG修复和微小调整
* 添加撤回功能[nonebot-plugin-withdraw](https://github.com/MeetWq/nonebot-plugin-withdraw)
* 为色图功能添加额外的 上传色图 和 删除色图方法（影响hash）

## 2021/5/26

* 将语录源更换为一言api
