---
title: Linux小白安装教程
subSidebar: false
id: install_xiaobai
---

:::tip
教程环境为全新未开封的 **Ubuntu 24.04.1 LTS** 版，请注意系统版本是否一致，使用的为桌面版，与服务器版本并无太大差别，如遇到教程外的情况请添加 [真寻酱的技术群](https://qm.qq.com/q/YYYt5rkMYc) 进行求助
:::

#### 教程环境

服务器信息：Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-49-generic x86_64)

Python版本：3.12.3

ssh连接工具：[FinalShell](https://www.hostbuf.com)

系统名称：zhenxun

连接用户：zhenxun

环境语音：中文简体

#### 环境安装

##### 换deb源为阿里

:::warning
请注意系统版本是否与教程一致，不一样请跳过此步骤！
:::

###### 备份原文件

`sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak`

###### 换源

``` shell
sudo tee /etc/apt/sources.list > /dev/null << EOF
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
EOF
```

:::tip 提示
运行sudo命令时会提升输入密码，此时密码输入后为不可见状态，并不是输入失败，输入完成后回车即可
:::

<details>
  <summary>点击查看详细输出</summary>

```shell
zhenxun@zhenxun:~$ sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
[sudo] zhenxun 的密码：
zhenxun@zhenxun:~$ sudo tee /etc/apt/sources.list > /dev/null << EOF
> deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
> deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
> deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
> deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
> EOF
zhenxun@zhenxun:~$
```

</details>

##### 更新软件包列表

`sudo apt update`

<details>
  <summary>点击查看详细输出</summary>

```shell
zhenxun@zhenxun:~$ sudo apt update
获取:1 http://mirrors.aliyun.com/ubuntu focal InRelease [265 kB]
获取:2 http://mirrors.aliyun.com/ubuntu focal-updates InRelease [128 kB]
获取:3 http://mirrors.aliyun.com/ubuntu focal-backports InRelease [128 kB]
获取:4 http://mirrors.aliyun.com/ubuntu focal-security InRelease [128 kB]
获取:5 http://mirrors.aliyun.com/ubuntu focal/main amd64 Packages [970 kB]
获取:6 http://mirrors.aliyun.com/ubuntu focal/main Translation-en [506 kB]
获取:7 http://mirrors.aliyun.com/ubuntu focal/main Translation-zh_CN [113 kB]
获取:8 http://mirrors.aliyun.com/ubuntu focal/main amd64 Components [494 kB]
获取:9 http://mirrors.aliyun.com/ubuntu focal/main Icons (48x48) [98.4 kB]
获取:10 http://mirrors.aliyun.com/ubuntu focal/main Icons (64x64) [163 kB]
获取:11 http://mirrors.aliyun.com/ubuntu focal/main Icons (64x64@2) [15.8 kB]
获取:12 http://mirrors.aliyun.com/ubuntu focal/main amd64 c-n-f Metadata [29.5 kB]
获取:13 http://mirrors.aliyun.com/ubuntu focal/restricted amd64 Packages [22.0 kB]
获取:14 http://mirrors.aliyun.com/ubuntu focal/restricted Translation-en [6,212 B]
获取:15 http://mirrors.aliyun.com/ubuntu focal/restricted Translation-zh_CN [1,324 B]
获取:16 http://mirrors.aliyun.com/ubuntu focal/restricted amd64 c-n-f Metadata [392 B]
获取:17 http://mirrors.aliyun.com/ubuntu focal/universe amd64 Packages [8,628 kB]
命中:18 http://security.ubuntu.com/ubuntu noble-security InRelease
获取:19 http://mirrors.aliyun.com/ubuntu focal/universe Translation-zh_CN [388 kB]
获取:20 http://mirrors.aliyun.com/ubuntu focal/universe Translation-en [5,124 kB]
命中:21 https://ppa.launchpadcontent.net/oibaf/graphics-drivers/ubuntu noble InRelease
获取:22 http://mirrors.aliyun.com/ubuntu focal/universe amd64 Components [3,603 kB]
获取:23 http://mirrors.aliyun.com/ubuntu focal/universe Icons (48x48) [3,016 kB]
获取:24 http://mirrors.aliyun.com/ubuntu focal/universe Icons (64x64) [7,794 kB]
获取:25 http://mirrors.aliyun.com/ubuntu focal/universe Icons (64x64@2) [44.3 kB]
获取:26 http://mirrors.aliyun.com/ubuntu focal/universe amd64 c-n-f Metadata [265 kB]
获取:27 http://mirrors.aliyun.com/ubuntu focal/multiverse amd64 Packages [144 kB]
获取:28 http://mirrors.aliyun.com/ubuntu focal/multiverse Translation-en [104 kB]
获取:29 http://mirrors.aliyun.com/ubuntu focal/multiverse Translation-zh_CN [4,612 B]
获取:30 http://mirrors.aliyun.com/ubuntu focal/multiverse amd64 Components [48.4 kB]
获取:31 http://mirrors.aliyun.com/ubuntu focal/multiverse Icons (48x48) [23.1 kB]
获取:32 http://mirrors.aliyun.com/ubuntu focal/multiverse Icons (64x64) [192 kB]
获取:33 http://mirrors.aliyun.com/ubuntu focal/multiverse Icons (64x64@2) [214 B]
获取:34 http://mirrors.aliyun.com/ubuntu focal/multiverse amd64 c-n-f Metadata [9,136 B]
获取:35 http://mirrors.aliyun.com/ubuntu focal-updates/main amd64 Packages [3,680 kB]
获取:37 http://mirrors.aliyun.com/ubuntu focal-updates/main Translation-en [564 kB]
获取:38 http://mirrors.aliyun.com/ubuntu focal-updates/main amd64 Components [276 kB]
获取:39 http://mirrors.aliyun.com/ubuntu focal-updates/main Icons (48x48) [63.9 kB]
获取:40 http://mirrors.aliyun.com/ubuntu focal-updates/main Icons (64x64) [102 kB]
命中:36 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble InRelease
获取:41 http://mirrors.aliyun.com/ubuntu focal-updates/main Icons (64x64@2) [29 B]
获取:42 http://mirrors.aliyun.com/ubuntu focal-updates/main amd64 c-n-f Metadata [17.8 kB]
获取:43 http://mirrors.aliyun.com/ubuntu focal-updates/restricted amd64 Packages [3,379 kB]
获取:44 http://mirrors.aliyun.com/ubuntu focal-updates/restricted Translation-en [473 kB]
获取:45 http://mirrors.aliyun.com/ubuntu focal-updates/restricted amd64 Components [212 B]
获取:46 http://mirrors.aliyun.com/ubuntu focal-updates/restricted Icons (48x48) [29 B]
获取:47 http://mirrors.aliyun.com/ubuntu focal-updates/restricted Icons (64x64) [29 B]
获取:48 http://mirrors.aliyun.com/ubuntu focal-updates/restricted Icons (64x64@2) [29 B]
获取:49 http://mirrors.aliyun.com/ubuntu focal-updates/restricted amd64 c-n-f Metadata [548 B]
获取:50 http://mirrors.aliyun.com/ubuntu focal-updates/universe amd64 Packages [1,238 kB]
获取:51 http://mirrors.aliyun.com/ubuntu focal-updates/universe Translation-en [297 kB]
获取:52 http://mirrors.aliyun.com/ubuntu focal-updates/universe amd64 Components [445 kB]
获取:54 http://mirrors.aliyun.com/ubuntu focal-updates/universe Icons (48x48) [297 kB]
命中:53 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates InRelease
获取:55 http://mirrors.aliyun.com/ubuntu focal-updates/universe Icons (64x64) [520 kB]
命中:56 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-backports InRelease
获取:57 http://mirrors.aliyun.com/ubuntu focal-updates/universe Icons (64x64@2) [29 B]
获取:58 http://mirrors.aliyun.com/ubuntu focal-updates/universe amd64 c-n-f Metadata [28.3 kB]
获取:59 http://mirrors.aliyun.com/ubuntu focal-updates/multiverse amd64 Packages [27.0 kB]
获取:60 http://mirrors.aliyun.com/ubuntu focal-updates/multiverse Translation-en [7,936 B]
获取:61 http://mirrors.aliyun.com/ubuntu focal-updates/multiverse amd64 Components [940 B]
获取:62 http://mirrors.aliyun.com/ubuntu focal-updates/multiverse Icons (48x48) [1,867 B]
获取:63 http://mirrors.aliyun.com/ubuntu focal-updates/multiverse Icons (64x64) [2,497 B]
获取:64 http://mirrors.aliyun.com/ubuntu focal-updates/multiverse Icons (64x64@2) [29 B]
获取:65 http://mirrors.aliyun.com/ubuntu focal-updates/multiverse amd64 c-n-f Metadata [612 B]
获取:66 http://mirrors.aliyun.com/ubuntu focal-backports/main amd64 Packages [45.7 kB]
获取:67 http://mirrors.aliyun.com/ubuntu focal-backports/main Translation-en [16.3 kB]
获取:68 http://mirrors.aliyun.com/ubuntu focal-backports/main amd64 Components [7,980 B]
获取:69 http://mirrors.aliyun.com/ubuntu focal-backports/main Icons (48x48) [7,156 B]
获取:70 http://mirrors.aliyun.com/ubuntu focal-backports/main Icons (64x64) [10.7 kB]
获取:71 http://mirrors.aliyun.com/ubuntu focal-backports/main Icons (64x64@2) [29 B]
获取:72 http://mirrors.aliyun.com/ubuntu focal-backports/main amd64 c-n-f Metadata [1,420 B]
获取:73 http://mirrors.aliyun.com/ubuntu focal-backports/restricted amd64 Components [216 B]
获取:74 http://mirrors.aliyun.com/ubuntu focal-backports/restricted Icons (48x48) [29 B]
获取:75 http://mirrors.aliyun.com/ubuntu focal-backports/restricted Icons (64x64) [29 B]
获取:76 http://mirrors.aliyun.com/ubuntu focal-backports/restricted Icons (64x64@2) [29 B]
获取:77 http://mirrors.aliyun.com/ubuntu focal-backports/restricted amd64 c-n-f Metadata [116 B]
获取:78 http://mirrors.aliyun.com/ubuntu focal-backports/universe amd64 Packages [25.0 kB]
获取:79 http://mirrors.aliyun.com/ubuntu focal-backports/universe Translation-en [16.3 kB]
获取:80 http://mirrors.aliyun.com/ubuntu focal-backports/universe amd64 Components [30.5 kB]
获取:81 http://mirrors.aliyun.com/ubuntu focal-backports/universe Icons (48x48) [13.3 kB]
获取:82 http://mirrors.aliyun.com/ubuntu focal-backports/universe Icons (64x64) [22.7 kB]
获取:83 http://mirrors.aliyun.com/ubuntu focal-backports/universe Icons (64x64@2) [29 B]
获取:84 http://mirrors.aliyun.com/ubuntu focal-backports/universe amd64 c-n-f Metadata [880 B]
获取:85 http://mirrors.aliyun.com/ubuntu focal-backports/multiverse amd64 Components [212 B]
获取:86 http://mirrors.aliyun.com/ubuntu focal-backports/multiverse Icons (48x48) [29 B]
获取:87 http://mirrors.aliyun.com/ubuntu focal-backports/multiverse Icons (64x64) [29 B]
获取:88 http://mirrors.aliyun.com/ubuntu focal-backports/multiverse Icons (64x64@2) [29 B]
获取:89 http://mirrors.aliyun.com/ubuntu focal-backports/multiverse amd64 c-n-f Metadata [116 B]
获取:90 http://mirrors.aliyun.com/ubuntu focal-security/main amd64 Packages [3,304 kB]
获取:91 http://mirrors.aliyun.com/ubuntu focal-security/main Translation-en [484 kB]
获取:92 http://mirrors.aliyun.com/ubuntu focal-security/main amd64 Components [65.4 kB]
获取:93 http://mirrors.aliyun.com/ubuntu focal-security/main Icons (48x48) [24.2 kB]
获取:94 http://mirrors.aliyun.com/ubuntu focal-security/main Icons (64x64) [42.9 kB]
获取:95 http://mirrors.aliyun.com/ubuntu focal-security/main Icons (64x64@2) [29 B]
获取:96 http://mirrors.aliyun.com/ubuntu focal-security/main amd64 c-n-f Metadata [14.3 kB]
获取:97 http://mirrors.aliyun.com/ubuntu focal-security/restricted amd64 Packages [3,247 kB]
获取:98 http://mirrors.aliyun.com/ubuntu focal-security/restricted Translation-en [456 kB]
获取:99 http://mirrors.aliyun.com/ubuntu focal-security/restricted amd64 Components [212 B]
获取:100 http://mirrors.aliyun.com/ubuntu focal-security/restricted Icons (48x48) [29 B]
获取:101 http://mirrors.aliyun.com/ubuntu focal-security/restricted Icons (64x64) [29 B]
获取:102 http://mirrors.aliyun.com/ubuntu focal-security/restricted Icons (64x64@2) [29 B]
获取:103 http://mirrors.aliyun.com/ubuntu focal-security/restricted amd64 c-n-f Metadata [548 B]
获取:104 http://mirrors.aliyun.com/ubuntu focal-security/universe amd64 Packages [1,016 kB]
获取:105 http://mirrors.aliyun.com/ubuntu focal-security/universe Translation-en [215 kB]
获取:106 http://mirrors.aliyun.com/ubuntu focal-security/universe amd64 Components [160 kB]
获取:107 http://mirrors.aliyun.com/ubuntu focal-security/universe Icons (48x48) [95.4 kB]
获取:108 http://mirrors.aliyun.com/ubuntu focal-security/universe Icons (64x64) [166 kB]
获取:109 http://mirrors.aliyun.com/ubuntu focal-security/universe Icons (64x64@2) [29 B]
获取:110 http://mirrors.aliyun.com/ubuntu focal-security/universe amd64 c-n-f Metadata [21.4 kB]
获取:111 http://mirrors.aliyun.com/ubuntu focal-security/multiverse amd64 Packages [24.8 kB]
获取:112 http://mirrors.aliyun.com/ubuntu focal-security/multiverse Translation-en [5,968 B]
获取:113 http://mirrors.aliyun.com/ubuntu focal-security/multiverse amd64 Components [940 B]
获取:114 http://mirrors.aliyun.com/ubuntu focal-security/multiverse Icons (48x48) [1,867 B]
获取:115 http://mirrors.aliyun.com/ubuntu focal-security/multiverse Icons (64x64) [2,497 B]
获取:116 http://mirrors.aliyun.com/ubuntu focal-security/multiverse Icons (64x64@2) [29 B]
获取:117 http://mirrors.aliyun.com/ubuntu focal-security/multiverse amd64 c-n-f Metadata [540 B]
已下载 53.4 MB，耗时 10秒 (5,199 kB/s)
正在读取软件包列表... 完成
正在分析软件包的依赖关系树... 完成
正在读取状态信息... 完成
有 3 个软件包可以升级。请执行 ‘apt list --upgradable’ 来查看它们
```

</details>

:::tip 提示
运行到已下载时可能会卡住，请耐心等待。如遇到软件源错误问题请尝试恢复备份文件后再重新运行命令
:::

###### 恢复原文件

`sudo mv /etc/apt/sources.list.bak /etc/apt/sources.list`

##### 安装git工具

`sudo apt install git`

<details>
  <summary>点击查看详细输出</summary>

```shell
zhenxun@zhenxun:~$ sudo apt install git
正在读取软件包列表... 完成
正在分析软件包的依赖关系树... 完成
正在读取状态信息... 完成
将会同时安装下列软件：
  git-man liberror-perl
建议安装：
  git-daemon-run | git-daemon-sysvinit git-doc git-email git-gui gitk gitweb git-cvs git-mediawiki git-svn
下列【新】软件包将被安装：
  git git-man liberror-perl
升级了 0 个软件包，新安装了 3 个软件包，要卸载 0 个软件包，有 3 个软件包未被升级。
需要下载 4,804 kB 的归档。
解压缩后会消耗 24.5 MB 的额外空间。
您希望继续执行吗？ [Y/n] y
获取:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 liberror-perl all 0.17029-2 [25.6 kB]
获取:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 git-man all 1:2.43.0-1ubuntu7.1 [1,100 kB]
获取:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 git amd64 1:2.43.0-1ubuntu7.1 [3,679 kB]
已下载 4,804 kB，耗时 7秒 (700 kB/s)
正在选中未选择的软件包 liberror-perl。
(正在读取数据库 ... 系统当前共安装有 153464 个文件和目录。)
准备解压 .../liberror-perl_0.17029-2_all.deb  ...

进度：[  0%] [......................................................................................................................]
正在解压 liberror-perl (0.17029-2) .................................................................................................]

正在选中未选择的软件包 git-man。....................................................................................................]
准备解压 .../git-man_1%3a2.43.0-1ubuntu7.1_all.deb  ...

正在解压 git-man (1:2.43.0-1ubuntu7.1) .............................................................................................]

正在选中未选择的软件包 git。######################..................................................................................]
准备解压 .../git_1%3a2.43.0-1ubuntu7.1_amd64.deb  ...

正在解压 git (1:2.43.0-1ubuntu7.1) ...#####################.........................................................................]

正在设置 liberror-perl (0.17029-2) ...##############################................................................................]

进度：[ 54%] [###############################################################.......................................................]
正在设置 git-man (1:2.43.0-1ubuntu7.1) ...############################################..............................................]

进度：[ 69%] [#################################################################################.....................................]
正在设置 git (1:2.43.0-1ubuntu7.1) ...##################################################################............................]

进度：[ 85%] [###################################################################################################...................]
正在处理用于 man-db (2.12.0-4build2) 的触发器 ...#########################################################################..........]
zhenxun@zhenxun:~$
```

</details>

:::tip 提示
执行命令后遇到 `您希望继续执行吗？ [Y/n]` 提示后输入`y` 后回车即可
:::

##### 安装pip3

`sudo apt install python3-pip`

<details>
  <summary>点击查看详细输出</summary>

```shell
zhenxun@zhenxun:~$ sudo apt install python3-pip
正在读取软件包列表... 完成
正在分析软件包的依赖关系树... 完成
正在读取状态信息... 完成
将会同时安装下列软件：
  binutils binutils-common binutils-x86-64-linux-gnu build-essential bzip2 dpkg-dev fakeroot g++ g++-13 g++-13-x86-64-linux-gnu
  g++-x86-64-linux-gnu gcc gcc-13 gcc-13-x86-64-linux-gnu gcc-x86-64-linux-gnu javascript-common libalgorithm-diff-perl
  libalgorithm-diff-xs-perl libalgorithm-merge-perl libasan8 libbinutils libcc1-0 libctf-nobfd0 libctf0 libdpkg-perl libexpat1-dev
  libfakeroot libfile-fcntllock-perl libgcc-13-dev libgprofng0 libhwasan0 libitm1 libjs-jquery libjs-sphinxdoc libjs-underscore
  liblsan0 libpython3-dev libpython3.12-dev libquadmath0 libsframe1 libstdc++-13-dev libtsan2 libubsan1 lto-disabled-list make
  python3-dev python3-setuptools python3-wheel python3.12-dev zlib1g-dev
建议安装：
  binutils-doc gprofng-gui bzip2-doc debian-keyring g++-multilib g++-13-multilib gcc-13-doc gcc-multilib autoconf automake libtool
  flex bison gcc-doc gcc-13-multilib gcc-13-locales gdb-x86-64-linux-gnu apache2 | lighttpd | httpd bzr libstdc++-13-doc make-doc
  python-setuptools-doc
下列【新】软件包将被安装：
  binutils binutils-common binutils-x86-64-linux-gnu build-essential bzip2 dpkg-dev fakeroot g++ g++-13 g++-13-x86-64-linux-gnu
  g++-x86-64-linux-gnu gcc gcc-13 gcc-13-x86-64-linux-gnu gcc-x86-64-linux-gnu javascript-common libalgorithm-diff-perl
  libalgorithm-diff-xs-perl libalgorithm-merge-perl libasan8 libbinutils libcc1-0 libctf-nobfd0 libctf0 libdpkg-perl libexpat1-dev
  libfakeroot libfile-fcntllock-perl libgcc-13-dev libgprofng0 libhwasan0 libitm1 libjs-jquery libjs-sphinxdoc libjs-underscore
  liblsan0 libpython3-dev libpython3.12-dev libquadmath0 libsframe1 libstdc++-13-dev libtsan2 libubsan1 lto-disabled-list make
  python3-dev python3-pip python3-setuptools python3-wheel python3.12-dev zlib1g-dev
升级了 0 个软件包，新安装了 51 个软件包，要卸载 0 个软件包，有 3 个软件包未被升级。
需要下载 65.9 MB 的归档。
解压缩后会消耗 252 MB 的额外空间。
您希望继续执行吗？ [Y/n] y
获取:1 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 binutils-common amd64 2.42-4ubuntu2.3 [239 kB]
获取:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libsframe1 amd64 2.42-4ubuntu2.3 [14.9 kB]
获取:3 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libbinutils amd64 2.42-4ubuntu2.3 [575 kB]
获取:4 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libctf-nobfd0 amd64 2.42-4ubuntu2.3 [97.1 kB]
获取:5 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libctf0 amd64 2.42-4ubuntu2.3 [94.5 kB]
获取:6 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 libgprofng0 amd64 2.42-4ubuntu2.3 [849 kB]
获取:7 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 binutils-x86-64-linux-gnu amd64 2.42-4ubuntu2.3 [2,463 kB]
********************************************************************
获取:49 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-updates/main amd64 python3-setuptools all 68.1.2-2ubuntu1.1 [396 kB]
获取:50 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/universe amd64 python3-wheel all 0.42.0-2 [53.1 kB]
获取:51 http://cn.archive.ubuntu.com/ubuntu noble-updates/universe amd64 python3-pip all 24.0+dfsg-1ubuntu1.1 [1,317 kB]
已下载 65.9 MB，耗时 32秒 (2,064 kB/s)
正在从软件包中解出模板：100%
正在选中未选择的软件包 binutils-common:amd64。
(正在读取数据库 ... 系统当前共安装有 154548 个文件和目录。)
准备解压 .../00-binutils-common_2.42-4ubuntu2.3_amd64.deb  ...

正在解压 binutils-common:amd64 (2.42-4ubuntu2.3) ...................................................................................]
正在选中未选择的软件包 libsframe1:amd64。
准备解压 .../01-libsframe1_2.42-4ubuntu2.3_amd64.deb  ...

正在解压 libsframe1:amd64 (2.42-4ubuntu2.3) ........................................................................................]
正在选中未选择的软件包 libbinutils:amd64。
准备解压 .../02-libbinutils_2.42-4ubuntu2.3_amd64.deb  ...

正在解压 libbinutils:amd64 (2.42-4ubuntu2.3) .......................................................................................]
正在选中未选择的软件包 libctf-nobfd0:amd64。
准备解压 .../03-libctf-nobfd0_2.42-4ubuntu2.3_amd64.deb  ...

正在解压 libctf-nobfd0:amd64 (2.42-4ubuntu2.3) .....................................................................................]
正在选中未选择的软件包 libctf0:amd64。
准备解压 .../04-libctf0_2.42-4ubuntu2.3_amd64.deb  ...

正在解压 libctf0:amd64 (2.42-4ubuntu2.3) ...........................................................................................]
正在选中未选择的软件包 libgprofng0:amd64。
准备解压 .../05-libgprofng0_2.42-4ubuntu2.3_amd64.deb  ...

正在解压 libgprofng0:amd64 (2.42-4ubuntu2.3) .......................................................................................]
正在选中未选择的软件包 binutils-x86-64-linux-gnu。
准备解压 .../06-binutils-x86-64-linux-gnu_2.42-4ubuntu2.3_amd64.deb  ...

正在解压 binutils-x86-64-linux-gnu (2.42-4ubuntu2.3) ...............................................................................]
正在选中未选择的软件包 binutils。
准备解压 .../07-binutils_2.42-4ubuntu2.3_amd64.deb  ...

正在解压 binutils (2.42-4ubuntu2.3) ................................................................................................]
正在选中未选择的软件包 libcc1-0:amd64。
准备解压 .../08-libcc1-0_14.2.0-4ubuntu2~24.04_amd64.deb  ...

正在解压 libcc1-0:amd64 (14.2.0-4ubuntu2~24.04) ....................................................................................]
正在选中未选择的软件包 libitm1:amd64。
准备解压 .../09-libitm1_14.2.0-4ubuntu2~24.04_amd64.deb  ...

********************************************************************

update-alternatives: 使用 /usr/bin/g++ 来在自动模式中提供 /usr/bin/c++ (c++)#####################################################...]
正在设置 build-essential (12.10ubuntu1) ...

正在处理用于 man-db (2.12.0-4build2) 的触发器 ...#################################################################################..]
正在处理用于 libc-bin (2.39-0ubuntu8.3) 的触发器 ...
```

</details>

##### 安装poetry

::::warning 破坏警告

下面的命令可能会破坏系统包的依赖关系，实测后暂时没发现问题，怕影响的可以使用虚拟环境或pipx

::::

`sudo pip install --break-system-packages poetry`

`sudo pip install --break-system-packages poetry -i https://mirrors.aliyun.com/pypi/simple/`

:::tip
国内服务器推荐使用第二条命令
:::

<details>
  <summary>点击查看详细输出</summary>

```shell
zhenxun@zhenxun:~/zhenxun_bot$ sudo pip install --break-system-packages poetry -i https://mirrors.aliyun.com/pypi/simple/
Looking in indexes: https://mirrors.aliyun.com/pypi/simple/
Collecting poetry
  Downloading https://mirrors.aliyun.com/pypi/packages/62/93/b73911fd5eb152cd42cb7aca0ecc23289d6a94da7a6699046acc46224db9/poetry-1.8.4-py3-none-any.whl (249 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 249.9/249.9 kB 824.6 kB/s eta 0:00:00
Requirement already satisfied: build<2.0.0,>=1.0.3 in /usr/local/lib/python3.12/dist-packages (from poetry) (1.2.2.post1)
Requirement already satisfied: cachecontrol<0.15.0,>=0.14.0 in /usr/local/lib/python3.12/dist-packages (from cachecontrol[filecache]<0.15.0,>=0.14.0->poetry) (0.14.1)
Requirement already satisfied: cleo<3.0.0,>=2.1.0 in /usr/local/lib/python3.12/dist-packages (from poetry) (2.1.0)
Requirement already satisfied: crashtest<0.5.0,>=0.4.1 in /usr/local/lib/python3.12/dist-packages (from poetry) (0.4.1)
Requirement already satisfied: dulwich<0.22.0,>=0.21.2 in /usr/local/lib/python3.12/dist-packages (from poetry) (0.21.7)
Requirement already satisfied: fastjsonschema<3.0.0,>=2.18.0 in /usr/local/lib/python3.12/dist-packages (from poetry) (2.21.0)
Requirement already satisfied: installer<0.8.0,>=0.7.0 in /usr/local/lib/python3.12/dist-packages (from poetry) (0.7.0)
Requirement already satisfied: keyring<25.0.0,>=24.0.0 in /usr/local/lib/python3.12/dist-packages (from poetry) (24.3.1)
Requirement already satisfied: packaging>=23.1 in /usr/lib/python3/dist-packages (from poetry) (24.0)
Requirement already satisfied: pexpect<5.0.0,>=4.7.0 in /usr/lib/python3/dist-packages (from poetry) (4.9.0)
Requirement already satisfied: pkginfo<2.0,>=1.10 in /usr/local/lib/python3.12/dist-packages (from poetry) (1.11.2)
Requirement already satisfied: platformdirs<5,>=3.0.0 in /usr/lib/python3/dist-packages (from poetry) (4.2.0)
Requirement already satisfied: poetry-core==1.9.1 in /usr/local/lib/python3.12/dist-packages (from poetry) (1.9.1)
Requirement already satisfied: poetry-plugin-export<2.0.0,>=1.6.0 in /usr/local/lib/python3.12/dist-packages (from poetry) (1.8.0)
Requirement already satisfied: pyproject-hooks<2.0.0,>=1.0.0 in /usr/local/lib/python3.12/dist-packages (from poetry) (1.2.0)
Requirement already satisfied: requests<3.0,>=2.26 in /usr/lib/python3/dist-packages (from poetry) (2.31.0)
Requirement already satisfied: requests-toolbelt<2.0.0,>=1.0.0 in /usr/local/lib/python3.12/dist-packages (from poetry) (1.0.0)
Requirement already satisfied: shellingham<2.0,>=1.5 in /usr/local/lib/python3.12/dist-packages (from poetry) (1.5.4)
Requirement already satisfied: tomlkit<1.0.0,>=0.11.4 in /usr/local/lib/python3.12/dist-packages (from poetry) (0.13.2)
Requirement already satisfied: trove-classifiers>=2022.5.19 in /usr/local/lib/python3.12/dist-packages (from poetry) (2024.10.21.16)
Requirement already satisfied: virtualenv<21.0.0,>=20.26.6 in /usr/local/lib/python3.12/dist-packages (from poetry) (20.28.0)
Requirement already satisfied: msgpack<2.0.0,>=0.5.2 in /usr/local/lib/python3.12/dist-packages (from cachecontrol<0.15.0,>=0.14.0->cachecontrol[filecache]<0.15.0,>=0.14.0->poetry) (1.1.0)
Requirement already satisfied: filelock>=3.8.0 in /usr/local/lib/python3.12/dist-packages (from cachecontrol[filecache]<0.15.0,>=0.14.0->poetry) (3.16.1)
Requirement already satisfied: rapidfuzz<4.0.0,>=3.0.0 in /usr/local/lib/python3.12/dist-packages (from cleo<3.0.0,>=2.1.0->poetry) (3.10.1)
Requirement already satisfied: urllib3>=1.25 in /usr/lib/python3/dist-packages (from dulwich<0.22.0,>=0.21.2->poetry) (2.0.7)
Requirement already satisfied: jaraco.classes in /usr/local/lib/python3.12/dist-packages (from keyring<25.0.0,>=24.0.0->poetry) (3.4.0)
Requirement already satisfied: SecretStorage>=3.2 in /usr/local/lib/python3.12/dist-packages (from keyring<25.0.0,>=24.0.0->poetry) (3.3.3)
Requirement already satisfied: jeepney>=0.4.2 in /usr/local/lib/python3.12/dist-packages (from keyring<25.0.0,>=24.0.0->poetry) (0.8.0)
Requirement already satisfied: distlib<1,>=0.3.7 in /usr/local/lib/python3.12/dist-packages (from virtualenv<21.0.0,>=20.26.6->poetry) (0.3.9)
Requirement already satisfied: cryptography>=2.0 in /usr/lib/python3/dist-packages (from SecretStorage>=3.2->keyring<25.0.0,>=24.0.0->poetry) (41.0.7)
Requirement already satisfied: more-itertools in /usr/local/lib/python3.12/dist-packages (from jaraco.classes->keyring<25.0.0,>=24.0.0->poetry) (10.5.0)
Installing collected packages: poetry
Successfully installed poetry-1.8.4
WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv

```

</details>

#### 安装真寻

##### 拉取最新代码

:::tip
如果你的网络环境较差，无法连接到 Github，可以使用 [GitHub Proxy](https://ghp.ci/) 提供的文件代理加速下载服务，国内服务器均推荐第二条命令
:::

`git clone https://github.com/HibiKier/zhenxun_bot.git`

`git clone https://ghp.ci/https://github.com/HibiKier/zhenxun_bot.git`

<details>
  <summary>点击查看详细输出</summary>

```shell
zhenxun@zhenxun:~$ git clone https://ghp.ci/https://github.com/HibiKier/zhenxun_bot.git
正克隆到 'zhenxun_bot'...
remote: Enumerating objects: 17145, done.
remote: Counting objects: 100% (1039/1039), done.
remote: Compressing objects: 100% (410/410), done.
remote: Total 17145 (delta 539), reused 917 (delta 444), pack-reused 16106 (from 1)
接收对象中: 100% (17145/17145), 294.74 MiB | 14.56 MiB/s, 完成.
处理 delta 中: 100% (9487/9487), 完成.
正在更新文件: 100% (540/540), 完成.
```

</details>

##### 安装依赖

###### 进入项目目录

`cd zhenxun_bot/`

###### 运行安装依赖命令

`poetry install`

<details>
  <summary>点击查看详细输出</summary>

```shell
zhenxun@zhenxun:~$ cd zhenxun_bot/
zhenxun@zhenxun:~/zhenxun_bot$ poetry install
Warning: Found deprecated key 'default' or 'secondary' in pyproject.toml configuration for source ali. Please provide the key 'priority' instead. Accepted values are: 'default', 'primary', 'secondary', 'supplemental', 'explicit'.
Warning: Found deprecated priority 'default' for source 'ali' in pyproject.toml. You can achieve the same effect by changing the priority to 'primary' and putting the source first.
Creating virtualenv zhenxun-bot-jK_EF8Sg-py3.12 in /home/zhenxun/.cache/pypoetry/virtualenvs
Installing dependencies from lock file

Package operations: 150 installs, 0 updates, 0 removals

  - Installing idna (3.10)
  - Installing sniffio (1.3.1)
  - Installing typing-extensions (4.12.2)
  - Installing anyio (4.6.2.post1)
  - Installing mdurl (0.1.2)
  - Installing multidict (6.1.0)
  - Installing propcache (0.2.0)
  - Installing six (1.16.0)
  - Installing tarina (0.6.7)
  - Installing certifi (2024.8.30)
  - Installing chardet (5.2.0)
  - Installing charset-normalizer (3.4.0)
  - Installing click (8.1.7)
  - Installing exceptiongroup (1.2.2)
  - Installing h11 (0.14.0)
  - Installing httptools (0.6.4)
  - Installing loguru (0.7.2)
  - Installing markdown-it-py (3.0.0)
  - Installing markupsafe (3.0.2)
  - Installing nepattern (0.7.7)
  - Installing pycparser (2.22)
  - Installing pydantic (1.10.18)
  - Installing pygments (2.18.0)
  - Installing pygtrie (2.5.0)
  - Installing python-dateutil (2.9.0.post0)
  - Installing python-dotenv (1.0.1)
  - Installing pyyaml (6.0.2)
  - Installing starlette (0.41.3)
  - Installing text-unidecode (1.3)
  - Installing types-python-dateutil (2.9.0.20241003)
  - Installing urllib3 (2.2.3)
  - Installing uvloop (0.21.0)
  - Installing watchfiles (0.24.0)
  - Installing wcwidth (0.2.13)
  - Installing websockets (14.1)
  - Installing yarl (1.18.0)
  - Installing arclet-alconna (1.8.34)
  - Installing arrow (1.3.0)
  - Installing binaryornot (0.4.4)
  - Installing cffi (1.17.1)
  - Installing distlib (0.3.9)
  - Installing fastapi (0.115.5)
  - Installing filelock (3.16.1)
  - Installing frozenlist (1.5.0)
  - Installing greenlet (3.1.1)
  - Installing httpcore (0.16.3)
  - Installing iniconfig (2.0.0)
  - Installing jinja2 (3.1.4)
  - Installing markdown (3.7)
  - Installing nonebot2 (2.4.0)
  - Installing numpy (2.1.3)
  - Installing packaging (24.2)
  - Installing platformdirs (4.3.6)
  - Installing pluggy (1.5.0)
  - Installing prompt-toolkit (3.0.48)
  - Installing pyasn1 (0.6.1)
  - Installing pyee (12.0.0)
  - Installing python-slugify (8.0.4)
  - Installing requests (2.32.3)
  - Installing rfc3986 (1.5.0)
  - Installing rich (13.9.4)
  - Installing tzlocal (5.2)
  - Installing uvicorn (0.32.1)
  - Installing zipp (3.21.0)
  - Installing aiofiles (23.2.1)
  - Installing aiohappyeyeballs (2.4.3)
  - Installing aiosignal (1.3.1)
  - Installing aiosqlite (0.17.0)
  - Installing apscheduler (3.11.0)
  - Installing arclet-alconna-tools (0.7.10)
  - Installing asgiref (3.8.1)
  - Installing async-asgi-testclient (1.4.11)
  - Installing asyncpg (0.30.0)
  - Installing attrs (24.2.0)
  - Installing cachetools (5.5.0)
  - Installing cashews (7.4.0)
  - Installing cookiecutter (2.6.0)
  - Installing coverage (7.6.8)
  - Installing cryptography (44.0.0)
  - Installing ecdsa (0.19.0)
  - Installing emoji (2.14.0)
  - Installing execnet (2.1.1)
  - Installing grpcio (1.68.0)
  - Installing httpx (0.23.3)
  - Installing importlib-metadata (8.5.0)
  - Installing iso8601 (1.1.0)
  - Installing msgpack (1.1.0)
  - Installing mypy-extensions (1.0.0)
  - Installing nonebot-plugin-waiter (0.8.0)
  - Installing noneprompt (0.1.9)
  - Installing pathspec (0.12.1)
  - Installing pillow (10.4.0)
  - Installing playwright (1.49.0)
  - Installing proces (0.1.7)
  - Installing protobuf (4.25.5)
  - Installing pyfiglet (1.0.2)
  - Installing pymdown-extensions (10.12)
  - Installing pypika-tortoise (0.1.6)
  - Installing pytest (8.3.3)
  - Installing python-markdown-math (0.8)
  - Installing pytz (2024.2)
  - Installing pywavelets (1.7.0)
  - Installing regex (2024.11.6)
  - Installing rsa (4.9)
  - Installing ruamel-yaml-clib (0.2.12)
  - Installing scipy (1.14.1)
  - Installing setuptools (75.6.0)
  - Installing sgmllib3k (1.0.0)
  - Installing soupsieve (2.6)
  - Installing strenum (0.4.15)
  - Installing tomlkit (0.13.2)
  - Installing virtualenv (20.28.0)
  - Installing aiocache (0.12.3)
  - Installing aiohttp (3.11.8)
  - Installing beautifulsoup4 (4.12.3)
  - Installing bilireq (0.2.3.post0)
  - Installing black (24.10.0)
  - Installing cattrs (23.2.3)
  - Installing cn2an (0.5.22)
  - Installing dateparser (1.2.0)
  - Installing imagehash (4.3.1)
  - Installing feedparser (6.0.11)
  - Installing lxml (5.3.0)
  - Installing nb-cli (1.4.2)
  - Installing nonebot-adapter-discord (0.1.8)
  - Installing nonebot-adapter-dodo (0.1.4)
  - Installing nonebot-adapter-kaiheila (0.3.4)
  - Installing nonebot-adapter-onebot (2.4.6)
  - Installing nonebot-plugin-alconna (0.53.1)
  - Installing nonebot-plugin-apscheduler (0.3.0)
  - Installing nonebot-plugin-htmlrender (0.3.5)
  - Installing nonebot-plugin-session (0.2.3)
  - Installing nonebot-plugin-uninfo (0.4.1)
  - Installing nonebot-plugin-userinfo (0.1.3)
  - Installing nonebug (0.3.7)
  - Installing opencv-python (4.10.0.84)
  - Installing psutil (5.9.8)
  - Installing pypinyin (0.51.0)
  - Installing py-cpuinfo (9.0.0)
  - Installing pytest-asyncio (0.23.8)
  - Installing pytest-cov (5.0.0)
  - Installing pytest-mock (3.14.0)
  - Installing pytest-xdist (3.6.1)
  - Installing python-jose (3.3.0)
  - Installing python-multipart (0.0.9)
  - Installing respx (0.21.1)
  - Installing retrying (1.3.4)
  - Installing ruamel-yaml (0.18.6)
  - Installing tortoise-orm (0.20.0)
  - Installing ujson (5.10.0)
Warning: Validation of the RECORD file of playwright-1.49.0-py3-none-manylinux1_x86_64.whl failed. Please report to the maintainers of that package so they can fix their build process. Details:
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/LICENSE is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/node is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/package/package.json is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/package/cli.js is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/package/browsers.json is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/package/api.json is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/package/index.mjs is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/package/index.d.ts is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/package/README.md is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/package/LICENSE is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/package/NOTICE is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/package/index.js is not mentioned in RECORD
In /home/zhenxun/.cache/pypoetry/artifacts/19/6f/d4/e408c18242c36038a71ebe1dccde7a5bed56a2a0915d4f40efa5d26967/playwright-1.49.0-py3-none-manylinux1_x86_64.whl, playwright/driver/package/ThirdPartyNotices.txt is not mentioned in RECORD
**************************************************

```

</details>

:::tip
下载依赖途中如遇报错，请删除目录下的 `poetry.lock` 文件后重新运行命令
:::

###### 手动安装playwright

`poetry run playwright install`

<details>
  <summary>点击查看详细输出</summary>

```shell
zhenxun@zhenxun:~/zhenxun_bot$ poetry run playwright install
Warning: Found deprecated key 'default' or 'secondary' in pyproject.toml configuration for source ali. Please provide the key 'priority' instead. Accepted values are: 'default', 'primary', 'secondary', 'supplemental', 'explicit'.
Warning: Found deprecated priority 'default' for source 'ali' in pyproject.toml. You can achieve the same effect by changing the priority to 'primary' and putting the source first.
Downloading Chromium 131.0.6778.33 (playwright build v1148) from https://playwright.azureedge.net/builds/chromium/1148/chromium-linux.zip
161.3 MiB [====================] 100% 0.0s
Chromium 131.0.6778.33 (playwright build v1148) downloaded to /home/zhenxun/.cache/ms-playwright/chromium-1148
Downloading Chromium Headless Shell 131.0.6778.33 (playwright build v1148) from https://playwright.azureedge.net/builds/chromium/1148/chromium-headless-shell-linux.zip
100.9 MiB [====================] 100% 0.0s
Chromium Headless Shell 131.0.6778.33 (playwright build v1148) downloaded to /home/zhenxun/.cache/ms-playwright/chromium_headless_shell-1148
Downloading Firefox 132.0 (playwright build v1466) from https://playwright.azureedge.net/builds/firefox/1466/firefox-ubuntu-24.04.zip
87.6 MiB [====================] 100% 0.0s
Firefox 132.0 (playwright build v1466) downloaded to /home/zhenxun/.cache/ms-playwright/firefox-1466
Downloading Webkit 18.2 (playwright build v2104) from https://playwright.azureedge.net/builds/webkit/2104/webkit-ubuntu-24.04.zip
94.9 MiB [====================] 100% 0.0s
Webkit 18.2 (playwright build v2104) downloaded to /home/zhenxun/.cache/ms-playwright/webkit-2104
Downloading FFMPEG playwright build v1010 from https://playwright.azureedge.net/builds/ffmpeg/1010/ffmpeg-linux.zip
2.3 MiB [====================] 100% 0.0s
FFMPEG playwright build v1010 downloaded to /home/zhenxun/.cache/ms-playwright/ffmpeg-1010
```

</details>

#### 配置真寻

##### 数据库配置

:::tip
本教程使用的为sqlite，真寻支持postgresql sqlite mysql三种数据库，小白只推荐使用sqlite（文件型数据库，好迁移不用安装）
:::

###### 进入项目目录后运行

`mkdir data/db`

```shell
zhenxun@zhenxun:~/zhenxun_bot$ mkdir data/db
zhenxun@zhenxun:~/zhenxun_bot$
```

###### 修改配置文件`.env.dev`

```python title="env.dev"
DB_URL = "sqlite:data/db/zhenxun.db"
```

:::tip
修改配置文件可以使用连接工具里自带的文件管理功能，也可以用 vi、nano、vim、emacs 编辑器命令修改
:::

##### vi编辑器命令修改演示

<details>
  <summary>点击查看</summary>

![_](/img/install/install_xiaobai/vi_config.gif)

</details>

##### 其余配置

###### 其中 `123456789` 为超级用户（主人）qq号请自行修改

```python title="env.dev"
SUPERUSERS=["123456789"]

COMMAND_START=[""]

SESSION_RUNNING_EXPRESSION="别急呀,小真寻要宕机了!QAQ"

NICKNAME=["真寻", "小真寻", "绪山真寻", "小寻子"]

SESSION_EXPIRE_TIMEOUT=30

ALCONNA_USE_COMMAND_START=True

# 全局图片统一使用bytes发送，当真寻与协议端不在同一服务器上时为True
IMAGE_TO_BYTES = True

# 回复消息时自称
SELF_NICKNAME="小真寻"

# 官bot appid:bot账号
QBOT_ID_DATA = '{

}'

# 数据库配置
# 示例: "postgres://user:password@127.0.0.1:5432/database"
# 示例: "mysql://user:password@127.0.0.1:3306/database"
# 示例: "sqlite:data/db/zhenxun.db"   在data目录下建立db文件夹
DB_URL = "sqlite:data/db/zhenxun.db"

# 系统代理
# SYSTEM_PROXY = "http://127.0.0.1:7890"

PLATFORM_SUPERUSERS = '
  {
    "qq": ["123456789"],
    "dodo": [""]
  }
'

DRIVER=~fastapi+~httpx+~websockets


# LOG_LEVEL=DEBUG
# 服务器和端口
HOST = 127.0.0.1
PORT = 8080
```

#### 运行真寻

`poetry run python bot.py`

<details>
  <summary>点击查看详细输出</summary>

```python
zhenxun@zhenxun:~/zhenxun_bot$ poetry run python bot.py
Warning: Found deprecated key 'default' or 'secondary' in pyproject.toml configuration for source ali. Please provide the key 'priority' instead. Accepted values are: 'default', 'primary', 'secondary', 'supplemental', 'explicit'.
Warning: Found deprecated priority 'default' for source 'ali' in pyproject.toml. You can achieve the same effect by changing the priority to 'primary' and putting the source first.
11-29 20:14:07 [SUCCESS] nonebot | NoneBot is initializing...
11-29 20:14:07 [INFO] nonebot | Current Env: dev
11-29 20:14:08 [SUCCESS] nonebot | Succeeded to load plugin "nonebot_plugin_session"
11-29 20:14:08 [SUCCESS] nonebot | Succeeded to load plugin "nonebot_plugin_apscheduler"
11-29 20:14:08 [SUCCESS] nonebot | Succeeded to load plugin "nonebot_plugin_alconna:uniseg" from "nonebot_plugin_alconna.uniseg"
11-29 20:14:08 [SUCCESS] nonebot | Succeeded to load plugin "nonebot_plugin_alconna"
11-29 20:14:08 [SUCCESS] nonebot | Succeeded to load plugin "nonebot_plugin_userinfo"
11-29 20:14:08 [SUCCESS] nonebot | Succeeded to load plugin "nonebot_plugin_htmlrender"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "sign_in" from "zhenxun.builtin_plugins.sign_in"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "catchphrase" from "zhenxun.builtin_plugins.catchphrase"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "record_request" from "zhenxun.builtin_plugins.record_request"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "scheduler:morning" from "zhenxun.builtin_plugins.scheduler.morning"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "scheduler:auto_update_group" from "zhenxun.builtin_plugins.scheduler.auto_update_group"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "scheduler:chat_check" from "zhenxun.builtin_plugins.scheduler.chat_check"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "scheduler:auto_backup" from "zhenxun.builtin_plugins.scheduler.auto_backup"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "scheduler" from "zhenxun.builtin_plugins.scheduler"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "hooks:chkdsk_hook" from "zhenxun.builtin_plugins.hooks.chkdsk_hook"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "hooks:call_hook" from "zhenxun.builtin_plugins.hooks.call_hook"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "hooks:withdraw_hook" from "zhenxun.builtin_plugins.hooks.withdraw_hook"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "hooks:ban_hook" from "zhenxun.builtin_plugins.hooks.ban_hook"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "hooks:auth_hook" from "zhenxun.builtin_plugins.hooks.auth_hook"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "hooks" from "zhenxun.builtin_plugins.hooks"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "info" from "zhenxun.builtin_plugins.info"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "scripts" from "zhenxun.builtin_plugins.scripts"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "plugin_store" from "zhenxun.builtin_plugins.plugin_store"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "web_ui" from "zhenxun.builtin_plugins.web_ui"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "platform:group_handle" from "zhenxun.builtin_plugins.platform.qq.group_handle"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "platform:exception" from "zhenxun.builtin_plugins.platform.qq.exception"
11-29 20:14:09 [WARNING] zhenxun | 未安装 qq-adapter，无法加载QQ官平台专用插件...
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "platform" from "zhenxun.builtin_plugins.platform"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "plugin_store" from "zhenxun.builtin_plugins.plugin_store"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "statistics:statistics_handle" from "zhenxun.builtin_plugins.statistics.statistics_handle"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "statistics:statistics_hook" from "zhenxun.builtin_plugins.statistics.statistics_hook"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "statistics" from "zhenxun.builtin_plugins.statistics"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "help" from "zhenxun.builtin_plugins.help"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "admin:ban" from "zhenxun.builtin_plugins.admin.ban"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "admin:group_update" from "zhenxun.builtin_plugins.admin.group_update"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "admin:plugin_switch" from "zhenxun.builtin_plugins.admin.plugin_switch"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "admin:admin_watch" from "zhenxun.builtin_plugins.admin.admin_watch"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "admin:admin_help" from "zhenxun.builtin_plugins.admin.admin_help"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "admin:welcome_message" from "zhenxun.builtin_plugins.admin.welcome_message"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "admin:group_member_update" from "zhenxun.builtin_plugins.admin.group_member_update"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "admin" from "zhenxun.builtin_plugins.admin"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "auto_update" from "zhenxun.builtin_plugins.auto_update"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "nickname" from "zhenxun.builtin_plugins.nickname"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "chat_history:chat_message" from "zhenxun.builtin_plugins.chat_history.chat_message"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "chat_history:chat_message_handle" from "zhenxun.builtin_plugins.chat_history.chat_message_handle"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "chat_history" from "zhenxun.builtin_plugins.chat_history"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "check" from "zhenxun.builtin_plugins.check"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "shop" from "zhenxun.builtin_plugins.shop"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "about" from "zhenxun.builtin_plugins.about"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "withdraw" from "zhenxun.builtin_plugins.withdraw"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "restart" from "zhenxun.builtin_plugins.restart"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "init:manager" from "zhenxun.builtin_plugins.init.manager"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "init:init_plugin" from "zhenxun.builtin_plugins.init.init_plugin"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "init:init_config" from "zhenxun.builtin_plugins.init.init_config"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "init" from "zhenxun.builtin_plugins.init"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "help_help" from "zhenxun.builtin_plugins.help_help"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser:broadcast" from "zhenxun.builtin_plugins.superuser.broadcast"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser:clear_data" from "zhenxun.builtin_plugins.superuser.clear_data"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser:exec_sql" from "zhenxun.builtin_plugins.superuser.exec_sql"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser:update_fg_info" from "zhenxun.builtin_plugins.superuser.update_fg_info"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser:reload_setting" from "zhenxun.builtin_plugins.superuser.reload_setting"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser:group_manage" from "zhenxun.builtin_plugins.superuser.group_manage"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser:fg_manage" from "zhenxun.builtin_plugins.superuser.fg_manage"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser:super_help" from "zhenxun.builtin_plugins.superuser.super_help"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser:bot_manage" from "zhenxun.builtin_plugins.superuser.bot_manage"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser:request_manage" from "zhenxun.builtin_plugins.superuser.request_manage"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser:set_admin" from "zhenxun.builtin_plugins.superuser.set_admin"
11-29 20:14:09 [SUCCESS] nonebot | Succeeded to load plugin "superuser" from "zhenxun.builtin_plugins.superuser"
11-29 20:14:09 [SUCCESS] nonebot | Running NoneBot...
11-29 20:14:09 [INFO] uvicorn | Started server process [249867]
11-29 20:14:09 [INFO] uvicorn | Waiting for application startup.
11-29 20:14:09 [INFO] zhenxun | Database loaded successfully!
11-29 20:14:09 [INFO] nonebot_plugin_apscheduler | Scheduler Started
11-29 20:14:10 [INFO] nonebot_plugin_htmlrender | 使用 chromium 启动
11-29 20:14:10 [INFO] nonebot_plugin_htmlrender | Browser Started.
11-29 20:14:10 [WARNING] zhenxun | 数据迁移 || 错误<class 'tortoise.exceptions.OperationalError'>: near "on": syntax error
/home/zhenxun/zhenxun_bot/zhenxun/builtin_plugins/scripts.py:44: RuntimeWarning: coroutine '_make_delegate_method.<locals>.method' was never awaited
  json.dump(data, f, indent=4, ensure_ascii=False)
RuntimeWarning: Enable tracemalloc to get the object allocation traceback
11-29 20:14:24 [INFO] zhenxun | 自动更新城市列表完成.....
11-29 20:14:29 [INFO] zhenxun | 下载 https://github.com/HibiKier/zhenxun_bot_webui/archive/refs/heads/dist.zip 成功.. Path：/home/zhenxun/zhenxun_bot/resources/temp/web_ui/webui_assets.zip
11-29 20:14:29 [INFO] zhenxun | CMD[WebUI资源管理] 下载 webui_assets 成功...
11-29 20:14:29 [INFO] zhenxun | CMD[Web UI] API启动成功
11-29 20:14:29 [INFO] zhenxun | 已经加载 2 个插件限制.
11-29 20:14:29 [INFO] uvicorn | Application startup complete.
11-29 20:14:29 [INFO] uvicorn | Uvicorn running on http://127.0.0.1:8080 (Press CTRL+C to quit)
^C11-29 20:14:34 [INFO] uvicorn | Shutting down
11-29 20:14:34 [INFO] uvicorn | Waiting for application shutdown.
11-29 20:14:34 [INFO] nonebot_plugin_htmlrender | Browser Stopped.
11-29 20:14:34 [INFO] nonebot_plugin_apscheduler | Scheduler Shutdown
11-29 20:14:34 [INFO] uvicorn | Application shutdown complete.
11-29 20:14:34 [INFO] uvicorn | Finished server process [249867]

```

</details>
