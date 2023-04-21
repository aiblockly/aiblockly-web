Blockly.Blocks['broadlink_discover'] = {
    init: function () {
        this.setHelpUrl('');
        this.setColour(200);
        this.appendValueInput('timeout')
            .setCheck('Number')
            .appendField('timeout');
        this.appendDummyInput()
            .appendField("discover")
            .appendField("");
        this.setOutput(true, "Array");
        this.setTooltip('');
    }
};
Blockly.Python['broadlink_discover'] = function (block) {
    var timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC) || '5';
    Blockly.Python.definitions_['broadlink'] = 'import broadlink';
    var code = 'broadlink.discover(timeout=' + timeout + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['broadlink_auth'] = {
    init: function () {
        this.setHelpUrl('');
        this.setColour(200);
        this.appendValueInput('device')
            .appendField('device');
        this.appendDummyInput()
            .appendField('连接')
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};
Blockly.Python['broadlink_auth'] = function (block) {
    var device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['broadlink'] = 'import broadlink';
    var code = 'devices[' + device + '].auth()\n';
    return code;
};


Blockly.Blocks['broadlink_enter_learning'] = {
    init: function () {
        this.setHelpUrl('');
        this.setColour(200);
        this.appendValueInput('device')
            .appendField('device');
        this.appendDummyInput()
            .appendField("接收红外协议")
            .appendField("");
        this.setOutput(true, "String");
        this.setTooltip('');
    }
};
Blockly.Python['broadlink_enter_learning'] = function (block) {
    var device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['broadlink'] = 'import broadlink';
    var code = 'devices[' + device + '].enter_learning()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['broadlink_send_data'] = {
    init: function () {
        this.setHelpUrl('');
        this.setColour(200);
        this.appendValueInput('device')
            .appendField('device');
        this.appendValueInput('ir_packet')
            .setCheck('String')
            .appendField('ir_packet');
        this.appendDummyInput()
            .appendField('发射红外协议')
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};
Blockly.Python['broadlink_send_data'] = function (block) {
    var device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_ATOMIC);
    var ir_packet = Blockly.Python.valueToCode(block, 'ir_packet', Blockly.Python.ORDER_ATOMIC) || '';
    Blockly.Python.definitions_['broadlink'] = 'import broadlink';
    var code = 'devices[' + device + '].send_data(' + ir_packet + ')\n';
    return code;
};

Blockly.Blocks['broadlink_set_power'] = {
    init: function () {
        this.setHelpUrl('');
        this.setColour(200);
        this.appendValueInput('device')
            .appendField('device');
        this.appendValueInput('power')
            .setCheck('Boolean')
            .appendField('power');
        this.appendDummyInput()
            .appendField('控制开关');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};
Blockly.Python['broadlink_set_power'] = function (block) {
    var device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_ATOMIC);
    var power = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_ATOMIC) || 'False';
    Blockly.Python.definitions_['broadlink'] = 'import broadlink';
    var code = 'devices[' + device + '].set_power(' + power + ')\n';
    return code;
};


Blockly.Blocks['broadlink_check_power'] = {
    init: function () {
        this.setHelpUrl('');
        this.setColour(200);
        this.appendValueInput('device')
            .appendField('device');
        this.appendDummyInput()
            .appendField("开关状态")
            .appendField("");
        this.setOutput(true, "Boolean");
        this.setTooltip('');
    }
};
Blockly.Python['broadlink_check_power'] = function (block) {
    var device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['broadlink'] = 'import broadlink';
    var code = 'devices[' + device + '].check_power()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['broadlink_check_sensors'] = {
    init: function () {
        this.setHelpUrl('');
        this.setColour(200);
        this.appendValueInput('device')
            .appendField('device');
        this.appendDummyInput()
            .appendField("传感器值")
            .appendField("");
        this.setOutput(true,);
        this.setTooltip('');
    }
};
Blockly.Python['broadlink_check_sensors'] = function (block) {
    var device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['broadlink'] = 'import broadlink';
    var code = 'devices[' + device + '].check_sensors()\n';
    return [code, Blockly.Python.ORDER_NONE];
};