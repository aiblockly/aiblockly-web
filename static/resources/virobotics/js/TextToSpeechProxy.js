Blockly.Blocks['stopAll'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(150);
    this.appendDummyInput()
        .appendField('停止说话');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['stopAll'] = function(block) {
  Blockly.Python.definitions_['ALTextToSpeechProxy']='myTextToSpeechProxy=ALProxy("ALTextToSpeech","127.0.0.1",9559)';
  var code = 'myTextToSpeechProxy.stopAll();\n';
  return code;
};

Blockly.Blocks['setVolume'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(150);
    this.appendValueInput('volume')
        .setCheck('Number')
        .appendField('volume');
    this.appendDummyInput()
        .appendField('设置音量');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['setVolume'] = function(block) {
  var volume = Blockly.Python.valueToCode(block, 'volume', Blockly.Python.ORDER_ATOMIC) || '0.000000';
  Blockly.Python.definitions_['ALTextToSpeechProxy']='myTextToSpeechProxy=ALProxy("ALTextToSpeech","127.0.0.1",9559)';
  var code = 'myTextToSpeechProxy.setVolume(' + volume+ ');\n';
  return code;
};

Blockly.Blocks['setLanguage2'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(150);
    this.appendValueInput('language')
        .setCheck('String')
        .appendField('language');
    this.appendDummyInput()
        .appendField('设置语言');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['setLanguage2'] = function(block) {
  var language = Blockly.Python.valueToCode(block, 'language', Blockly.Python.ORDER_ATOMIC) || '""';
  Blockly.Python.definitions_['ALTextToSpeechProxy']='myTextToSpeechProxy=ALProxy("ALTextToSpeech","127.0.0.1",9559)';
  var code = 'myTextToSpeechProxy.setLanguage(' + language+ ');\n';
  return code;
};

Blockly.Blocks['say'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(150);
    this.appendValueInput('stringToSay')
        .setCheck('String')
        .appendField('stringToSay');
    this.appendDummyInput()
        .appendField('说话');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['say'] = function(block) {
  var stringToSay = Blockly.Python.valueToCode(block, 'stringToSay', Blockly.Python.ORDER_ATOMIC) || '""';
  Blockly.Python.definitions_['ALTextToSpeechProxy']='myTextToSpeechProxy=ALProxy("ALTextToSpeech","127.0.0.1",9559)';
  var code = 'myTextToSpeechProxy.say(' + stringToSay+ ');\n';
  return code;
};

