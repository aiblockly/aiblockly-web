'use strict';

// 初始化语音合成的相关变量
Blockly.Blocks['excapp_tts_init'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("语音合成初始化");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_tts_init'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'rate = 16000\nchannels = 1\nsample_width = 2\n\n';
    return code;
};

// 合成语音，并返回合成后的语音数据
Blockly.Blocks['excapp_tts'] = {
    init: function () {
        this.appendValueInput("text")
            .setCheck("String")
            .appendField("要说的话");
        this.appendDummyInput();
        this.setOutput(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_tts'] = function (block) {
    let value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'excapp.s2v(\n    lib_file=\'libmsc.so\',\n    appid=\'5948e6e8\',\n    text=' + value_text + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};


// 播放音频数据
Blockly.Blocks['excapp_play'] = {
    init: function () {
        this.appendValueInput("audio")
            .setCheck(null)
            .appendField("播放音频");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_play'] = function (block) {
    let value_audio = Blockly.Python.valueToCode(block, 'audio', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    let code = 'pl = excapp.Player()\npl.select_device(type=False, name=\'pnp\')\npl.get_stream()\npl.play(rate=rate,\n    channels=channels,\n    sample_width=sample_width,\n    data=' + value_audio + '[\'data\'])\n';
    return code;
};
