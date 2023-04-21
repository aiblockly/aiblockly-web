Blockly.Blocks['getData'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(20);
    this.appendValueInput('key')
        .setCheck('String')
        .appendField('key');
    this.appendDummyInput()
        .appendField("获取数据")
        .appendField("");
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Python['getData'] = function(block) {
  var key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC) || '""';
  Blockly.Python.definitions_['ALMemoryProxy']='myMemoryProxy=ALProxy("ALMemory","127.0.0.1",9559)';
  var code = 'myMemoryProxy.getData(' + key+ ');\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['getListData'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(20);
    this.appendValueInput('keys')
        .setCheck('Array')
        .appendField('keys');
    this.appendDummyInput()
        .appendField("获取数据列表")
        .appendField("");
    this.setOutput(true, "Array");
    this.setTooltip('');
  }
};
Blockly.Python['getListData'] = function(block) {
  var keys = Blockly.Python.valueToCode(block, 'keys', Blockly.Python.ORDER_ATOMIC) || '[]';
  Blockly.Python.definitions_['ALMemoryProxy']='myMemoryProxy=ALProxy("ALMemory","127.0.0.1",9559)';
  var code = 'myMemoryProxy.getListData(' + keys+ ');\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['insertData'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(20);
    this.appendValueInput('key')
        .setCheck('String')
        .appendField('key');
    this.appendValueInput('value')
        .appendField('value');
	this.appendDummyInput()
        .appendField("载入数据")
        .appendField("");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['insertData'] = function(block) {
  var key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC) || '""';
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC) || '0';
  Blockly.Python.definitions_['ALMemoryProxy']='myMemoryProxy=ALProxy("ALMemory","127.0.0.1",9559)';
  var code = 'myMemoryProxy.insertData(' + key+ ',' + value+ ');\n';
  return code;
};

Blockly.Blocks['insertListData'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(20);
    this.appendValueInput('list')
        .setCheck('Array')
        .appendField('list');
	this.appendDummyInput()
        .appendField("载入数据列表");	
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['insertListData'] = function(block) {
  var list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC) || '[]';
  Blockly.Python.definitions_['ALMemoryProxy']='myMemoryProxy=ALProxy("ALMemory","127.0.0.1",9559)';
  var code = 'myMemoryProxy.insertListData(' + list+ ');\n';
  return code;
};