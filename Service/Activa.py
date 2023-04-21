import subprocess


def Activa(mob, pwd):
    print(mob, pwd)
    cmd = "obo_login -s"
    in_string = mob + "\n" + pwd + "\n"
    p = subprocess.Popen(cmd, stderr=subprocess.PIPE, stdout=subprocess.PIPE,
                         stdin=subprocess.PIPE, shell=True)
    p.stdin.write(in_string.encode())
    p.stdin.flush()
    p.stdin.close()
    error = p.stderr.read()
    if error is None or len(error) == 0:
        return True
    else:
        print(error)
        return False
