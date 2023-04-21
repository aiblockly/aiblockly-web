'use strict';

//
Blockly.Blocks['excapp_asr'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("语音识别");
        this.setOutput(true, null);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_asr'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'excapp.v2s(\n' +
        '    lib_file=\'libmsc.so\',\n' +
        '    appid=\'5948e6e8\',\n' +
        '    input_name=\'pnp\',\n' +
        '    encoding=\'gbk\'\n' +
        ')[-1]\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};