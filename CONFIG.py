PYTHON_EXECUTE_PATH="/usr/bin/python3"
IFLYTEK_BIN_LIB_PATH=""

import json
import os
import shutil
class Config(object):
    def __init__(self):
        self.__conf={"plugin_dir":"/home/pi/obo_plugin","python3_exec":"C:\\Python35\\python.exe","iflytek_libs":"/home/pi/libs/libmsc.so"}
        if os.path.isfile("/etc/aiblockly/config.json"):
            with open("/etc/aiblockly/config.json",mode="r")as f:
                dict=json.load(f)
                self.__conf=dict
        else:
            if not os.path.isdir("/etc/aiblockly"):
                try:
                    os.makedirs("/etc/aiblockly")
                    shutil.chown("/etc/aiblockly",user="pi",group="pi")
                except Exception as e:pass
            with open("/etc/aiblockly/config.json",mode="w")as f:
                json.dump(obj=self.__conf,fp=f,indent=4)
                try:
                    shutil.chown("/etc/aiblockly/config.json", user="pi", group="pi")
                except Exception as e:
                    pass
        for k,v in self.__conf.items():
            setattr(self,k,v)




