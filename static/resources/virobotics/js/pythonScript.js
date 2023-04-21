/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview Description.
 */
'use strict';

/** Common HSV hue for all blocks in this category. */
var SCRIPT_HUE = 200;

Blockly.Blocks['python_script'] = {
  /**
   * Description.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('');
    this.setColour(SCRIPT_HUE);
    this.appendValueInput(
          'run')
        .setCheck('String')
        .appendField('run');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Python['python_script'] = function(block) {
  var myscript = Blockly.Python.valueToCode(
      block, 'run', Blockly.Python.ORDER_ATOMIC) || 'pass';
  //Blockly.Python.definitions_['import_sleep'] = '# -*- encoding: UTF-8 -*-\nfrom naoqi import ALProxy\ntts=ALProxy("ALTextToSpeech","127.0.0.1",9559)';
  var code = 'exec('+myscript+')';
  return code;
};
