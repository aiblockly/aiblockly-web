# aiblockly-web
AIBlockly教育套件网页程序源码
![屏幕截图 2023-04-21 102954](https://user-images.githubusercontent.com/39751846/233526790-ce963113-91ed-46bd-b04b-38f7a96dbbd6.png)


介于仪酷智块树莓派教育套件已经进入官方支持的末尾阶段（2023年7月停止官方支持），故陆续将其不涉及到专有许可部分的代码开源

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
sudo apt install -y redis-server python3-pip
sudo apt install -y  python3-venv ##Optional
```
