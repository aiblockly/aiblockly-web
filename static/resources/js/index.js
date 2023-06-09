"use strict";

const zhCN = "/resources/common/blockly/msg/js/zh_cn.js";
const zhTW="/resources/common/blockly/msg/js/zh_cn.js";
const enUS = "/resources/common/blockly/msg/js/en.js";
var global_wk;
var global_req_id;
window.onload=function () {
    $('#excapp_tabs').tabs();
    $('#excapp_tabs').find('a').on('opened.tabs.amui', function (e) {
        let index = $('#excapp_tabs').find('.am-tabs-nav').children('li').index($(this).closest('li'));
        if (1 === index) {
            $("#python_code").text("");
            $("#python_code").text(getCode());
        }
    });

    function BrowserType()
    {
        let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        let isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        // let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        let isIE=window.ActiveXObject || "ActiveXObject" in window
        // let isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
        let isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
        let isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        let isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
        let isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1&&!isEdge; //判断Chrome浏览器

        if (isIE)
        {
            let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            let fIEVersion = parseFloat(RegExp["$1"]);
            if(userAgent.indexOf('MSIE 6.0')!=-1){
                return "IE6";
            }else if(fIEVersion == 7)
            { return "IE7";}
            else if(fIEVersion == 8)
            { return "IE8";}
            else if(fIEVersion == 9)
            { return "IE9";}
            else if(fIEVersion == 10)
            { return "IE10";}
            else if(userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)){
                return "IE11";
            }
            else
            { return "0"}//IE版本过低
        }//isIE end

        if (isFF) { return "FF";}
        if (isOpera) { return "Opera";}
        if (isSafari) { return "Safari";}
        if (isChrome) { return "Chrome";}
        if (isEdge) { return "Edge";}
    }
    let broser=BrowserType();
    if(broser.indexOf("IE")!=-1){
        AMUI.dialog.alert({
            title:"不兼容的浏览器",
            content:"推荐使用最新版谷歌浏览器，点击<a href='https://pan.baidu.com/s/1u2ASLy7q8r2hLfM0X6Iciw'>《这里》</a>下载" +
            "<p>否则可能发生界面显示异常,功能无法使用等情况</p>",
            onConfirm:function () {
                window.location.href='https://pan.baidu.com/s/1u2ASLy7q8r2hLfM0X6Iciw';
            }
        })
    }

    let workspace = Blockly.inject(
        'blockly',
        {
            media: resourcesPath + '/common/blockly/media/',
            toolbox: generateToolsBar(),
            grid: {
                spacing: 20,
                length: 3,
                colour: '#CCCCCC',
                snap: true
            },
            zoom: {
                controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2
            },
            trashcan: true
        }
    );
    global_wk=workspace;

    let getCode = function () {
        return Blockly.Python.workspaceToCode(workspace);
    };


    $("#code_con").on("click",function () {
        $("#python_code").value="";
        $("#python_code").value=getCode();
    });

    $("#wkspace").on("click",function () {
        global_wk=Blockly.inject(
        'blockly',
        {
            media: resourcesPath + '/common/blockly/media/',
            toolbox: generateToolsBar(),
            grid: {
                spacing: 20,
                length: 3,
                colour: '#CCCCCC',
                snap: true
            },
            zoom: {
                controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2
            },
            trashcan: true
        }
    );
    });
    let clearOldLanSetting = function () {
        let lastNode = undefined;
        let scripts = $(document.body).find("script");
        for (let i = 0; i < scripts.length; i++) {
            lastNode = scripts[i];
        }
        lastNode.remove();
    };

    let changeLanSetting = function (lan = "zhCN") {
        clearOldLanSetting();
        if ("zhCN" === lan) {
            document.cookie="lang=zh_cn";
            $(document.body).append(`<script src="${zhCN}"><\/script>`);
        } else if ("zhTW"===lan) {
            document.cookie="lang=zh_tw";
            $(document.body).append(`<script src="${zhTW}"><\/script>`);
        }else {
            document.cookie="lang=en_us";
            $(document.body).append(`<script src="${enUS}"><\/script>`);
        }
    };

    $("#language_select").on("change", function () {
        changeLanSetting($(this).val());
        window.location.reload()
    });

    //
    let randomStr=function () {
        let s="";
        for(let i=0;i<10;i++){
            s=s+Math.floor(Math.random()*10);
        }
        return s
    };
    let runCode = function () {
        let code = $('#python_code').text();
        let count=300;
        let interfaceAddr = '/run';
        let funid=0;
        let reqid=randomStr();
        global_req_id=reqid;
        $('#runProcessBar').attr("style","width: 30%");
        $('#status_code').text("");
        if (false) {
        } else {
            $.ajax({
                cache: false,
                data: {
                    code: code,
                    reqid:reqid
                },
                url: interfaceAddr,
                type: 'POST',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    $('#status_code').text(data.data);
                    count=0;
                    $('#runProcessBar').attr("style","width: 100%");
                    try{clearInterval(funid);}catch (e) {
                        
                    }
                    
                }
            });

            let retAddr = '/ret';

            funid=setInterval(function(){
                if(count>0){
                    $.ajax({
                            cache: false,
                            data: {
                                reqid:reqid
                            },
                            url: retAddr,
                            type: 'GET',
                            dataType: 'json',
                            success: function (data) {
                                if(!!data.data){console.log(data);
                                    if(count>0){$('#status_code').text(data.data);count=count-1;
                                    let x=((300-count)/300*100)+50;
                                    if(x>100){x=100;}
                                    $('#runProcessBar').attr("style","width: "+x+"%");
                                    }}
                            }
                        });
                    $.ajax({
                        cache:false,
                        data:{},
                        url:"/result/check",
                        type:'POST',
                        dataType:"json",
                        success:function (data) {
                            if (!!data.data){
                                AMUI.dialog.alert({
                                    title:"拍照结果",
                                    content:"<img src='/result/img?"+randomStr()+"' height='300',width='400'>",
                                    onConfirm:function () {
                                        return 0;
                                    }
                                });
                                //window.open('/result/img','newwindow','height=600,width=800,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no, status=no')
                            }
                        }
                    })
                }
            }, 1000)
        }
    };
    $('#update').on("click",function () {
        AMUI.dialog.confirm({
            title:"上传obo更新包",
            content:'<div class="am-form-group am-form-file">\n' +
            '  <button type="button" class="am-btn am-btn-danger am-btn-sm">\n' +
            '    <i class="am-icon-cloud-upload"></i> 选择要上传的文件</button>\n' +
            '  <input id="obo-file" type="file" multiple name="file">\n' +
            '</div>\n' +
            '<div id="obo-file-list"></div>',
            onConfirm: function () {
                let input = document.querySelector("#obo-file");
                if (input.files.length === 0) {
                    return;
                }

                let formData = new FormData();
                formData.append("file", input.files[0]);

                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        let res = JSON.parse(xhr.responseText);
                        if(!!res.data){
                            AMUI.dialog.alert({
                                title:"上传成功",
                                content:"请重新启动以更新固件",
                                onConfirm:function () {
                                    return
                                }
                            })
                        }
                    }
                };
                xhr.open("POST", contextPath + "/firmware/obo-update");
                xhr.send(formData);
            }
        });
         $('#obo-file').on("change",(function () {
             let fileNames='';
             $.each(this.files, function () {
                 let size=this.size/1024/1024;
                 size=size.toFixed(2);
                 fileNames += '<span class="am-badge">' + this.name + '</span> ';
                 fileNames += '<span class="am-badge">' + size+'MB' + '</span> ';
            });
            $('#obo-file-list').html(fileNames);
                }));
    });
    $('#run').on('click', runCode);
    $('#vnc').on("click",function(){
            let url="http://"+window.location.host+":6080";
            //url="http://192.168.123.106:6080";
        AMUI.dialog.alert({
            title:"WebVNC Tip",
            content:"<p>You are using WebVNC</p><p>Password：raspberry</p>",
            onConfirm:function () {
                return
            }
        });
        window.open(url,'newwindow','toolbar=0,menubar=0,scrollbars=0, status=0,width=1024,height=720');
        });

    $('#kill').on('click',function () {
       if(!!global_req_id){
           $.ajax({
               url:"/kill",
               dataType:"JSON",
               type:"POST",
               data:{"reqid":global_req_id},
               success:function (data) {
                   if(!!data.data){
                       AMUI.dialog.alert({
                           title:"Succeed",
                           content:"<p>Stopped</p>",
                           onConfirm:function () {
                               return null
                           }
                       });
                   }
                   global_req_id=undefined;
               }
           })
       }else {
           AMUI.dialog.alert({
               title:String.fromCodePoint('0x1F914'),
               content:"<p>Nothing is running!!</p>",
               onConfirm:function () {
               }
           })
       }
    });

    $('#clear').on('click',function () {
        $('#status_code').text("");
    });

    let exportLogic = function () {
        let request = new XMLHttpRequest();
        request.open("POST", contextPath + "/export/code", true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        request.responseType = "arraybuffer";
        //
        $('#statusBar').parent().removeAttr('hidden');
        request.onreadystatechange = function () {
            if (4 === request.readyState && 200 === request.status) {
                let name = request.getResponseHeader("Content-disposition");
                let filename = name.substring(20, name.length);
                let blob = new Blob([request.response], {type: 'text/py'});
                let csvUrl = URL.createObjectURL(blob);
                let link = document.createElement('a');
                link.href = csvUrl;
                link.download = filename;
                link.click();
            }
        };
        let code = $('#python_code').text();
        request.send(`code=${code}`);
    };
    $('#export').on('click', exportLogic);

    //
    let expwk=function () {
        let form = $("<form>");
        form.attr('style','display:none');
        form.attr('target','_blank');
        form.attr('method','post');
        form.attr('action',contextPath + "/export/workspace");
        let input1 = $('<input>');
        input1.attr('type','hidden');
        input1.attr('name','xml');
        let xml = Blockly.Xml.workspaceToDom(workspace);
        let xml_text = Blockly.Xml.domToText(xml);
        input1.attr('value',xml_text);
        $('body').append(form);
        form.append(input1);
        form.submit();

    };
    let exportWorkspace = function () {
        let xml = Blockly.Xml.workspaceToDom(workspace);
        let xml_text = Blockly.Xml.domToText(xml);

        let request = new XMLHttpRequest();
        request.open("POST", contextPath + "/export/workspace", true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        request.responseType = "arraybuffer";
        //
        $('#statusBar').parent().removeAttr('hidden');
        request.onreadystatechange = function () {
            if (4 === request.readyState && 200 === request.status) {
                let name = request.getResponseHeader("Content-disposition");
                let filename = name.substring(20, name.length);
                let blob = new Blob([request.response], {type: 'text/xml'});
                let csvUrl = URL.createObjectURL(blob);
                let link = document.createElement('a');
                link.href = csvUrl;
                link.download = filename;
                link.click();
            }
        };
        request.send(`xml=${xml_text}`);
    };

    $("#exportWorkspace").on("click", expwk);

    $('#poweroff').on("click",function () {
        AMUI.dialog.confirm({
            title:"真的要关闭电源吗？",
            content:"请在绿色指示灯不再闪烁后断电",
            onConfirm:function () {
                $.ajax({
                    data:{},
                    url:"/poweroff",
                    type:"POST",
                    dataType:"json",
                    error:function () {
                        window.location.reload();
                    },
                    success:function () {
                        window.location.reload();
                    }
                })
            },
            onCancel:function () {
                return;
            }
        })
    });

    $('#reboot').on("click",function () {
        AMUI.dialog.confirm({
            title:"真的要重新启动吗？",
            content:"请在等待重新报IP！",
            onConfirm:function () {
                $.ajax({
                    data:{},
                    url:"/reboot",
                    type:"POST",
                    dataType:"json",
                    error:function () {
                        window.location.reload();
                    },
                    success:function () {
                        window.location.reload();
                    }
                })
            },
            onCancel:function () {
                return;
            }
        })
    });
    $('#load').on("click",function () {
        let code = getCode();
        $.ajax({
            url:"/setautoload",
            dataType:"JSON",
            type:"POST",
            data:{"code":code},
            success:function (data) {
                if(!!data.data){
                    AMUI.dialog.alert({
                        title:"OK",
                        content:"Code will go into effect from next boot"
                    })
                }
            }
        })
    });

    $('#unload').on("click",function () {
        let code = $('#python_code').text();
        $.ajax({
            url:"/delautoload",
            dataType:"JSON",
            type:"POST",
            data:{},
            success:function (data) {
                if(!!data.data){
                    AMUI.dialog.alert({
                        title:"OK",
                        content:"Code will lose effect from next boot"
                    })
                }
            }
        })
    });
    $('#ter_auto').on("click",function () {
        let code = $('#python_code').text();
        $.ajax({
            url:"/terautoload",
            dataType:"JSON",
            type:"POST",
            data:{},
            success:function (data) {
                if(!!data.data){
                    AMUI.dialog.alert({
                        title:"OK",
                        content:"The Autoloaded code is stopped now."
                    })
                }
            }
        })
    });

    $("#tf_start").on("click",function () {
        $.ajax({
            url:"/tfs",
            dataType:"JSON",
            type:"POST",
            data:{"opt":"start"},
            success:function (data) {
                if(!!data.data){
                    AMUI.dialog.alert({
                        title:"Server is booting",
                        content:"It will take a few minutes"
                    })
                }
            }
        })
    });
    $("#tf_stop").on("click",function () {
        $.ajax({
            url:"/tfs",
            dataType:"JSON",
            type:"POST",
            data:{"opt":"stop"},
            success:function (data) {
                if(!!data.data){
                    AMUI.dialog.alert({
                        title:"Server stopped",
                        content:"You can not use vi_tf_client"
                    })
                }
            }
        })
    });

    $("#tf_restart").on("click",function () {
        $.ajax({
            url:"/tfs",
            dataType:"JSON",
            type:"POST",
            data:{"opt":"restart"},
            success:function (data) {
                if(!!data.data){
                    AMUI.dialog.alert({
                        title:"Server restarted",
                        content:"It will take a few minutes"
                    })
                }
            }
        })
    });

    $("#importWorkspace").on("click", function () {
        AMUI.dialog.alert({
            title: '导入 workspace.xml 文件',
            content: '<div class="am-form-group am-form-file">\n' +
            '  <button type="button" class="am-btn am-btn-danger am-btn-sm">\n' +
            '    <i class="am-icon-cloud-upload"></i> 选择要上传的文件</button>\n' +
            '  <input id="workspace-file" type="file" multiple name="file">\n' +
            '</div>\n' +
            '<div id="file-list"></div>',
            onConfirm: function () {
                let input = document.querySelector("#workspace-file");
                if (input.files.length === 0) {
                    return;
                }

                let formData = new FormData();
                formData.append("file", input.files[0]);

                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        let res = JSON.parse(xhr.responseText);
                        let xml = Blockly.Xml.textToDom(res.data);
                        Blockly.Xml.domToWorkspace(xml, workspace);
                    }
                };

                xhr.open("POST", contextPath + "/import/workspace");
                xhr.send(formData);
            }
        });
        $('#workspace-file').on('change', function () {
            let fileNames = '';
            $.each(this.files, function () {
                fileNames += '<span class="am-badge">' + this.name + '</span> ';
            });
            $('#file-list').html(fileNames);
        });
    });

    let localStorage = function () {
        let store = $.AMUI.store;

        if (!store.enabled) {
            return;
        }
        let xml = Blockly.Xml.workspaceToDom(workspace);
        let xml_text = Blockly.Xml.domToText(xml);
        store.set("workspace", xml_text);
    };

    setInterval(function () {
        localStorage();
    }, 5000);

    $('#signoutBut').on('click', function () {
        $.ajax(contextPath + '/sign/out').then(function () {
            window.location.reload()
        });
    });

    $('#lock').on('click', function () {
        $('#lock').addClass('am-disabled');
        $('#ipaddress').parent().attr('disabled', 'disabled');
        $('#unlock').removeClass('am-disabled');
    });

    $('#unlock').on('click', function () {
        $('#unlock').addClass('am-disabled');
        $('#ipaddress').parent().removeAttr('disabled', 'disabled');
        $('#lock').removeClass('am-disabled');
    });

    let xml_lc=window.localStorage.getItem("saved_xml");
    if (!!xml_lc){
        let dom=Blockly.Xml.textToDom(xml_lc);
        Blockly.Xml.domToWorkspace(dom,workspace);
    }
};
window.onbeforeunload=function (e) {
    let dom=Blockly.Xml.workspaceToDom(global_wk);
    let xml=Blockly.Xml.domToText(dom);
    try{
        window.localStorage.setItem("saved_xml",xml)
    }catch (e) {
    }

    
};