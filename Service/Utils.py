import os, glob
from functools import wraps
from flask import make_response
from CONFIG import Config

c=Config()
print(c.plugin_dir)
def RetImageResp():
    image = None
    path = "/tmp/ajax-cam.jpg"
    if not os.path.exists(path):
        return None
    with open(path, "rb")as f:
        image = f.read()
    resp = make_response(image)
    resp.headers['Content-Type'] = 'image/jpeg'
    os.remove(path)
    #os.system("rm " + path)
    return resp


def check():
    return os.path.exists("/tmp/ajax-cam.jpg")


def crsf_response(timeout=21600):
    def decorate(fun):
        @wraps(fun)
        def wrapper(*args, **kwargs):
            resp = fun(*args, **kwargs)
            resp.headers['Access-Control-Allow-Origin'] = '*'
            resp.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE'
            resp.headers['Access-Control-Max-Age'] = str(timeout)
            return resp

        return wrapper

    return decorate


def no_cache():
    def decorate(fun):
        @wraps(fun)
        def wrapper(*args, **kwargs):
            resp = fun(*args, **kwargs)
            resp.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
            resp.headers["Pragma"] = "no-cache"
            resp.headers["Expires"] = "0"
            return resp

        return wrapper

    return decorate

def plugin_loader():
    script=""
    xml=""
    plugin_dir = c.plugin_dir
    if not os.path.isdir(plugin_dir):
        os.system("mkdir -p %s"%plugin_dir)
        os.system("chown pi -R %s"%plugin_dir)
    for i in glob.glob(os.path.join(plugin_dir,"*")):
        print(i)
        if os.path.isdir(i):
            for js_file in glob.glob(os.path.join(i,"*.js")):
                print(js_file)
                with open(file=js_file,mode="r")as f:
                    script=script+f.read()
            for xml_file in glob.glob(os.path.join(i,"*.xml")):
                with open(file=xml_file,mode="r")as f:
                    xml=xml+f.read()
    return script,xml

