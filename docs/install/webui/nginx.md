---
title: NGINX安装
subSidebar: false
id: install-webui-nginx
---

WebUI安装
===

:::tip
这一步并不是必须的！只是为了可视化方便管理  
别忘了打开服务器端口，默认是8081，修改端口在vue.config.js文件中！
:::

开始安装
---

### 1.安装ngnix

```bash
sudo apt update
sudo apt install nginx
```

### 2.下载文件

点击 [此处](https://mirror.ghproxy.com/https://github.com/HibiKier/zhenxun_bot_webui/archive/refs/heads/dist.zip) 下载dist文件夹  
将文件夹解压后把其中的`dist`文件夹放入 `/var/www/html`或`/usr/share/nginx` 下

### 3.修改配置文件

在`/etc/nginx/` 目录下新建 `hosts` 目录  
在`/etc/nginx/` 目录下打开nginx.conf文件

```
vim nginx.conf

# 在http中最后添加 include /etc/nginx/hosts/*.host;

http {
  ...

  include /etc/nginx/hosts/*.host;
}
```

打开`/etc/nginx/hosts` 目录下新建 `server0.host`文件

``` title="server0.host"
upstream backend {
    server localhost:11451;     # 真寻的端口号
    keepalive 64;
}

map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}

server {
        listen       9999;             #自己设置的webui端口号
        server_name  localhost;        #自己设置ip地址
        #access_log  logs/host.access.log  main;
        location / {
            root   /usr/share/nginx/dist;        #这里写vue项目打包好的dist文件的地址，真寻前端文件
            index  index.html;               #这里是vue项目的首页，需要保证dist中有index.html文件
            try_files $uri $uri/ =404;
             error_page 405 =200  $request_uri;
        }
        location @router {
   rewrite ^.*$ /index.html last;            #解决重新刷新页面，页面空白的问题
  }

        add_header backendCode $upstream_status;
        add_header BackendIP "$upstream_addr;" always;
        location /zhenxun/api/ {
            proxy_pass http://localhost:11451/zhenxun/api/;     #自己设置的api地址
        }
        location /zhenxun/socket/ {
            proxy_pass http://backend;  
        # 请求服务器升级协议为 WebSocket
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        
        # 设置读写超时时间，默认 60s 无数据连接将会断开
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;

        # Host 主机名
        proxy_set_header Host $host;
        # X-Real-IP 将真实访问者的远端 IP 地址转发给代理服务器
        proxy_set_header X-Real-IP $remote_addr;
        # X-Forwarded-For 标记客户端通过代理连接到服务器的源 IP
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        # X-Forwarded-Host 标记客户端通过代理连接到服务器的原始主机
        proxy_set_header X-Forwarded-Host $host:$server_port;
        # X-Forwarded-Server 代理服务器的主机名
        proxy_set_header X-Forwarded-Server $host;
        # X-Forwarded-Port 定义客户端请求的原始端口
        proxy_set_header X-Forwarded-Port $server_port;
        # X-Forwarded-Proto 标记客户端通过代理连接到服务器的协议
        proxy_set_header X-Forwarded-Proto $scheme;
        # proxy_set_header X-Forwarded-Proto $proxy_x_forwarded_proto;

        }
        error_page   500 502 503 504  /50x.html;#错误页面
}
```

### 4.重启nginx

```bash
sudo systemctl restart nginx
```

### 5.配置账号密码

在`data/config.yaml`文件中配置项设置账号密码

```yaml
web-ui:
  # web-ui
  # USERNAME: 前端管理用户名
  # PASSWORD: 前端管理密码
  USERNAME: admin
  PASSWORD: 
```

:::warning
必须要设置账号密码，否则无法登陆！
:::
