$(function(){var a=parseInt($("#pageIndex").text())-1,b=parseInt($("#pages").text())-1;0===a?$("#prev").parent().addClass("am-disabled"):$("#prev").parent().removeClass("am-disabled");b===a?$("#next").parent().addClass("am-disabled"):$("#next").parent().removeClass("am-disabled");$("#pageSizeSelect").on("change",function(){window.location.href=contextPath+"/admin/category?pageIndex="+a+"&pageSize="+$("#pageSizeSelect").val()});$("#prev").on("click",function(){var d=parseInt($("#pageIndex").text())-
1;d--;0>d&&(d=0);window.location.href=contextPath+"/admin/category?pageIndex="+d+"&pageSize="+$("#pageSizeSelect").val()});$("#next").on("click",function(){var d=parseInt($("#pageIndex").text())-1;d++;window.location.href=contextPath+"/admin/category?pageIndex="+d+"&pageSize="+$("#pageSizeSelect").val()});$("#addCateBut").on("click",function(){var d=parseInt(HTMLEncode(document.getElementById("maxprio").innerText))+1;AMUI.dialog.confirm({title:"\u6dfb\u52a0category",content:'<form id="addCateForm" class="am-form am-form-horizontal">\n                        <div class="am-form-group">\n                            <label for="name" class="am-u-sm-2 am-form-label">\u540d\u5b57<span style="color: #FF0000">*</span></label>\n                            <div class="am-u-sm-10">\n                                <input type="text" id="name" name="name" placeholder="\u8bf7\u8f93\u5165category\u540d\u5b57">\n                            </div>\n                        </div>\n            \n                        <div class="am-form-group">\n                            <label class="am-u-sm-2 am-form-label">\u5934\u90e8</label>\n                            <div class="am-u-sm-10" style="display: -webkit-inline-box;">\n                                <input type="text" id="header" name="header" placeholder="\u8f93\u5165\u5934\u90e8">\n                            </div>\n                        </div>\n            \n                        <div class="am-form-group">\n                            <label for="footer" class="am-u-sm-2 am-form-label">\u811a\u90e8</label>\n                            <div class="am-u-sm-10">\n                                <input type="text" id="footer" name="footer" placeholder=\'\u8f93\u5165\u811a\u90e8\' >\n                            </div>\n                        </div>\n            \n                        \n                        <div class="am-form-group">\n                            <label for="colorSel" class="am-u-sm-2 am-form-label">\u989c\u8272</label>\n                            <div class="am-u-sm-10" >\n                                <input type="color" id="color" name="color" >\n                            </div>\n                        </div>\n                        <div class="am-form-group">\n                            <label for="zh" class="am-u-sm-2 am-form-label">\u4e2d\u6587</label>\n                            <div class="am-u-sm-10">\n                                <input type="text" id="zh" name="zh" placeholder="\u8f93\u5165\u4e2d\u6587\u540d" >\n                            </div>\n                        </div>\n            \n                        <div class="am-form-group">\n                            <label for="en" class="am-u-sm-2 am-form-label">\u82f1\u6587</label>\n                            <div class="am-u-sm-10">\n                                <input type="text" id="en" name="en" placeholder="\u8f93\u5165\u82f1\u6587\u540d" >\n                            </div>\n                        </div>\n            \n                        <div class="am-form-group">\n                            <label for="priority" class="am-u-sm-2 am-form-label">\u4f18\u5148\u7ea7</label>\n                            <div class="am-u-sm-10">\n                                <input type="number"   id="priority" name="priority" placeholder="\u8f93\u5165\u4f18\u5148\u7ea7" min="1" max="999" value="'+
d+'" required />\n                            </div>\n                        </div>\n                    </form>',onConfirm:function(){var a="",b="",e="",f="",g="",k="",l=void 0;$("#addCateForm").serializeArray().forEach(function(c){switch(c.name){case "name":a=c.value?c.value:"";break;case "header":b=c.value?c.value:"";break;case "footer":e=c.value?c.value:"";break;case "color":f=c.value?c.value:"";break;case "zh":g=c.value?c.value:"";break;case "en":k=c.value?c.value:"";break;case "priority":l=
c.value?parseInt(c.value):d}});$.ajax(contextPath+"/admin/category/add",{method:"post",data:{cat_name:a,cat_footer_content:e,cat_header_content:b,color:f,zh:g,en:k,priority:l},dataType:"json"}).then(function(a){a.data?window.location.reload(!0):custom_alert("\u6dfb\u52a0\u7ed3\u679c",a.msg)})}})});$("#searchBut").on("click",function(){var a=$("#search").val();a?(a=contextPath+"/admin/category/search?q="+a,window.open(a,"_self")):AMUI.dialog.alert({title:"\u609f\u7a7a\u83ab\u95f9",content:"<p>\u4f60\u4e0d\u544a\u8bc9\u6211\u60f3\u641c\u7d22\u5565</p><p>\u90a3\u6211\u53ea\u80fd\u56de\u7b54\u65e0\u53ef\u5949\u544a\u4e86</p>",
onConfirm:function(){}})})});
var modify=function(a,b){var d=HTMLEncode(document.getElementById(a+"+header").innerText).replace(/[\t]/g,""),m=HTMLEncode(document.getElementById(a+"+footer").innerText),h=HTMLEncode(document.getElementById(a+"+color").innerText);h=h.replace(/[\r\n]/g,"");var e=HTMLEncode(document.getElementById(a+"+zh").innerText),f=HTMLEncode(document.getElementById(a+"+en").innerText),g=HTMLEncode(document.getElementById(a+"+prio").innerText);AMUI.dialog.confirm({title:"\u4fee\u6539Category",content:'<form id="modfiyCateForm" class="am-form am-form-horizontal">\n                        <div class="am-form-group">\n                            <label for="name" class="am-u-sm-2 am-form-label">\u540d\u5b57<span style="color: #FF0000">*</span></label>\n                            <div class="am-u-sm-10">\n                                <input type="text" id="name" name="name" placeholder="\u8f93\u5165\u540d\u79f0" value="'+
b+'">\n                            </div>\n                        </div>\n            \n                        <div class="am-form-group">\n                            <label class="am-u-sm-2 am-form-label">\u5934\u90e8</label>\n                            <div class="am-u-sm-10" style="display: -webkit-inline-box;">\n                                <input type="text" id="header" name="header" value=\''+d+'\'placeholder="\u8f93\u5165\u5934\u90e8">\n                            </div>\n                        </div>\n            \n                        <div class="am-form-group">\n                            <label for="footer" class="am-u-sm-2 am-form-label">\u811a\u90e8</label>\n                            <div class="am-u-sm-10">\n                                <input type="text" id="footer" name="footer" placeholder=\'\u8f93\u5165\u811a\u90e8\' value=\''+
m+'\'>\n                            </div>\n                        </div>\n            \n                        \n                        <div class="am-form-group">\n                            <label for="colorSel" class="am-u-sm-2 am-form-label">\u989c\u8272</label>\n                            <div class="am-u-sm-10" >\n                                <input type="color" id="color" name="color" value="'+h+'">\n                            </div>\n                        </div>\n                        <div class="am-form-group">\n                            <label for="zh" class="am-u-sm-2 am-form-label">\u4e2d\u6587</label>\n                            <div class="am-u-sm-10">\n                                <input type="text" id="zh" name="zh" placeholder="\u8f93\u5165\u4e2d\u6587\u540d" value="'+
e+'">\n                            </div>\n                        </div>\n            \n                        <div class="am-form-group">\n                            <label for="en" class="am-u-sm-2 am-form-label">\u82f1\u6587</label>\n                            <div class="am-u-sm-10">\n                                <input type="text" id="en" name="en" placeholder="\u8f93\u5165\u82f1\u6587\u540d" value="'+f+'">\n                            </div>\n                        </div>\n            \n                        <div class="am-form-group">\n                            <label for="priority" class="am-u-sm-2 am-form-label">\u4f18\u5148\u7ea7</label>\n                            <div class="am-u-sm-10">\n                                <input type="number"   id="priority" name="priority" placeholder="\u8f93\u5165\u4f18\u5148\u7ea7" min="0" max="999" value="'+
g+'" required />\n                            </div>\n                        </div>\n                    </form>',onConfirm:function(){var b="",d="",c="",e="",f="",g="",h=void 0;$("#modfiyCateForm").serializeArray().forEach(function(a){switch(a.name){case "name":b=a.value?a.value:"";break;case "header":d=a.value?a.value:"";break;case "footer":c=a.value?a.value:"";break;case "color":e=a.value?a.value:"";break;case "zh":f=a.value?a.value:"";break;case "en":g=a.value?a.value:"";break;case "priority":h=
a.value?parseInt(a.value):-1}});$.ajax(contextPath+"/admin/category/update",{method:"post",data:{id:a,cat_name:b,cat_header_content:d,cat_footer_content:c,color:e,zh:f,en:g,priority:h},dataType:"json"}).then(function(a){a.data?window.location.reload(!0):custom_alert("\u4fee\u6539\u7ed3\u679c",a.msg)})},onCancel:function(){}})},custom_alert=function(a,b){AMUI.dialog.alert({title:a,content:b,onConfirm:function(){window.location.reload(!0)}})},remove=function(a,b){AMUI.dialog.confirm({title:"\u5220\u9664category",
content:"\u662f\u5426\u8981\u5220\u9664"+b+"\uff1f",onConfirm:function(){$.ajax(contextPath+"/admin/category/delete",{method:"post",data:{id:a},dataType:"json"}).then(function(a){a.data?window.location.reload(!0):custom_alert("\u5220\u9664\u7ed3\u679c",a.msg)})},onCancel:function(){}})};function HTMLEncode(a){var b=document.createElement("div");null!=b.textContent?b.textContent=a:b.innerText=a;return b.innerHTML};
