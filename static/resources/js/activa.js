$('#activa').on("click",function () {
    AMUI.dialog.confirm({
        title:"登录仪酷账号，开启更多功能！",
        content: `<form id="actForm" class="am-form am-form-horizontal">
                        <div class="am-form-group">
                            <label for="mob" class="am-u-sm-2 am-form-label">手机号<span style="color: #FF0000">*</span></label>
                            <div class="am-u-sm-10">
                                <input type="text" id="mob" name="mob" placeholder="输入手机号" required="required">
                            </div>
                        </div>
                        <div class="am-form-group">
                            <label for="passwd" class="am-u-sm-2 am-form-label">密码<span style="color: #FF0000">*</span></label>
                            <div class="am-u-sm-10">
                                <input type="password" id="passwd" name="passwd"  required="required">
                            </div>
                        </div>
                        <div class="am-form-group">
                            <span> 没有账号？<a href="http://121.43.189.72/web/register">注册</a>试用下吧！！</span>
                        </div>
                    </form>`,
        onConfirm:function () {
            let mob = undefined;
            let passwd = undefined;
            $('#actForm').serializeArray().forEach(function (v) {
                    switch (v.name) {
                        case 'mob': {
                            mob = v.value;
                            break;
                        }
                        case 'passwd': {
                            passwd = v.value;
                            break;
                        }
                    }
                });
            $.ajax(contextPath + '/activa', {
                    method: 'post',
                    data: {
                        mob: mob,
                        passwd:passwd
                    },
                    dataType: 'json'
                }).then(function (data) {
                    if (!!data.data) {
                        window.location.reload(true);
                    }else {
                        AMUI.dialog.alert({title:"激活失败",content:"请尝试命令行激活",onConfirm:function () {
                                return;
                            }})
                    }
                });
        }
    })
});