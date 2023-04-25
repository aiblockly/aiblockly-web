# aiblockly-web
AIBlockly教育套件网页程序源码
![屏幕截图 2023-04-21 102954](https://user-images.githubusercontent.com/39751846/233526790-ce963113-91ed-46bd-b04b-38f7a96dbbd6.png)


介于仪酷智块树莓派教育套件已经进入官方支持的末尾阶段（2023年7月停止仪酷智能科技有限公司官方支持），故陆续将其不涉及到专有许可部分的代码开源

需要注意的是 开源版本仅面向个人和教育用途，如果需要用于商业产品 请联系admin@aiblockly.com

基底系统基于树莓派官方的RASPBIAN

## 环境安装
首先 您需要安装redis 和python3-pip 推荐安装python3-venv

```bash
sudo apt update
sudo apt install -y redis-server python3-pip
sudo apt install -y  python3-venv ##Optional
```

建议使用venv来管理环境

```bash
mkdir /起名字什么的/最讨厌啦/ #改成你自己的路径 (请注意权限 权限不够就加sudo）
cd /起名字什么的/最讨厌啦/
git clone https://github.com/aiblockly/aiblockly-web
python3 -m venv venv #需要虚拟环境部署
source venv/bin/activa
pip3 install flask flask-Caching redis
```
## 快速运行
```bash 
cd aiblockly-web
python3 app.py
```
随后访问板子的5000端口即可

## 完全部署（利用uwsgi+nginx)
```bash
sudo apt install nginx-full
pip3 install uwsgi
```
在你觉得合适的位置新建一个ini文件，并用文本编辑器打开，输一下内容
```ini
[uwsgi]
#改成你自己的路径，只能是绝对路径
chdir=/起名字什么的/最讨厌啦/aiblockly-web/app
home=/起名字什么的/最讨厌啦/aiblockly-web/venv
module=app
callable=app
master=true
processes=4
socket=/run/blockly.sock
chmod-socket=666
logfile-chmod=644
daemonize=/tmp/uwsgi.log
uid=root
gid=root
procname-prefix-spaced=mysite
pidfile=/run/blockly-signal.pid
#disable-logging=true
wsgi-disable-file-wrapper = true

die-on-term = true
vacuum = true
```
再新建一个blockly.service
```ini
[Unit]
Description=BlocklyApp server by uWSGI
After=network.service syslog.target

[Service]
#
ExecStart=/起名字什么的/最讨厌啦/aiblockly-web/venv/bin/uwsgi --ini 你的ini绝对路径.ini
ExecStop=/起名字什么的/最讨厌啦/aiblockly-web/venv/bin/uwsgi --stop /run/blockly-signal.pid
ExecReload=/起名字什么的/最讨厌啦/aiblockly-web/venv/bin/uwsgi --reload /run/blockly-signal.pid
RemainAfterExit=yes
Type=oneshot
User=root

[Install]
WantedBy=multi-user.target
```
复制service文件到/etc/systemd/system文件夹执行`sudo systemdctl enable blockly.service`

添加nginx server到nginx的server字段
```
server {
    listen 80;
    charset utf-8;

    client_max_body_size 5M;

    location /static  {
		  include  /etc/nginx/mime.types;
		  alias /起名字什么的/最讨厌啦/aiblockly-web/app/static;
    }
    
    
	
	location / {
         include uwsgi_params;
         uwsgi_pass unix:/run/blockly.sock;
     }
	 
	
}
```
重新启动 访问ip地址即可查看界面

## 插件编写
TODO
