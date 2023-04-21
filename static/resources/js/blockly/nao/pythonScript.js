/*
 Licensed under the Apache License, Version 2.0 (the "License"):
          http://www.apache.org/licenses/LICENSE-2.0

 @fileoverview Description.
*/
var SCRIPT_HUE=200;Blockly.Blocks.python_script={init:function(){this.setHelpUrl("");this.setColour(SCRIPT_HUE);this.appendValueInput("run").setCheck("String").appendField("run");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};Blockly.Python.python_script=function(a){return"exec("+(Blockly.Python.valueToCode(a,"run",Blockly.Python.ORDER_ATOMIC)||"pass")+")"};
