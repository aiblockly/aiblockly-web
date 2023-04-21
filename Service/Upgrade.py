import rsa
import sys,os
import subprocess
import zipfile
class UpgradeServ(object):
    __PATH=""
    __data=None
    __byte_key = b'-----BEGIN RSA PUBLIC KEY-----\r\nMIIBCgKCAQEAgunOLN2F2t8sp8lzQ7SRT4UrxEYKCy2xAjBbywAAcalnaqK4PMXy\r\n3IdSu0ek348+pyVNIVXYE/hgkl0pjAc1M1vvYsmXLstl3hRkjbe8QnqSNnXjvBE9\r\nMM1sx5TawcmiWcFuFPuPjadmVLuo+TBVk9lpuVNHvCxavuV/x9GoM7KQg+mLWNsy\r\neRQ9z203m/tqkyT9h5fa9F4VHtgJht2JCM4V13tCcA3TxO1YdxA87s0GFjjDzKMi\r\nTRGEkGtIMx2uMeG9dNatyGITdhPkbLKzIU8k437JQ4URlZlgAnk+2ECdruA0tSSq\r\nF+LANEAp1ue4Dlw+b3b5Vk7pb285lmkH9QIDAQAB\r\n-----END RSA PUBLIC KEY-----\r\n'

    def __verify(self):
        pubkey = rsa.PublicKey.load_pkcs1(self.__byte_key)
        print("正在验证签名...")
        sys.stdout.flush()
        with open(self.__PATH, mode="rb")as f:
            header = f.read(256)
            self.__data = f.read()
            try:
                rsa.verify(self.__data, signature=header, pub_key=pubkey)
            except rsa.pkcs1.VerificationError as e:
                print("验证签名失败，文件损坏，或非官方更新包")
                sys.stdout.flush()
                return False
        print("验证签名通过，正在解密")
        sys.stdout.flush()
        return True

    def __unzip(self):
        with open("/tmp/upt.zip", mode="wb")as f:
            f.write(self.__data)

        z = zipfile.ZipFile("/tmp/upt.zip", "r")
        z.extractall()

    def __executeScript(self):
        cmd="bash /tmp/upt/install.sh"
        print("正在执行安装程序")
        sys.stdout.flush()
        p = subprocess.Popen(cmd, stderr=subprocess.PIPE, stdout=subprocess.PIPE,
                             stdin=subprocess.PIPE, shell=True)
        p.stdin.flush()
        p.stdin.close()
        error = p.stderr.read()
        if error is None or len(error) == 0:
            return True
        else:
            print(error)
            return False

    def __cleanup(self):
        os.system("rm -rf /tmp/upt.zip")
        os.system("rm -rf  /tmp/upt")
        os.system("rm -rf "+self.__PATH)


    def doUpgrade(self,path=""):
        pass
