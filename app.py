from flask import Flask, render_template, request, Response, jsonify, send_file,make_response
from flask_caching import Cache
import subprocess, io, os,shutil,time
from Service import Toolbar, Network,Utils,Autoload
import CONFIG
import signal
c=CONFIG.Config()
app = Flask(__name__)
cache = Cache(app, config={'CACHE_TYPE': 'redis',  # Use Redis
                           'CACHE_REDIS_HOST': '127.0.0.1',  # Host, default 'localhost'
                           'CACHE_REDIS_PORT': 6379,  # Port, default 6379
                           'CACHE_REDIS_DB': 1})
Autoload.execute(cache)
@app.route('/')
def index():
    ip = Network.get_host_ip()
    template="index_zh_cn.html"
    resp= make_response(render_template(template, ip=ip,))
    #resp.set_cookie("lang",lang)
    return resp


@app.route("/dynamicjs/toolbar")
def toolbar():
    lang = request.cookies.get("lang")
    if lang not in ["zh_tw", "en_us"]:
        lang = "zh_cn"
    return Toolbar.GetToolbar(lang=lang)


@app.route("/run", methods=['POST'])
@Utils.crsf_response()
def runPython():
    if cache.get("lock"):
        err = "\n" + "Warns and Errors:\n" + "已经有进程在执行了，请等待结束"
        resp = jsonify({"msg": "执行完成", "data": err, "code": "200", "PID": -1})
        return resp
    os.system("rm " + "/tmp/ajax*.jpg")
    os.system("service serialserver stop")
    code = str(request.values.get(key="code"))
    code = code.replace("libmsc.so", c.iflytek_libs)
    code = "import os \nos.chdir(os.path.expanduser('~'))\n" + code
    reqid = str(request.values.get(key="reqid"))
    code.replace("\r", "\n")
    cache.clear()
    cache.set("lock",True,timeout=300)
    cache.set(reqid, "", timeout=300)
    p = subprocess.Popen(c.python3_exec, stderr=subprocess.PIPE, stdout=subprocess.PIPE,
                         stdin=subprocess.PIPE, shell=True,close_fds=True, preexec_fn = os.setsid)
    pid=p.pid
    cache.set("PID"+reqid,pid)
    p.stdin.write(code.encode())
    p.stdin.flush()
    p.stdin.close()
    pipe_out = p.stdout
    str_ret = ""
    start=time.time()
    while True:
        if time.time()-start>300:
            os.killpg(os.getpgid(pid), signal.SIGTERM)
            break
        line = pipe_out.readline()
        if line:
            if None is cache.get(reqid):
                str_ret = line.decode()
            else:
                str_ret = str(cache.get(reqid)) + line.decode()
            print(line.decode())
            cache.set(reqid, str_ret, timeout=300)
        else:
            pipe_out.close()
            break
    err = p.stderr.read().decode()
    cache.set("lock", False, timeout=300)
    if len(err) > 0:
        err = "\n" + "Warns and Errors:\n" + err
    str_ret = str_ret + err
    resp = jsonify({"msg": "执行完成", "data": str_ret, "code": "200","PID":pid})
    cache.delete(reqid)
    cache.delete("PID"+reqid)
    os.system("service serialserver start")
    return resp

@app.route("/kill", methods=['POST'])
@Utils.crsf_response()
def kill():
    reqid = str(request.values.get(key="reqid"))
    pid=int(cache.get("PID"+reqid))
    os.killpg(os.getpgid(pid),signal.SIGTERM)
    return jsonify({"data":True,"code":200,"PID":pid})


@app.route("/ret")
@Utils.crsf_response(timeout=21600)
def GetResult():
    reqid = str(request.values.get(key="reqid"))
    pid = cache.get("PID" + reqid)
    if None is not cache.get(reqid):
        ret = {"msg": "执行中", "data": str(cache.get(reqid)), "code": "200","PID":pid}
    else:
        ret = {"msg": "无效请求", "data": False, "code": "200"}
    return jsonify(ret)


@app.route("/export/code", methods=["POST"])
def exportcode():
    code = str(request.values.get(key="code"))
    code=code.replace("libmsc.so", c.iflytek_libs)
    return send_file(io.BytesIO(code.encode()), as_attachment=True, attachment_filename="run.py")


@app.route("/import/workspace", methods=["POST"])
def returnDom():
    file = request.files['file']
    return jsonify({"data": file.read().decode()})


@app.route("/export/workspace", methods=["POST"])
def returnxmlfile():
    xml = str(request.values.get("xml"))
    return send_file(io.BytesIO(xml.encode()), attachment_filename="workspace.xml", as_attachment=True)




@app.route("/result/check", methods=["POST"])
@Utils.crsf_response()
def check():
    return jsonify({"data": Utils.check()})


# def gen(camera):
#     cache.set("camEN",True)
#     while bool(cache.get("camEN")):
#         frame = camera.get_frame()
#         yield (b'--frame\r\n'
#                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
#
# @app.route('/video_feed')
# def video_feed():
#     return Response(gen(Cam.VideoCamera()),
#                     mimetype='multipart/x-mixed-replace; boundary=frame')
@app.route("/showret")
def showret():
    return render_template("showimage/capture.html")

@app.route("/poweroff", methods=["POST"])
def shutdown():
    os.system("poweroff")
    return ""

@app.route("/script/plugin.js")
def script():
    s,_=Utils.plugin_loader()
    resp = make_response(s)
    resp.headers['Content-Type'] = 'application/javascript'
    return resp

@app.route("/reboot", methods=["POST"])
def reboot():
    os.system("reboot")
    return ""

@app.route("/result/img")
def retimg():
    return Utils.RetImageResp()

@app.route("/setautoload",methods=["POST"])
@Utils.crsf_response()
def set_autoload():
    code = str(request.values.get(key="code"))
    code = code.replace("libmsc.so", c.iflytek_libs)
    try:
        Autoload.load(py=code)
        return jsonify({"msg": "OK", "data": True, "code": "200"})
    except Exception as e:
        return jsonify({"msg": "Fail", "data": False, "code": "500"})

@app.route("/delautoload",methods=["POST"])
@Utils.crsf_response()
def del_autoload():
    Autoload.unload()
    return jsonify({"msg": "OK", "data": True, "code": "200"})

@app.route("/terautoload",methods=["POST"])
@Utils.crsf_response()
def ter_autoload():
    Autoload.terminate()
    return jsonify({"msg": "OK", "data": True, "code": "200"})

@app.route("/tfs",methods=["POST"])
@Utils.crsf_response()
def tfs():
    opt=str(request.values.get(key="opt"))
    if opt=="start":
        os.system("up_tf_server")
        return jsonify({"msg": "OK", "data": True, "code": "200"})
    elif opt=="stop":
        os.system("down_tf_server")
        return jsonify({"msg": "OK", "data": True, "code": "200"})
    elif opt=="restart":
        os.system("down_tf_server")
        os.system("up_tf_server")
        return jsonify({"msg": "OK", "data": True, "code": "200"})
    else:
        return jsonify({"msg": "ArgError", "data": False, "code": "400"})



if __name__ == '__main__':
    app.run(debug=False, threaded=True, host="0.0.0.0", port=5000)
