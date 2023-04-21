import os,signal
import subprocess
import CONFIG
from multiprocessing import Process
PATH="/home/pi/autoload.py"
import urllib.request
def internet_on():
    try:
        urllib.request.urlopen('http://www.baidu.com', timeout=1)
        return True
    except urllib.request.URLError as err:
        return False


def fuck_the_hacker():
    try:
        import base64
        EXCAPP_VERSION = os.popen("pip3 freeze | grep excapp==").read().replace("excapp==", "").replace("\n", "")
        import json
        import urllib.request
        import urllib.parse
        url = 'https://dl.cn.aiblockly.com/sum/excapp_chksum.json'
        f = urllib.request.urlopen(url,timeout=2)
        metas = json.loads(f.read().decode('utf-8'))
        for meta in metas:
            if meta["version"] == EXCAPP_VERSION:
                for file in meta["HASH"]:
                    h = os.popen("cat TEMPLATE | openssl dgst -sha256".replace("TEMPLATE", file["path"])).read().replace(
                        "(stdin)= ", "").replace("\n", "")
                    sha256 = base64.b64encode(bytes.fromhex(h)).decode().replace("+", "-").replace("/", "_")[:-1]
                    if sha256 != file["sha256"]:
                        os.system("pip3 uninstall excapp -y")
                        os.chdir("/tmp")
                        os.system(
                            "wget -O excapp-" + EXCAPP_VERSION + "-py3-none-linux_armv7l.whl  http://dl.cn.aiblockly.com/whl/excapp-" + EXCAPP_VERSION + "-py3-none-linux_armv7l.whl ")
                        os.system("pip3 install excapp-" + EXCAPP_VERSION + "-py3-none-linux_armv7l.whl")
                        os.system("rm excapp*.whl")
                        break
                break
    except Exception as e:
        pass

def execute(cache):
    if cache.get("a_lock"):
        return
    else:
        cache.set("a_lock",True)
    ps = Process(target=fuck_the_hacker)
    ps.start()
    if os.path.exists(PATH):
        return
        with open(PATH+".log",mode="wb")as fe:
            with open(PATH,mode="rb")as f:
                fr=f.read()
                print(fr.decode())
            with open(PATH+".out",mode="wb")as fo:
                p = subprocess.Popen("/usr/bin/python3", stderr=fe, stdout=fo,
                             stdin=subprocess.PIPE, shell=True, close_fds=True, preexec_fn=os.setsid,cwd="/tmp/")
                p.stdin.write(fr)
                p.stdin.flush()
                p.stdin.close()
            with open(PATH+".pid",mode="w")as f:
                f.write(str(p.pid))

def load(py):
    with open(PATH , mode="wb")as f:
        print(py)
        if isinstance(py,str):
            b=py.encode()
        elif isinstance(py,bytes):
            b=py
        else:
            raise AttributeError("Bytes or String")
        fr = b"""
import urllib.request
def internet_on():
    try:
        urllib.request.urlopen('http://www.baidu.com', timeout=1)
        return True
    except urllib.request.URLError as err:
        return False
for i in range(20):
    if internet_on():
        break
                """
        f.write(fr+b"\n"+b)

def unload():
    if os.path.exists(PATH):
        os.remove(PATH)

def terminate():
    with open(PATH + ".pid", mode="r")as f:
        pid=int(f.read())
        os.killpg(os.getpgid(pid), signal.SIGTERM)