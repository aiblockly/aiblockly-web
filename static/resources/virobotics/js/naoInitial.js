Blockly.Blocks['nao_Initial'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(0);
	this.appendDummyInput()
        .appendField("机器人初始化")
        .appendField("");
    this.setPreviousStatement(false);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Python['nao_Initial'] = function(block) {
  Blockly.Python.definitions_['NAOINITIAL']='# -*- encoding: UTF-8 -*-\nfrom naoqi import ALProxy\nimport numpy as np';
  var code = '';
  return code;
};
