Blockly.Blocks['unsubscribe'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(96);
    this.appendValueInput('nameId')
        .setCheck('String')
        .appendField('nameId');
    this.appendDummyInput()
        .appendField('停止采集');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['unsubscribe'] = function(block) {
  var nameId = Blockly.Python.valueToCode(block, 'nameId', Blockly.Python.ORDER_ATOMIC) || '""';
  Blockly.Python.definitions_['ALVideoDeviceProxy']='myVideoDeviceProxy=ALProxy("ALVideoDevice","127.0.0.1",9559)';
  var code = 'myVideoDeviceProxy.unsubscribe(' + nameId+ ');\n';
  return code;
};

Blockly.Blocks['getImageRemote'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(96);
    this.appendValueInput('name')
        .setCheck('String')
        .appendField('name');
    this.appendDummyInput()
        .appendField("获取视频数据")
        .appendField("");
    this.setOutput(true, "Array");
    this.setTooltip('');
  }
};
Blockly.Python['getImageRemote'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC) || '""';
  Blockly.Python.definitions_['ALVideoDeviceProxy']='myVideoDeviceProxy=ALProxy("ALVideoDevice","127.0.0.1",9559)';
  var code = 'myVideoDeviceProxy.getImageRemote(' + name+ ');\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['subscribe'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(96);
    this.appendValueInput('gvmName')
        .setCheck('String')
        .appendField('gvmName');
    this.appendValueInput('resolution')
        .setCheck('Number')
        .appendField('resolution');
    this.appendValueInput('colorSpace')
        .setCheck('Number')
        .appendField('colorSpace');
    this.appendValueInput('fps')
        .setCheck('Number')
        .appendField('fps');
    this.appendDummyInput()
        .appendField("开始采集")
        .appendField("");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};
Blockly.Python['subscribe'] = function(block) {
  var gvmName = Blockly.Python.valueToCode(block, 'gvmName', Blockly.Python.ORDER_ATOMIC) || '"0"';
  var resolution = Blockly.Python.valueToCode(block, 'resolution', Blockly.Python.ORDER_ATOMIC) || '1';
  var colorSpace = Blockly.Python.valueToCode(block, 'colorSpace', Blockly.Python.ORDER_ATOMIC) || '11';
  var fps = Blockly.Python.valueToCode(block, 'fps', Blockly.Python.ORDER_ATOMIC) || '10';
  Blockly.Python.definitions_['ALVideoDeviceProxy']='myVideoDeviceProxy=ALProxy("ALVideoDevice","127.0.0.1",9559)';
  var code = 'myVideoDeviceProxy.subscribe(' + gvmName+ ',' + resolution+ ',' + colorSpace+ ',' + fps+ ');\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['setActiveCamera_1'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(96);
    this.appendValueInput('activecamera')
        .setCheck('Number')
        .appendField('activecamera');
    this.appendDummyInput()
        .appendField("设置摄像头")
        .appendField("");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};
Blockly.Python['setActiveCamera_1'] = function(block) {
  var activecamera = Blockly.Python.valueToCode(block, 'activecamera', Blockly.Python.ORDER_ATOMIC) || '0';
  Blockly.Python.definitions_['ALVideoDeviceProxy']='myVideoDeviceProxy=ALProxy("ALVideoDevice","127.0.0.1",9559)';
  var code = 'myVideoDeviceProxy.setActiveCamera(' + activecamera+ ');\n';
  return [code, Blockly.Python.ORDER_NONE];
};

