Blockly.Blocks['unsubscribe_sr'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(96);
    this.appendValueInput('name')
        .setCheck('String')
        .appendField('name');
    this.appendDummyInput()
        .appendField('停止语音识别');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['unsubscribe_sr'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC) || '""';
  Blockly.Python.definitions_['ALSpeechRecognitionProxy']='mySpeechRecognitionProxy=ALProxy("ALSpeechRecognition","127.0.0.1",9559)';
  var code = 'mySpeechRecognitionProxy.unsubscribe(' + name+ ');\n';
  return code;
};

Blockly.Blocks['subscribe_1'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(96);
    this.appendValueInput('name')
        .setCheck('String')
        .appendField('name');
    this.appendDummyInput()
        .appendField('开始语音识别');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['subscribe_1'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC) || '""';
  Blockly.Python.definitions_['ALSpeechRecognitionProxy']='mySpeechRecognitionProxy=ALProxy("ALSpeechRecognition","127.0.0.1",9559)';
  var code = 'mySpeechRecognitionProxy.subscribe(' + name+ ');\n';
  return code;
};

Blockly.Blocks['setLanguage'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(96);
    this.appendValueInput('languageName')
        .setCheck('String')
        .appendField('languageName');
    this.appendDummyInput()
        .appendField('设置语言');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['setLanguage'] = function(block) {
  var languageName = Blockly.Python.valueToCode(block, 'languageName', Blockly.Python.ORDER_ATOMIC) || '""';
  Blockly.Python.definitions_['ALSpeechRecognitionProxy']='mySpeechRecognitionProxy=ALProxy("ALSpeechRecognition","127.0.0.1",9559)';
  var code = 'mySpeechRecognitionProxy.setLanguage(' + languageName+ ');\n';
  return code;
};

Blockly.Blocks['setVocabulary'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(96);
    this.appendValueInput('word')
        .setCheck('Array')
        .appendField('word');
    this.appendValueInput('enabledWordSpotting')
        .setCheck('Boolean')
        .appendField('enabledWordSpotting');
    this.appendDummyInput()
        .appendField('设置词库');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['setVocabulary'] = function(block) {
  var word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC) || '[]';
  var enabledWordSpotting = Blockly.Python.valueToCode(block, 'enabledWordSpotting', Blockly.Python.ORDER_ATOMIC) || 'False';
  Blockly.Python.definitions_['ALSpeechRecognitionProxy']='mySpeechRecognitionProxy=ALProxy("ALSpeechRecognition","127.0.0.1",9559)';
  var code = 'mySpeechRecognitionProxy.setVocabulary(' + word+ ',' + enabledWordSpotting+ ');\n';
  return code;
};

