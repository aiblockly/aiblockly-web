Blockly.Blocks['unregisterAllTargets'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(192);
    this.appendDummyInput()
        .appendField('注销目标');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['unregisterAllTargets'] = function(block) {
  Blockly.Python.definitions_['ALTrackerProxy']='myTrackerProxy=ALProxy("ALTracker","127.0.0.1",9559)';
  var code = 'myTrackerProxy.unregisterAllTargets();\n';
  return code;
};

Blockly.Blocks['stopTracker'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(192);
    this.appendDummyInput()
        .appendField('停止追踪');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['stopTracker'] = function(block) {
  Blockly.Python.definitions_['ALTrackerProxy']='myTrackerProxy=ALProxy("ALTracker","127.0.0.1",9559)';
  var code = 'myTrackerProxy.stopTracker();\n';
  return code;
};

Blockly.Blocks['getTargetPosition'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(192);
    this.appendValueInput('frame')
        .setCheck('Number')
        .appendField('frame');
    this.appendDummyInput()
        .appendField("获取目标位置")
        .appendField("");
    this.setOutput(true, "Array");
    this.setTooltip('');
  }
};
Blockly.Python['getTargetPosition'] = function(block) {
  var frame = Blockly.Python.valueToCode(block, 'frame', Blockly.Python.ORDER_ATOMIC) || '0';
  Blockly.Python.definitions_['ALTrackerProxy']='myTrackerProxy=ALProxy("ALTracker","127.0.0.1",9559)';
  var code = 'myTrackerProxy.getTargetPosition(' + frame+ ');\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['isNewTargetDetected'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(192);
    this.appendDummyInput()
        .appendField("侦测到目标")
        .appendField("");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};
Blockly.Python['isNewTargetDetected'] = function(block) {
  Blockly.Python.definitions_['ALTrackerProxy']='myTrackerProxy=ALProxy("ALTracker","127.0.0.1",9559)';
  var code = 'myTrackerProxy.isNewTargetDetected();\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['setExtractorPeriod'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(192);
    this.appendValueInput('Effector')
        .setCheck('String')
        .appendField('Effector');
    this.appendValueInput('Period')
        .setCheck('Number')
        .appendField('Period');
    this.appendDummyInput()
        .appendField('设置运算视觉间隔（毫秒）');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['setExtractorPeriod'] = function(block) {
  var Effector = Blockly.Python.valueToCode(block, 'Effector', Blockly.Python.ORDER_ATOMIC) || '"RedBall"';
  var Period = Blockly.Python.valueToCode(block, 'Period', Blockly.Python.ORDER_ATOMIC) || '0';
  Blockly.Python.definitions_['ALTrackerProxy']='myTrackerProxy=ALProxy("ALTracker","127.0.0.1",9559)';
  var code = 'myTrackerProxy.setExtractorPeriod(' + Effector+ ',' + Period+ ');\n';
  return code;
};

Blockly.Blocks['track'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(192);
    this.appendValueInput('Effector')
        .setCheck('String')
        .appendField('Effector');
    this.appendDummyInput()
        .appendField('开始追踪');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['track'] = function(block) {
  var Effector = Blockly.Python.valueToCode(block, 'Effector', Blockly.Python.ORDER_ATOMIC) || '"RedBall"';
  Blockly.Python.definitions_['ALTrackerProxy']='myTrackerProxy=ALProxy("ALTracker","127.0.0.1",9559)';
  var code = 'myTrackerProxy.track(' + Effector+ ');\n';
  return code;
};

Blockly.Blocks['setMode'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(192);
    this.appendValueInput('Mode')
        .setCheck('String')
        .appendField('Mode');
    this.appendDummyInput()
        .appendField('设置模式');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['setMode'] = function(block) {
  var Mode = Blockly.Python.valueToCode(block, 'Mode', Blockly.Python.ORDER_ATOMIC) || '"Head"';
  Blockly.Python.definitions_['ALTrackerProxy']='myTrackerProxy=ALProxy("ALTracker","127.0.0.1",9559)';
  var code = 'myTrackerProxy.setMode(' + Mode+ ');\n';
  return code;
};

Blockly.Blocks['registerTarget_RedBall'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(192);
    this.appendValueInput('diameter')
        .setCheck('Number')
        .appendField('diameter of ball ');
    this.appendDummyInput()
        .appendField('注册红球追踪');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['registerTarget_RedBall'] = function(block) {
  var diameter  = Blockly.Python.valueToCode(block, 'diameter', Blockly.Python.ORDER_ATOMIC) || '0.000000';
  Blockly.Python.definitions_['ALTrackerProxy']='myTrackerProxy=ALProxy("ALTracker","127.0.0.1",9559)';
  var code = 'myTrackerProxy.registerTarget("RedBall",' + diameter + ');\n';
  return code;
};

Blockly.Blocks['registerTarget_Face'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(192);
    this.appendValueInput('Width')
        .setCheck('Number')
        .appendField('Width');
    this.appendDummyInput()
        .appendField('注册人脸追踪');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['registerTarget_Face'] = function(block) {
  var Width = Blockly.Python.valueToCode(block, 'Width', Blockly.Python.ORDER_ATOMIC) || '0.100000';
  Blockly.Python.definitions_['ALTrackerProxy']='myTrackerProxy=ALProxy("ALTracker","127.0.0.1",9559)';
  var code = 'myTrackerProxy.registerTarget("Face",' + Width+ ');\n';
  return code;
};

