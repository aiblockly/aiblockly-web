"use strict";
Blockly.Blocks.excapp_broadlink_init = {
    init: function() {
        this.appendDummyInput().appendField(iot_init),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(270),
        this.setTooltip("物联网模块初始化"),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_broadlink_init = function(t) {
    define_excapp();
    return "excapp_bdlink=excapp.BroadLink.BroadLink(find=True)\n"
},
Blockly.Blocks.excapp_broadlink_config = {
    init: function() {
        this.appendDummyInput().appendField(iot_newconf),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(270),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_broadlink_config = function(t) {
    define_excapp();
    return "excapp.initConfig()\n"
},
Blockly.Blocks.excapp_broadlink_temp = {
    init: function() {
        this.appendDummyInput().appendField(iot_a1),
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([[a1_temp, a1_temp], [a1_humanity, a1_humanity], [a1_lightness, a1_lightness], [a1_noisy, a1_noisy], ["设备信息", "设备信息"], [a1_pullut, a1_pullut]]), "type"),
        this.setOutput(!0, null),
        this.setColour(270),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_broadlink_temp = function(t) {
    return define_excapp(),
    ["excapp.getTemp(broadlink=excapp_bdlink,type='" + t.getFieldValue("type") + "')", Blockly.Python.ORDER_ATOMIC]
},
Blockly.Blocks.learn_signal = {
    init: function() {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(iot_learn),
        this.appendValueInput("brand").setCheck("String").appendField(rm_band),
        this.appendValueInput("model").setCheck("String").appendField(rm_model),
        this.appendValueInput("button").setCheck("String").appendField(rm_buttom),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(60),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.learn_signal = function(t) {
    var e = Blockly.Python.valueToCode(t, "brand", Blockly.Python.ORDER_ATOMIC),
    l = Blockly.Python.valueToCode(t, "model", Blockly.Python.ORDER_ATOMIC),
    n = Blockly.Python.valueToCode(t, "button", Blockly.Python.ORDER_ATOMIC);
    return define_excapp(),
    "excapp.blink_learn(class_ins=excapp_bdlink,button=" + n + ",brand=" + e + ",model=" + l + ")\n"
},
Blockly.Blocks.send_signal = {
    init: function() {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(iot_play),
        this.appendValueInput("brand").setCheck("String").appendField(rm_band),
        this.appendValueInput("model").setCheck("String").appendField(rm_model),
        this.appendValueInput("button").setCheck("String").appendField(rm_buttom),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(60),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.send_signal = function(t) {
    var e = Blockly.Python.valueToCode(t, "brand", Blockly.Python.ORDER_ATOMIC),
    l = Blockly.Python.valueToCode(t, "model", Blockly.Python.ORDER_ATOMIC),
    n = Blockly.Python.valueToCode(t, "button", Blockly.Python.ORDER_ATOMIC);
    return define_excapp(),
    "excapp.blink_send(class_ins=excapp_bdlink,button=" + n + ",brand=" + e + ",model=" + l + ")\n"
},
Blockly.Blocks.handcon = {
    init: function() {
        this.appendDummyInput().appendField(iot_man_conn),
        this.appendDummyInput().appendField(man_conn_type).appendField(new Blockly.FieldDropdown([["rm", "rm"], ["a1", "a1"], [man_conn_sp, man_conn_sp], ["yeelight", "yeelight"]]), "dev_type"),
        this.appendValueInput("ip").setCheck("String").setAlign(Blockly.ALIGN_CENTRE).appendField(man_conn_ip),
        this.appendValueInput("mac").setCheck("String").setAlign(Blockly.ALIGN_CENTRE).appendField("MAC地址"),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(45),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.handcon = function(t) {
    var e = t.getFieldValue("dev_type"),
    l = Blockly.Python.valueToCode(t, "ip", Blockly.Python.ORDER_ATOMIC),
    n = Blockly.Python.valueToCode(t, "mac", Blockly.Python.ORDER_ATOMIC);
    return define_excapp(),
    "excapp.blink_handDis(class_ins=excapp_bdlink,ip=" + l + ",mac=" + n + ',devtype="' + e + '")\n'
},
Blockly.Blocks.bulb = {
    init: function() {
        this.appendDummyInput().appendField(light__).appendField(new Blockly.FieldDropdown([[sp_on, "开"], [sp_off, "关"]]), "NAME_BB"),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.bulb = function(t) {
    return 'excapp.setlightPower(class_ins=excapp_bdlink,power="' + t.getFieldValue("NAME_BB") + '")\n'
},
Blockly.Blocks.yeelightcolor = {
    init: function() {
        this.appendValueInput("light_color").setCheck("Colour").appendField(iot_light_color),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.yeelightcolor = function(t) {
    return "excapp.setlightcolor(class_ins=excapp_bdlink,color=" + Blockly.Python.valueToCode(t, "light_color", Blockly.Python.ORDER_ATOMIC) + ")\n"
},
Blockly.Blocks.plug = {
    init: function() {
        this.appendDummyInput().appendField(sp2).appendField(new Blockly.FieldDropdown([[sp_on, "'开'"], [sp_off, "'关'"]]), "power"),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.plug = function(t) {
    return "excapp.plugenable(class_ins=excapp_bdlink,power=" + t.getFieldValue("power") + ")\n"
},
Blockly.Blocks.str2num = {
    init: function() {
        this.appendValueInput("string_num").setCheck("String").appendField(strtonum),
        this.setOutput(!0, "Number"),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.str2num = function(t) {
    return ["float(" + Blockly.Python.valueToCode(t, "string_num", Blockly.Python.ORDER_ATOMIC) + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.chline = {
    init: function() {
        this.appendDummyInput().appendField(chl),
        this.setOutput(!0, "String"),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.chline = function(t) {
    return ['"\\n"', Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.excapp_timer_sleep = {
    init: function() {
        this.appendDummyInput().appendField("等待").appendField(new Blockly.FieldTextInput("1"), "sec").appendField("秒"),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_timer_sleep = function(t) {
    var e = t.getFieldValue("sec");
    return define_excapp_timer(),
    "time.sleep(" + e + ")\n"
},
Blockly.Blocks.excapp_timer_time = {
    init: function() {
        this.appendDummyInput().appendField(now_time),
        this.setOutput(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_timer_time = function(t) {
    define_excapp_timer();
    return ["time.localtime()", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.excapp_timer_format = {
    init: function() {
        this.appendValueInput("formatter").setCheck(null).appendField(new Blockly.FieldDropdown([["yyyy-mm-dd HH:mm:ss", "%Y-%m-%d %H:%M:%S"], ["yyyy/mm/dd HH:mm:ss", "%Y/%m/%d %H:%M:%S"]]), "format"),
        this.setOutput(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_timer_format = function(t) {
    var e = t.getFieldValue("format"),
    l = Blockly.Python.valueToCode(t, "formatter", Blockly.Python.ORDER_NONE);
    return define_excapp_timer(),
    ['time.strftime("' + e + '", ' + l + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.excapp_excapp_file_read = {
    init: function() {
        this.appendValueInput("filepath").setCheck("String").appendField(file_path),
        this.appendStatementInput("file").setCheck(null).appendField(read_file),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_excapp_file_read = function(t) {
    var e = Blockly.Python.valueToCode(t, "filepath", Blockly.Python.ORDER_ATOMIC),
    l = Blockly.Python.statementToCode(t, "file"),
    n = "with open(" + e + ',"r") as f:\n';
    return n += l
},
Blockly.Blocks.excapp_excapp_file_read_f = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([[read_mode, "read()"], ["按行" + read_mode, "readlines()"]]), "opt"),
        this.setOutput(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_excapp_file_read_f = function(t) {
    return ["f." + t.getFieldValue("opt"), Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.split = {
    init: function() {
        this.appendDummyInput().appendField(split_str),
        this.appendValueInput("str").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(string__),
        this.appendValueInput("spl").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(split_char + wx_en_null),
        this.setOutput(!0, null),
        this.setColour(165),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.split = function(t) {
    return [Blockly.Python.valueToCode(t, "str", Blockly.Python.ORDER_ATOMIC) + ".split(" + Blockly.Python.valueToCode(t, "spl", Blockly.Python.ORDER_ATOMIC) + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.excapp_excapp_file_write = {
    init: function() {
        this.appendValueInput("filepath").setCheck("String").appendField(file_name),
        this.appendValueInput("file_mode").setCheck("String").appendField(write_mode),
        this.appendStatementInput("codeblock").setCheck(null),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_excapp_file_write = function(t) {
    var e = Blockly.Python.valueToCode(t, "filepath", Blockly.Python.ORDER_ATOMIC),
    l = Blockly.Python.valueToCode(t, "file_mode", Blockly.Python.ORDER_NONE),
    n = Blockly.Python.statementToCode(t, "codeblock"),
    o = "with open(" + e + "," + l + ") as f:\n";
    return o += n
},
Blockly.Blocks.excapp_excapp_file_write_f = {
    init: function() {
        this.appendValueInput("file_data").setCheck(null).appendField(write_),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_excapp_file_write_f = function(t) {
    return "f.write(" + Blockly.Python.valueToCode(t, "file_data", Blockly.Python.ORDER_ATOMIC) + ")\n"
},
Blockly.Blocks.excapp_excapp_file_write_mode = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["覆盖", "'w+'"], ["追加", "'a+'"]]), "file_mode"),
        this.setOutput(!0, "String"),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_excapp_file_write_mode = function(t) {
    return [t.getFieldValue("file_mode"), Blockly.Python.ORDER_STRING_CONVERSION]
};
var define_serial = function() {
    Blockly.Python.definitions_.file_io = "import serial"
};
Blockly.Blocks.serial = {
    init: function() {
        this.appendDummyInput().appendField("打开串口"),
        this.appendValueInput("port").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("端口"),
        this.appendValueInput("buadrate").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("波特率"),
        this.appendStatementInput("operation").setCheck(null),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.serial = function(t) {
    return define_serial(),
    "with serial.Serial(port=" + Blockly.Python.valueToCode(t, "port", Blockly.Python.ORDER_ATOMIC) + ",baudrate=" + Blockly.Python.valueToCode(t, "buadrate", Blockly.Python.ORDER_ATOMIC) + ",timeout=10) as s:\n" + Blockly.Python.statementToCode(t, "operation")
},
Blockly.Blocks.serial_write = {
    init: function() {
        this.appendValueInput("data").setCheck(null).appendField("串口写入"),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.serial_write = function(t) {
    return "s.write(bytearray([" + Blockly.Python.valueToCode(t, "data", Blockly.Python.ORDER_ATOMIC) + "]))\n"
},
Blockly.Blocks.serial_read = {
    init: function() {
        this.appendValueInput("len").setCheck("Number").appendField("串口读取  长度:"),
        this.setOutput(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.serial_read = function(t) {
    return ["s.read(" + Blockly.Python.valueToCode(t, "len", Blockly.Python.ORDER_ATOMIC) + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.excapp_audio_input_device = {
    init: function() {
        this.appendDummyInput().appendField(audio_input_device).appendField(new Blockly.FieldDropdown([["4mic" + microphone, "seeed"], ["6mic" + microphone, "respeaker"]]), "input_name"),
        this.setOutput(!0, "String"),
        this.setColour("#ff0095"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_audio_input_device = function(t) {
    var e = t.getFieldValue("input_name");
    return ["4mic麦克风" === e ? "seeed": e, Blockly.Python.ORDER_ATOMIC]
},
Blockly.Blocks.excapp_ai_voice_asr = {
    init: function() {
        this.appendDummyInput().appendField(asr),
        this.appendValueInput("input_name").setCheck("String").appendField(audio_input_device),
        this.setOutput(!0, null),
        this.setColour("#ff0095"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_ai_voice_asr = function(t) {
    var e = (Blockly.Python.valueToCode(t, "appid", Blockly.Python.ORDER_ATOMIC), Blockly.Python.valueToCode(t, "input_name", Blockly.Python.ORDER_ATOMIC));
    Blockly.Python.valueToCode(t, "encoding", Blockly.Python.ORDER_ATOMIC);
    return define_excapp(),
    ["excapp.v2s(lib_file='libmsc.so',appid='5948e6e8',input_name='" + e + "',encoding='GBK')", Blockly.Python.ORDER_ATOMIC]
},
Blockly.Blocks.excapp_encoding = {
    init: function() {
        this.appendDummyInput().appendField(encoding_type).appendField(new Blockly.FieldDropdown([["UTF-8", "UTF8"], ["GBK", "GBK"], ["ASCII", "ASCII"]]), "encoding"),
        this.setOutput(!0, null),
        this.setColour("#ff0095"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_encoding = function(t) {
    return [t.getFieldValue("encoding"), Blockly.Python.ORDER_ATOMIC]
},
Blockly.Blocks.excapp_ai_voice_tts_init = {
    init: function() {
        this.appendDummyInput().appendField("合成初始化"),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#ff0095"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_ai_voice_tts_init = function(t) {
    Blockly.Python.valueToCode(t, "rate", Blockly.Python.ORDER_ATOMIC),
    Blockly.Python.valueToCode(t, "channels", Blockly.Python.ORDER_ATOMIC),
    Blockly.Python.valueToCode(t, "sample_width", Blockly.Python.ORDER_ATOMIC);
    define_excapp();
    var e = "rate=16000\n";
    return e += "channels=1\n",
    e += "sample_width=2\n"
},
Blockly.Blocks.excapp_ai_voice_tts = {
    init: function() {
        this.appendDummyInput().appendField(tts),
        this.appendValueInput("voice_name").setCheck("String").appendField(tts_speaker),
        this.appendValueInput("text").setCheck("String").appendField(tts_str),
        this.setOutput(!0, null),
        this.setColour("#ff0095"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_ai_voice_tts = function(t) {
    var e = (Blockly.Python.valueToCode(t, "appid", Blockly.Python.ORDER_ATOMIC), Blockly.Python.valueToCode(t, "voice_name", Blockly.Python.ORDER_ATOMIC)),
    l = Blockly.Python.valueToCode(t, "text", Blockly.Python.ORDER_ATOMIC);
    define_excapp();
    var n = "excapp.s2v(";
    return n += "lib_file='libmsc.so',",
    n += "voice_name='" + e + "',",
    n += "appid='5948e6e8',",
    n += "text=" + l + ")",
    [n, Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.excapp_ai_voice_tts_voice_name = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["小燕", "xiaoyan"], ["燕平", "yanping"], ["晓峰", "xiaofeng"], ["晓婧", "jinger"], ["唐老鸭", "donaldduck"], ["许小宝", "babyxu"], ["楠楠", "nannan"], ["晓梦", "xiaomeng"], ["晓琳", "xiaolin"], ["晓倩", "xiaoqian"], ["晓蓉", "xiaorong"], ["小坤", "xiaokun"]]), "voice_name"),
        this.setOutput(!0, null),
        this.setColour("#ff0095"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_ai_voice_tts_voice_name = function(t) {
    var e = t.getFieldValue("voice_name");
    return ["小燕" == e ? "xiaoyan": e, Blockly.Python.ORDER_ATOMIC]
},
Blockly.Blocks.excapp_aiui = {
    init: function() {
        this.appendValueInput("text").setCheck("String").appendField(aiui),
        this.appendValueInput("only_text").setCheck("Boolean").appendField(aiui_onlytext),
        this.setOutput(!0, null),
        this.setColour(270),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_aiui = function(t) {
    var e = (Blockly.Python.valueToCode(t, "appid", Blockly.Python.ORDER_ATOMIC), Blockly.Python.valueToCode(t, "apikey", Blockly.Python.ORDER_ATOMIC), Blockly.Python.valueToCode(t, "text", Blockly.Python.ORDER_ATOMIC)),
    l = Blockly.Python.valueToCode(t, "only_text", Blockly.Python.ORDER_ATOMIC);
    return define_excapp(),
    ["excapp.aiui(text=" + e + ",appid='5a03c803',apikey='cf17501d6fcd427cbb521de465d99fe6',only_text=" + l + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.translate = {
    init: function() {
        this.appendDummyInput().appendField(from__),
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["自动识别", "'auto'"], ["简中", "'zh'"], ["英文", "'en'"], ["繁中", "'cht'"]]), "from"),
        this.appendDummyInput().appendField(translate__),
        this.appendValueInput("text").setCheck("String"),
        this.appendDummyInput().appendField(to__),
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["中文", "'zh'"], ["英文", "'en'"], ["日文", "'jp'"], ["文言文", "'wyw'"], ["繁中", "'cht'"]]), "to"),
        this.setInputsInline(!0),
        this.setOutput(!0, null),
        this.setColour(30),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.translate = function(t) {
    define_excapp();
    var e = t.getFieldValue("from"),
    l = Blockly.Python.valueToCode(t, "text", Blockly.Python.ORDER_ATOMIC);
    return ["excapp.translate(from_lang=" + e + ",to_lang=" + t.getFieldValue("to") + ",text=" + l + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.excapp_samepeople = {
    init: function() {
        this.appendValueInput("imagepath1").setCheck("String").appendField(face_comp + " " + image_path + " "),
        this.appendValueInput("imagepath2").setCheck("String").appendField("路径"),
        this.setInputsInline(!0),
        this.setOutput(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_samepeople = function(t) {
    var e = Blockly.Python.valueToCode(t, "imagepath1", Blockly.Python.ORDER_ATOMIC),
    l = Blockly.Python.valueToCode(t, "imagepath2", Blockly.Python.ORDER_ATOMIC);
    return define_excapp(),
    ["excapp.IsOneMan(path1=" + e + ",path2=" + l + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.excapp_isface = {
    init: function() {
        this.appendDummyInput().appendField(face_rec),
        this.appendValueInput("imagepath").setCheck("String").appendField(image_path),
        this.setOutput(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_isface = function(t) {
    var e = Blockly.Python.valueToCode(t, "imagepath", Blockly.Python.ORDER_ATOMIC);
    return define_excapp(),
    ["excapp.IsFace(path=" + e + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.excapp_shu = {
    init: function() {
        this.appendDummyInput().appendField(shot),
        this.appendValueInput("imagepath").setCheck("String").appendField(image_path),
        this.setOutput(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_shu = function(t) {
    var e = Blockly.Python.valueToCode(t, "imagepath", Blockly.Python.ORDER_ATOMIC);
    return define_excapp(),
    ["excapp.Shutter(path=" + e + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.ocr = {
    init: function() {
        this.appendDummyInput().appendField(ocr),
        this.appendValueInput("path").appendField(image_path).setCheck("String"),
        this.setOutput(!0, "Array"),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.ocr = function(t) {
    var e = Blockly.Python.valueToCode(t, "path", Blockly.Python.ORDER_ATOMIC);
    return define_excapp(),
    ["excapp.recognizeWord(apikey='pWK6gNVnBvOWDStRjNLMGEBg',secretkey='W6TXnRGG4SAQGDL1bLm6jDZFFXviYR5n',path=" + e + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.animalrec = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([[animal_rec, "动物识别"], ["植物识别", "植物识别"]]), "type"),
        this.appendValueInput("path").appendField(image_path).setCheck("String"),
        this.setOutput(!0, "Array"),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.animalrec = function(t) {
    var e = t.getFieldValue("type"),
    l = Blockly.Python.valueToCode(t, "path", Blockly.Python.ORDER_ATOMIC);
    return define_excapp(),
    ["excapp.WhatAnimal(apikey='oAOmwfY73kZQegVNY3AP42n0',secretkey='FAcu8t3zyFwdBmfYT7FahnUS57vGHKHB',path=" + l + ',type="' + e + '")', Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.smile = {
    init: function() {
        this.appendDummyInput().appendField("微笑识别"),
        this.appendValueInput("path").appendField("图片路径").setCheck("String"),
        this.setOutput(!0, "String"),
        this.setColour(30),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.smile = function(t) {
    var e = Blockly.Python.valueToCode(t, "path", Blockly.Python.ORDER_ATOMIC);
    return define_excapp(),
    ["excapp.Smile(apikey='iDvV8He8xvoyMBq5vHaj4fw9',secretkey='GWigHPtIfkr7t1UMgE3yDU4dKMCW1kUX',path=" + e + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.excapp_audio_player = {
    init: function() {
        this.appendDummyInput().appendField(audio_player),
        this.appendDummyInput().appendField(device_name).appendField(new Blockly.FieldDropdown([["默认设备", "default"], ["4mic麦克风", "seeed"], ["6mic麦克风", "respeaker"]]), "player_name"),
        this.appendValueInput("audio").setCheck(null).appendField(audio_data),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#ff0095"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.excapp_audio_player = function(t) {
    var e = t.getFieldValue("player_name");
    t.getFieldValue("rate"),
    t.getFieldValue("channels"),
    t.getFieldValue("sample_width");
    return 'pl = excapp.Player()\npl.select_device(type=False, name="' + e + "\")\npl.get_stream()\npl.playlist(rate='16000',\n    channels='1',\n    sample_width='2',\n    playlist=" + Blockly.Python.valueToCode(t, "audio", Blockly.Python.ORDER_ATOMIC) + ")\n"
},
Blockly.Blocks.init_bot = {
    init: function() {
        this.appendDummyInput().appendField(init__ + "MegaPi"),
        this.appendDummyInput().appendField(serial__).appendField(new Blockly.FieldDropdown([["USB", "'/dev/ttyUSB0'"], ["GPIO", "'/dev/ttyS0'"]]), "port"),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#b4b4b4"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.init_bot = function(t) {
    var e = t.getFieldValue("port");
    return define_megapi(),
    "bot=viMegaPi()\nbot.connect(" + e + ")\n"
},
Blockly.Blocks.encodermotormove = {
    init: function() {
        this.appendDummyInput().appendField(encoder_motor),
        this.appendValueInput("speed").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(speed__),
        this.appendValueInput("dis").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(distance__),
        this.appendDummyInput().appendField(port__).appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "port"),
        this.setInputsInline(!1),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#b4b4b4"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.encodermotormove = function(t) {
    var e = Blockly.Python.valueToCode(t, "speed", Blockly.Python.ORDER_ATOMIC),
    l = Blockly.Python.valueToCode(t, "dis", Blockly.Python.ORDER_ATOMIC);
    return "bot.encoderMotorMove(" + t.getFieldValue("port") + "," + e + "," + l + ")\n"
},
Blockly.Blocks.ultrasonic = {
    init: function() {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(ultrasonic_sensor),
        this.appendDummyInput().appendField(port__).appendField(new Blockly.FieldDropdown([["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]), "portsonic"),
        this.setInputsInline(!1),
        this.setOutput(!0, "Number"),
        this.setColour("#b4b4b4"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.ultrasonic = function(t) {
    return ["bot.ultraSonicRead(port=" + t.getFieldValue("portsonic") + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.linefollow = {
    init: function() {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(linefoller),
        this.appendDummyInput().appendField(port__).appendField(new Blockly.FieldDropdown([["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]), "port"),
        this.setOutput(!0, "Number"),
        this.setColour("#b4b4b4"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.linefollow = function(t) {
    return ["bot.lineFollowRead(port=" + t.getFieldValue("port") + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.servo = {
    init: function() {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField("舵机"),
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(port__).appendField(new Blockly.FieldDropdown([["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]), "port"),
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("子接口").appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"]]), "slot"),
        this.appendValueInput("angle").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("角度"),
        this.setInputsInline(!1),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#b4b4b4"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.servo = function(t) {
    return "bot.servoRun(port=" + t.getFieldValue("port") + ",slot=" + t.getFieldValue("slot") + ",angle=" + Blockly.Python.valueToCode(t, "angle", Blockly.Python.ORDER_ATOMIC) + ")\n"
},
Blockly.Blocks.encodemotorrun = {
    init: function() {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(encoder_motor + run__),
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(port__).appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "port"),
        this.appendValueInput("speed").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(speed__),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#b4b4b4"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.encodemotorrun = function(t) {
    return "bot.encoderMotorRun(port=" + t.getFieldValue("port") + ",speed=" + Blockly.Python.valueToCode(t, "speed", Blockly.Python.ORDER_ATOMIC) + ")\n"
},
Blockly.Blocks.motorrun = {
    init: function() {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(dc_motor + run__),
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(port__).appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "port"),
        this.appendValueInput("speed").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(speed__),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#b4b4b4"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.motorrun = function(t) {
    return "bot.motorRun(port=" + t.getFieldValue("port") + ",speed=" + Blockly.Python.valueToCode(t, "speed", Blockly.Python.ORDER_ATOMIC) + ")\n"
},
Blockly.Blocks.compass = {
    init: function() {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(compass_soner),
        this.appendDummyInput().appendField(port__).appendField(new Blockly.FieldDropdown([["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]), "port"),
        this.setOutput(!0, "Number"),
        this.setColour("#b4b4b4"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.compass = function(t) {
    return ["bot.compassRead(port=" + t.getFieldValue("port") + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.melight = {
    init: function() {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField(lightsensor),
        this.appendDummyInput().appendField(port__).appendField(new Blockly.FieldDropdown([["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]), "port"),
        this.setOutput(!0, "Number"),
        this.setColour("#b4b4b4"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.melight = function(t) {
    return ["bot.lightSensorRead(port=" + t.getFieldValue("port") + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.metemp = {
    init: function() {
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField("温度传感器"),
        this.appendDummyInput().appendField("接口").appendField(new Blockly.FieldDropdown([["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]), "port"),
        this.setOutput(!0, "Number"),
        this.setColour("#b4b4b4"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.metemp = function(t) {
    return ["bot.temperatureRead(port=" + t.getFieldValue("port") + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.ez_imgrec = {
    init: function() {
        this.appendValueInput("delay").setCheck("Number"),
        this.appendDummyInput().appendField("秒后拍照,然后进行"),
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["面部检测", "'面部检测'"], ["面部对比", "'面部对比'"], ["动物识别", "'动物识别'"], ["文字识别", "'文字识别'"], ["表情感知", "'表情感知'"], ["颜值魔镜", "'颜值魔镜'"]]), "type"),
        this.setInputsInline(!0),
        this.setOutput(!0, "Array"),
        this.setColour(105),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.ez_imgrec = function(t) {
    var e = Blockly.Python.valueToCode(t, "delay", Blockly.Python.ORDER_ATOMIC),
    l = t.getFieldValue("type"),
    n = "";
    return define_excapp_ez(),
    n = "'面部对比'" == l ? "excapp_easier.compareFace(delay=" + e + ")": "excapp_easier.recog(type=" + l + ",delay=" + e + ")",
    [n, Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.ifv2s = {
    init: function() {
        this.appendDummyInput().appendField("如果听到"),
        this.appendValueInput("substr").setCheck("String"),
        this.appendDummyInput(),
        this.appendStatementInput("sub_code").setCheck(null).appendField("就"),
        this.setInputsInline(!0),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(0),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.ifv2s = function(t) {
    var e = Blockly.Python.valueToCode(t, "substr", Blockly.Python.ORDER_ATOMIC),
    l = Blockly.Python.statementToCode(t, "sub_code");
    return define_excapp_ez(),
    "if excapp_easier.litsenJudge(substr=" + e + ",appid='5948e6e8',input_name='seeed',encoding='GBK',lib_file=\"libmsc.so\"):\n" + l
},
Blockly.Blocks.dump_face = {
    init: function() {
        this.appendDummyInput().appendField(dump_face__),
        this.appendValueInput("path").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(file_path),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#ff8000"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.dump_face = function(t) {
    return "fmt.dump(" + Blockly.Python.valueToCode(t, "path", Blockly.Python.ORDER_ATOMIC) + ")\n"
},
Blockly.Blocks.new_face_rec = {
    init: function() {
        this.appendDummyInput().appendField(new_face_reco),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#ff8000"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.new_face_rec = function(t) {
    return define_ml(),
    "vf=VIFace()\n"
},
Blockly.Blocks.load_face_model = {
    init: function() {
        this.appendDummyInput().appendField(load_face_model__),
        this.appendValueInput("path").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("路径"),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#ff8000"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.load_face_model = function(t) {
    return "vf.load(dir=" + Blockly.Python.valueToCode(t, "path", Blockly.Python.ORDER_ATOMIC) + ")\n"
},
Blockly.Blocks.reco_face = {
    init: function() {
        this.appendDummyInput().appendField(reco_face__),
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(dev__).appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"]]), "device"),
        this.appendValueInput("timeout").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(timeout__),
        this.setOutput(!0, "Array"),
        this.setColour("#ff8000"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.reco_face = function(t) {
    return ["vf.start_reco(device=" + t.getFieldValue("device") + ",timeout=" + Blockly.Python.valueToCode(t, "timeout", Blockly.Python.ORDER_ATOMIC) + ")", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.new_trainer = {
    init: function() {
        this.appendDummyInput().appendField(new_trainer__),
        this.setInputsInline(!1),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#ff8000"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.new_trainer = function(t) {
    define_ml();
    return "fmt=Face_model()\n"
},
Blockly.Blocks.add_face = {
    init: function() {
        this.appendDummyInput().appendField(add_face_),
        this.appendValueInput("path").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(image_path),
        this.appendValueInput("label").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(img_label),
        this.setInputsInline(!1),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour("#ff8000"),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.add_face = function(t) {
    var e = Blockly.Python.valueToCode(t, "path", Blockly.Python.ORDER_ATOMIC),
    l = Blockly.Python.valueToCode(t, "label", Blockly.Python.ORDER_ATOMIC);
    return define_ml(),
    'fmt.add_face(' + e + ',' + l + ')\n'
};
var define_wx = function() {
    Blockly.Python.definitions_.WX = "from wxpy import *"
};
Blockly.Blocks.wx_login = {
    init: function() {
        this.appendDummyInput().appendField(wx_login__),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.wx_login = function(t) {
    define_wx();
    return 'wxbot = Bot(qr_path="/tmp/ajax-cam.jpg")\nwxfriends = wxbot.friends()\n'
},
Blockly.Blocks.wx_getfri = {
    init: function() {
        this.appendDummyInput().appendField(wx_search_fri),
        this.appendValueInput("name").setCheck("String").appendField(wx_fri_name),
        this.setOutput(!0, "Array"),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.wx_getfri = function(t) {
    return ["wxfriends.search( " + Blockly.Python.valueToCode(t, "name", Blockly.Python.ORDER_ATOMIC) + " )", Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.wx_send = {
    init: function() {
        this.appendDummyInput().appendField(wx_sen_msg),
        this.appendValueInput("friend").setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField(wx_fri_obj),
        this.appendValueInput("msg").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("消息"),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.wx_send = function(t) {
    return Blockly.Python.valueToCode(t, "friend", Blockly.Python.ORDER_ATOMIC) + ".send(" + Blockly.Python.valueToCode(t, "msg", Blockly.Python.ORDER_ATOMIC) + ")\n"
},
Blockly.Blocks.wx_proc_msg = {
    init: function() {
        this.appendDummyInput().appendField(wx_proc_msg__),
        this.appendValueInput("fri").setCheck(null).appendField(wx_fri_obj + wx_en_null),
        this.appendStatementInput("func").setCheck(null),
        this.setInputsInline(!1),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.wx_proc_msg = function(t) {
    var e = Blockly.Python.valueToCode(t, "fri", Blockly.Python.ORDER_ATOMIC),
    l = Blockly.Python.statementToCode(t, "func");
    if (l) var n = "@wxbot.register(" + e + ")\ndef fun_" + Math.random().toString(36).substring(2) + "(wxmsg):\n" + l;
    else var n = "@wxbot.register(" + e + ")\ndef fun_" + Math.random().toString(36).substring(2) + "(wxmsg):\n  pass";
    return n
},
Blockly.Blocks.wx_msgobj = {
    init: function() {
        this.appendDummyInput().appendField(wx_msg_obj),
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([[wx_msg_content, ".text"], [wx_sender_name, ".sender.name"], [wx_sender_obj, ".sender"], [wx_isat, ".is_at"], [wx_filename, ".file_name"]]), "opt"),
        this.setInputsInline(!1),
        this.setOutput(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.wx_msgobj = function(t) {
    return ["wxmsg" + t.getFieldValue("opt"), Blockly.Python.ORDER_NONE]
},
Blockly.Blocks.wx_msg_get_file = {
    init: function() {
        this.appendDummyInput().appendField(wx_file_saver),
        this.appendValueInput("save_path").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(file_path),
        this.setInputsInline(!1),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.wx_msg_get_file = function(t) {
    return "wxmsg.get_file(save_path=" + Blockly.Python.valueToCode(t, "save_path", Blockly.Python.ORDER_ATOMIC) + ")\n"
},
Blockly.Blocks.wx_send_img = {
    init: function() {
        this.appendDummyInput().appendField(wx_img_send),
        this.appendValueInput("friend").setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField(wx_fri_obj),
        this.appendValueInput("msg").setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField(image_path),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.wx_send_img = function(t) {
    return Blockly.Python.valueToCode(t, "friend", Blockly.Python.ORDER_ATOMIC) + ".send_image(" + Blockly.Python.valueToCode(t, "msg", Blockly.Python.ORDER_ATOMIC) + ")\n"
},
Blockly.Blocks.wx_logout = {
    init: function() {
        this.appendDummyInput().appendField(wx_logout__),
        this.setInputsInline(!1),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(230),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.wx_logout = function(t) {
    return "wxbot.logout()\n"
},
Blockly.Blocks.wx_join = {
    init: function() {
        this.appendDummyInput().appendField(wx_join__),
        this.appendDummyInput().appendField(wx_join_warn),
        this.setInputsInline(!1),
        this.setPreviousStatement(!0, null),
        this.setNextStatement(!0, null),
        this.setColour(0),
        this.setTooltip(""),
        this.setHelpUrl("")
    }
},
Blockly.Python.wx_join = function(t) {
    return "wxbot.join()\n"
};
let define_arduino = function() {
    Blockly.Python.definitions_.ARDUINO = "from arduino.arduino import Arduino"
};
Blockly.Blocks['arduino_init'] = {
    init: function() {
        this.appendDummyInput().appendField(conn + "arduino");
        this.appendDummyInput().appendField(on_port).appendField(new Blockly.FieldDropdown([["GPIO", "'/dev/ttyS0'"], ["ACM0", "'/dev/ttyACM0'"], ["ACM1", "'/dev/ttyACM1'"], ["USB0", "'/dev/ttyUSB0'"], ["USB1", "'/dev/ttyUSB1'"]]), "port");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff0000");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['arduino_init'] = function(block) {
    define_arduino();
    let dropdown_port = block.getFieldValue('port');
    // TODO: Assemble JavaScript into code variable.
    let code = 'arduinobot=Arduino(port=' + dropdown_port + ');\n';
    return code;
};
Blockly.Blocks['arduino_sethigh'] = {
    init: function() {
        this.appendValueInput("pin").setCheck("Number").appendField(set_high);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff0000");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['arduino_sethigh'] = function(block) {
    let value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    let code = 'arduinobot.setHigh(pin=' + value_pin + ');\n';
    return code;
};
Blockly.Blocks['arduino_setlow'] = {
    init: function() {
        this.appendValueInput("pin").setCheck("Number").appendField(set_low);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff0000");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['arduino_setlow'] = function(block) {
    let value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    let code = 'arduinobot.setLow(pin=' + value_pin + ');\n';
    return code;
};

Blockly.Blocks['arduino_ana_w'] = {
    init: function() {
        this.appendDummyInput().appendField(analog_out);
        this.appendValueInput("pin").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(pin_num);
        this.appendValueInput("value").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(analog_var);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff0000");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['arduino_ana_w'] = function(block) {
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'arduinobot.analogWrite(pin=' + value_pin + ',value=' + value_value + ')\n';
    return code;
};

Blockly.Blocks['arduino_ana_r'] = {
    init: function() {
        this.appendDummyInput().appendField(analog_in);
        this.appendValueInput("pin").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(pin_num);
        this.setOutput(true, null);
        this.setColour("#ff0000");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['arduino_ana_r'] = function(block) {
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'arduinobot.analogRead(pin=' + value_pin + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['arduino_setout'] = {
    init: function() {
        this.appendValueInput("pin_array").setCheck("Array").appendField(set_in);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff0000");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['arduino_setout'] = function(block) {
    var value_pin_array = Blockly.Python.valueToCode(block, 'pin_array', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'arduinobot.output(pinArray=' + value_pin_array + ')\n';
    return code;
};
Blockly.Blocks['arduino_dr'] = {
    init: function() {
        this.appendValueInput("pin").setCheck("Number").appendField(digital_in);
        this.setOutput(true, null);
        this.setColour("#ff0000");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['arduino_dr'] = function(block) {
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'arduinobot.getState(' + value_pin + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Blocks['ez_imgrec'] = {
    init: function() {
        this.appendValueInput("delay").setCheck("Number");
        this.appendDummyInput().appendField(cap_then_rec);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([[reco_face__, "'面部检测'"], [face_comp, "'面部对比'"], [animal_rec, "'动物识别'"], [ocr, "'文字识别'"], [emotion_rec, "'表情感知'"], ["颜值魔镜", "'颜值魔镜'"]]), "type");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(105);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['ez_imgrec'] = function(block) {
    let value_delay = Blockly.Python.valueToCode(block, 'delay', Blockly.Python.ORDER_ATOMIC);
    let dropdown_type = block.getFieldValue('type');
    let code = '';
    define_excapp_ez();
    if (dropdown_type == "'面部对比'") {
        code = 'excapp_easier.compareFace(delay=' + value_delay + ')'
    } else {
        code = 'excapp_easier.recog(type=' + dropdown_type + ',delay=' + value_delay + ')';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Blocks['ifv2s'] = {
    init: function() {
        this.appendDummyInput().appendField(if_listen);
        this.appendValueInput("substr").setCheck("String");
        this.appendDummyInput();
        this.appendStatementInput("sub_code").setCheck(null).appendField("就");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['ifv2s'] = function(block) {
    let value_substr = Blockly.Python.valueToCode(block, 'substr', Blockly.Python.ORDER_ATOMIC);
    let statements_sub_code = Blockly.Python.statementToCode(block, 'sub_code');
    // TODO: Assemble Python into code variable.
    define_excapp_ez();
    let code = 'if excapp_easier.litsenJudge(substr=' + value_substr + ',appid=\'5948e6e8\',input_name=\'seeed\',encoding=\'GBK\',lib_file="libmsc.so"):\n' + statements_sub_code;
    return code;
};

Blockly.Blocks['string_encode'] = {
    init: function() {
        this.appendValueInput("string_encode").setCheck("String").appendField(s2b);
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['string_encode'] = function(block) {
    let value_string_encode = Blockly.Python.valueToCode(block, 'string_encode', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = value_string_encode + '.encode()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Blocks['string_decode'] = {
    init: function() {
        this.appendValueInput("string_decode").setCheck(null).appendField(b2s);
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['string_decode'] = function(block) {
    let value_string_decode = Blockly.Python.valueToCode(block, 'string_decode', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = value_string_decode + '.decode()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['b2h'] = {
    init: function() {
        this.appendValueInput("bin").setCheck(null).appendField(b2h_s);
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['b2h'] = function(block) {
    let value_string_bin = Blockly.Python.valueToCode(block, 'bin', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = value_string_bin + '.hex()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
let define_mqtt = function() {
    Blockly.Python.definitions_.MQTT = "from paho.mqtt.client import Client as MQTT"
};
Blockly.Blocks['mqtt_spawn'] = {
    init: function() {
        this.appendDummyInput().appendField(new_mqtt);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['mqtt_spawn'] = function(block) {
    // TODO: Assemble Python into code variable.
    define_mqtt();
    let code = 'client=MQTT()\n';
    return code;
};

Blockly.Blocks['mqtt_reg_msg'] = {
    init: function() {
        this.appendStatementInput("sub_code").setCheck(null).appendField(reg_msg_callback);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['mqtt_reg_msg'] = function(block) {
    var statements_sub_code = Blockly.Python.statementToCode(block, 'sub_code');
    // TODO: Assemble Python into code variable.
    if ( !! statements_sub_code) {
        var code = '@client.reg_on_messqge()\n' + 'def fun_' + Math.random().toString(36).substring(2) + '(client,userdata,mqttmsg):\n' + statements_sub_code;
    } else {
        var code = '@client.reg_on_messqge()\n' + 'def fun_' + Math.random().toString(36).substring(2) + '(client,userdata,mqttmsg):\n' + "  pass";
    }
    return code;
    return code;
};

Blockly.Blocks['mqttmsg'] = {
    init: function() {
        this.appendDummyInput().appendField(mqtt_msg_obj_);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["主题", ".topic"], ["文本消息", ".payload.decode()"], ["二进制消息", ".payload"]]), "opt");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Python['mqttmsg'] = function(block) {
    var dropdown_opt = block.getFieldValue('opt');
    // TODO: Assemble Python into code variable.
    var code = 'mqttmsg' + dropdown_opt;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['mqtt_subscribe'] = {
    init: function() {
        this.appendValueInput("topic").setCheck("String").appendField(sub_mqtt_topic_);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['mqtt_subscribe'] = function(block) {
    var value_topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'client.subscribe(' + value_topic + ')\n';
    return code;
};
Blockly.Blocks['mqtt_pub'] = {
    init: function() {
        this.appendDummyInput().appendField("发布");
        this.appendValueInput("topic").setCheck("String").appendField("主题");
        this.appendValueInput("msg").setCheck(null).appendField("消息");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['mqtt_pub'] = function(block) {
    var value_topic = Blockly.Python.valueToCode(block, 'topic', Blockly.Python.ORDER_ATOMIC);
    var value_msg = Blockly.Python.valueToCode(block, 'msg', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'client.publish(' + value_topic + ', ' + value_msg + ')\n';
    return code;
};

Blockly.Blocks['mqtt_start'] = {
    init: function() {
        this.appendDummyInput().appendField(client_start);
        this.appendValueInput("ip").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("IP");
        this.appendValueInput("port").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(port__);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['mqtt_start'] = function(block) {
    var value_ip = Blockly.Python.valueToCode(block, 'ip', Blockly.Python.ORDER_ATOMIC);
    var value_port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'client.connect_async(' + value_ip + ', ' + value_port + ', 60)\n' + "client.loop_start()\n";
    return code;
};
Blockly.Blocks['an2cn'] = {
    init: function() {
        this.appendValueInput("in_num").setCheck(null).appendField("数字转中文");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['an2cn'] = function(block) {
    var value_in_num = Blockly.Python.valueToCode(block, 'in_num', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    define_cn2an();
    var code = 'cn2an.an2cn(' + value_in_num + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['cn2an'] = {
    init: function() {
        this.appendValueInput("in_cn").setCheck(null).appendField("中文转数字");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['cn2an'] = function(block) {
    var value_in_cn = Blockly.Python.valueToCode(block, 'in_cn', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    define_cn2an();
    var code = 'cn2an.cn2an(' + value_in_cn + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

let define_vi_tfc = function() {
    Blockly.Python.definitions_.VTFC = "from VI_tf_client import *"
};

Blockly.Blocks['tfc_fc'] = {
    init: function() {
        this.appendDummyInput().appendField(rec_by_dnn_cam);
        this.appendDummyInput().appendField(start_tfs_first);
        this.setOutput(true, "Array");
        this.setColour("#ff8000");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['tfc_fc'] = function(block) {
    // TODO: Assemble Python into code variable.
    define_vi_tfc();
    var code = 'object_detect_camera()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['tfc_ff'] = {
    init: function() {
        this.appendDummyInput().appendField(rec_by_dnn_file);
        this.appendDummyInput().appendField(start_tfs_first);
        this.appendValueInput("path").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("路径");
        this.setOutput(true, "Array");
        this.setColour("#ff8000");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['tfc_ff'] = function(block) {
    // TODO: Assemble Python into code variable.
    define_vi_tfc();
    var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);
    var code = 'object_detect_file(path=' + value_path + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

