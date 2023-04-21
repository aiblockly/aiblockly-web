Blockly.Blocks['file_read'] = {
    init: function () {
        this.setHelpUrl('');
        this.setColour(200);
        this.appendValueInput('filepath')
            .setCheck('String')
            .appendField('filepath');
        this.appendDummyInput()
            .appendField("读文件")
            .appendField("");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};
Blockly.Python['file_read'] = function (block) {
    var filepath = Blockly.Python.valueToCode(block, 'filepath', Blockly.Python.ORDER_ATOMIC) || '""';
    var code = 'with open(' + filepath + ',"rb+") as f:\n  data=f.read()\n';
    return code;
};

Blockly.Blocks['file_write'] = {
    init: function () {
        this.setHelpUrl('');
        this.setColour(200);
        this.appendValueInput('filepath')
            .setCheck('String')
            .appendField('filepath');
        this.appendValueInput('data')
            .setCheck('String')
            .appendField('data');
        this.appendDummyInput()
            .appendField("写文件")
            .appendField("");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};
Blockly.Python['file_write'] = function (block) {
    var filepath = Blockly.Python.valueToCode(block, 'filepath', Blockly.Python.ORDER_ATOMIC) || '""';
    var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC) || '""';
    var code = 'with open(' + filepath + ',"wb+") as f:\n  f.write(' + data + ')\n';
    return code;
};

Blockly.Blocks['time_sleep'] = {
    init: function () {
        this.setHelpUrl('');
        this.setColour(30);
        this.appendValueInput('sleeptime')
            .setCheck('Number')
            .appendField('sleeptime');
        this.appendDummyInput()
            .appendField("延时")
            .appendField("");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};
Blockly.Python['time_sleep'] = function (block) {
    var sleeptime = Blockly.Python.valueToCode(block, 'sleeptime', Blockly.Python.ORDER_ATOMIC) || '0';
    Blockly.Python.definitions_['timer'] = 'import time';
    var code = 'time.sleep(' + sleeptime + ')\n';
    return code;
};