Blockly.Blocks['stopMove'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(90);
    this.appendDummyInput()
        .appendField('停止运动')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['stopMove'] = function(block) {
  Blockly.Python.definitions_['ALRobotPostureProxy']='myRobotPostureProxy=ALProxy("ALRobotPosture","127.0.0.1",9559)';
  var code = 'myRobotPostureProxy.stopMove();\n';
  return code;
};

Blockly.Blocks['setMaxTryNumber'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(90);
    this.appendValueInput('pMaxTryNumber')
        .setCheck('Number')
        .appendField('pMaxTryNumber');
    this.appendDummyInput()
        .appendField('setMaxTryNumber')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['setMaxTryNumber'] = function(block) {
  var pMaxTryNumber = Blockly.Python.valueToCode(block, 'pMaxTryNumber', Blockly.Python.ORDER_ATOMIC) || '0';
  Blockly.Python.definitions_['ALRobotPostureProxy']='myRobotPostureProxy=ALProxy("ALRobotPosture","127.0.0.1",9559)';
  var code = 'myRobotPostureProxy.setMaxTryNumber(' + pMaxTryNumber+ ');\n';
  return code;
};

Blockly.Blocks['goToPosture'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(90);
    this.appendValueInput('postureName')
        .setCheck('String')
        .appendField('postureName');
    this.appendValueInput('maxSpeedFraction')
        .setCheck('Number')
        .appendField('maxSpeedFraction');
    this.appendDummyInput()
        .appendField("做动作")
        .appendField("");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};
Blockly.Python['goToPosture'] = function(block) {
  var postureName = Blockly.Python.valueToCode(block, 'postureName', Blockly.Python.ORDER_ATOMIC) || '"Crouch"';
  var maxSpeedFraction = Blockly.Python.valueToCode(block, 'maxSpeedFraction', Blockly.Python.ORDER_ATOMIC) || '0.800000';
  Blockly.Python.definitions_['ALRobotPostureProxy']='myRobotPostureProxy=ALProxy("ALRobotPosture","127.0.0.1",9559)';
  var code = 'myRobotPostureProxy.goToPosture(' + postureName+ ',' + maxSpeedFraction+ ');\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['getPostureList'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("getPostureList")
        .appendField("");
    this.setOutput(true, "Array");
    this.setTooltip('');
  }
};
Blockly.Python['getPostureList'] = function(block) {
  Blockly.Python.definitions_['ALRobotPostureProxy']='myRobotPostureProxy=ALProxy("ALRobotPosture","127.0.0.1",9559)';
  var code = 'np.array(myRobotPostureProxy.getPostureList());\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['getPostureFamilyList'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("getPostureFamilyList")
        .appendField("");
    this.setOutput(true, "Array");
    this.setTooltip('');
  }
};
Blockly.Python['getPostureFamilyList'] = function(block) {
  Blockly.Python.definitions_['ALRobotPostureProxy']='myRobotPostureProxy=ALProxy("ALRobotPosture","127.0.0.1",9559)';
  var code = 'myRobotPostureProxy.getPostureFamilyList();\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['getPostureFamily'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(90);
    this.appendDummyInput()
        .appendField("getPostureFamily")
        .appendField("");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};
Blockly.Python['getPostureFamily'] = function(block) {
  Blockly.Python.definitions_['ALRobotPostureProxy']='myRobotPostureProxy=ALProxy("ALRobotPosture","127.0.0.1",9559)';
  var code = 'myRobotPostureProxy.getPostureFamily();\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['applyPosture'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(90);
    this.appendValueInput('postureName')
        .setCheck('String')
        .appendField('postureName');
    this.appendValueInput('maxSpeedFraction')
        .setCheck('Number')
        .appendField('maxSpeedFraction');
    this.appendDummyInput()
        .appendField("applyPosture")
        .appendField("");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};
Blockly.Python['applyPosture'] = function(block) {
  var postureName = Blockly.Python.valueToCode(block, 'postureName', Blockly.Python.ORDER_ATOMIC) || '"Crouch"';
  var maxSpeedFraction = Blockly.Python.valueToCode(block, 'maxSpeedFraction', Blockly.Python.ORDER_ATOMIC) || '0.000000';
  Blockly.Python.definitions_['ALRobotPostureProxy']='myRobotPostureProxy=ALProxy("ALRobotPosture","127.0.0.1",9559)';
  var code = 'myRobotPostureProxy.applyPosture(' + postureName+ ',' + maxSpeedFraction+ ');\n';
  return [code, Blockly.Python.ORDER_NONE];
};

