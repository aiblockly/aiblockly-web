Blockly.Blocks['moveTo_3'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(41);
    this.appendValueInput('x')
        .setCheck('Number')
        .appendField('x');
    this.appendValueInput('y')
        .setCheck('Number')
        .appendField('y');
    this.appendValueInput('theta')
        .setCheck('Number')
        .appendField('theta');
    this.appendDummyInput()
        .appendField('走向目的地');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['moveTo_3'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC) || '0.000000';
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC) || '0.000000';
  var theta = Blockly.Python.valueToCode(block, 'theta', Blockly.Python.ORDER_ATOMIC) || '0.000000';
  Blockly.Python.definitions_['ALMotionProxy']='myMotionProxy=ALProxy("ALMotion","127.0.0.1",9559)';
  var code = 'myMotionProxy.moveTo(' + x+ ',' + y+ ',' + theta+ ');\n';
  return code;
};

Blockly.Blocks['move_1'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(41);
    this.appendValueInput('x')
        .setCheck('Number')
        .appendField('x');
    this.appendValueInput('y')
        .setCheck('Number')
        .appendField('y');
    this.appendValueInput('theta')
        .setCheck('Number')
        .appendField('theta');
    this.appendDummyInput()
        .appendField('行走');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['move_1'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC) || '0.000000';
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC) || '0.000000';
  var theta = Blockly.Python.valueToCode(block, 'theta', Blockly.Python.ORDER_ATOMIC) || '0.000000';
  Blockly.Python.definitions_['ALMotionProxy']='myMotionProxy=ALProxy("ALMotion","127.0.0.1",9559)';
  var code = 'myMotionProxy.move(' + x+ ',' + y+ ',' + theta+ ');\n';
  return code;
};

Blockly.Blocks['setAngles'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(41);
    this.appendValueInput('names')
        .setCheck('Array')
        .appendField('names');
    this.appendValueInput('angles')
        .setCheck('Array')
        .appendField('angles');
    this.appendValueInput('fractionMaxSpeed')
        .setCheck('Number')
        .appendField('fractionMaxSpeed');
    this.appendDummyInput()
        .appendField('设置角度');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['setAngles'] = function(block) {
  var names = Blockly.Python.valueToCode(block, 'names', Blockly.Python.ORDER_ATOMIC) || 'np.array([],dtype="S")';
  var angles = Blockly.Python.valueToCode(block, 'angles', Blockly.Python.ORDER_ATOMIC) || 'np.array([],dtype="float64")';
  var fractionMaxSpeed = Blockly.Python.valueToCode(block, 'fractionMaxSpeed', Blockly.Python.ORDER_ATOMIC) || '0.000000';
  Blockly.Python.definitions_['ALMotionProxy']='myMotionProxy=ALProxy("ALMotion","127.0.0.1",9559)';
  var code = 'myMotionProxy.setAngles(' + names+ '.tolist(),' + angles+ '.tolist(),' + fractionMaxSpeed+ ');\n';
  return code;
};

Blockly.Blocks['getAngles'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(41);
    this.appendValueInput('names')
        .setCheck('Array')
        .appendField('names');
    this.appendValueInput('useSensors')
        .setCheck('Boolean')
        .appendField('useSensors');
    this.appendDummyInput()
        .appendField("获取角度")
        .appendField("");
    this.setOutput(true, "Array");
    this.setTooltip('');
  }
};
Blockly.Python['getAngles'] = function(block) {
  var names = Blockly.Python.valueToCode(block, 'names', Blockly.Python.ORDER_ATOMIC) || 'np.array([],dtype="S")';
  var useSensors = Blockly.Python.valueToCode(block, 'useSensors', Blockly.Python.ORDER_ATOMIC) || 'False';
  Blockly.Python.definitions_['ALMotionProxy']='myMotionProxy=ALProxy("ALMotion","127.0.0.1",9559)';
  var code = 'np.array(myMotionProxy.getAngles(' + names+ '.tolist(),' + useSensors+ '));\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['wakeUp'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(41);
    this.appendDummyInput()
        .appendField('唤醒');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['wakeUp'] = function(block) {
  Blockly.Python.definitions_['ALMotionProxy']='myMotionProxy=ALProxy("ALMotion","127.0.0.1",9559)';
  var code = 'myMotionProxy.wakeUp();\n';
  return code;
};

Blockly.Blocks['rest'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(41);
    this.appendDummyInput()
        .appendField('休息');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['rest'] = function(block) {
  Blockly.Python.definitions_['ALMotionProxy']='myMotionProxy=ALProxy("ALMotion","127.0.0.1",9559)';
  var code = 'myMotionProxy.rest();\n';
  return code;
};

Blockly.Blocks['openHand'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(41);
    this.appendValueInput('Hand')
        .setCheck('String')
        .appendField('Hand');
    this.appendDummyInput()
        .appendField('张开手');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['openHand'] = function(block) {
  var Hand = Blockly.Python.valueToCode(block, 'Hand', Blockly.Python.ORDER_ATOMIC) || '"RHand"';
  Blockly.Python.definitions_['ALMotionProxy']='myMotionProxy=ALProxy("ALMotion","127.0.0.1",9559)';
  var code = 'myMotionProxy.openHand(' + Hand+ ');\n';
  return code;
};

Blockly.Blocks['closeHand'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(41);
    this.appendValueInput('Hand')
        .setCheck('String')
        .appendField('Hand');
    this.appendDummyInput()
        .appendField('捏紧手');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['closeHand'] = function(block) {
  var Hand = Blockly.Python.valueToCode(block, 'Hand', Blockly.Python.ORDER_ATOMIC) || '"RHand"';
  Blockly.Python.definitions_['ALMotionProxy']='myMotionProxy=ALProxy("ALMotion","127.0.0.1",9559)';
  var code = 'myMotionProxy.closeHand(' + Hand+ ');\n';
  return code;
};

