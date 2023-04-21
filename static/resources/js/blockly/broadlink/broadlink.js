Blockly.Blocks.broadlink_discover={init:function(){this.setHelpUrl("");this.setColour(200);this.appendValueInput("timeout").setCheck("Number").appendField("timeout");this.appendDummyInput().appendField("discover").appendField("");this.setOutput(!0,"Array");this.setTooltip("")}};
Blockly.Python.broadlink_discover=function(a){a=Blockly.Python.valueToCode(a,"timeout",Blockly.Python.ORDER_ATOMIC)||"5";Blockly.Python.definitions_.broadlink="import broadlink";return["broadlink.discover(timeout="+a+")\n",Blockly.Python.ORDER_NONE]};Blockly.Blocks.broadlink_auth={init:function(){this.setHelpUrl("");this.setColour(200);this.appendValueInput("device").appendField("device");this.appendDummyInput().appendField("\u8fde\u63a5");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};
Blockly.Python.broadlink_auth=function(a){a=Blockly.Python.valueToCode(a,"device",Blockly.Python.ORDER_ATOMIC);Blockly.Python.definitions_.broadlink="import broadlink";return"devices["+a+"].auth()\n"};Blockly.Blocks.broadlink_enter_learning={init:function(){this.setHelpUrl("");this.setColour(200);this.appendValueInput("device").appendField("device");this.appendDummyInput().appendField("\u63a5\u6536\u7ea2\u5916\u534f\u8bae").appendField("");this.setOutput(!0,"String");this.setTooltip("")}};
Blockly.Python.broadlink_enter_learning=function(a){a=Blockly.Python.valueToCode(a,"device",Blockly.Python.ORDER_ATOMIC);Blockly.Python.definitions_.broadlink="import broadlink";return["devices["+a+"].enter_learning()\n",Blockly.Python.ORDER_NONE]};
Blockly.Blocks.broadlink_send_data={init:function(){this.setHelpUrl("");this.setColour(200);this.appendValueInput("device").appendField("device");this.appendValueInput("ir_packet").setCheck("String").appendField("ir_packet");this.appendDummyInput().appendField("\u53d1\u5c04\u7ea2\u5916\u534f\u8bae");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};
Blockly.Python.broadlink_send_data=function(a){var b=Blockly.Python.valueToCode(a,"device",Blockly.Python.ORDER_ATOMIC);a=Blockly.Python.valueToCode(a,"ir_packet",Blockly.Python.ORDER_ATOMIC)||"";Blockly.Python.definitions_.broadlink="import broadlink";return"devices["+b+"].send_data("+a+")\n"};
Blockly.Blocks.broadlink_set_power={init:function(){this.setHelpUrl("");this.setColour(200);this.appendValueInput("device").appendField("device");this.appendValueInput("power").setCheck("Boolean").appendField("power");this.appendDummyInput().appendField("\u63a7\u5236\u5f00\u5173");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};
Blockly.Python.broadlink_set_power=function(a){var b=Blockly.Python.valueToCode(a,"device",Blockly.Python.ORDER_ATOMIC);a=Blockly.Python.valueToCode(a,"power",Blockly.Python.ORDER_ATOMIC)||"False";Blockly.Python.definitions_.broadlink="import broadlink";return"devices["+b+"].set_power("+a+")\n"};
Blockly.Blocks.broadlink_check_power={init:function(){this.setHelpUrl("");this.setColour(200);this.appendValueInput("device").appendField("device");this.appendDummyInput().appendField("\u5f00\u5173\u72b6\u6001").appendField("");this.setOutput(!0,"Boolean");this.setTooltip("")}};Blockly.Python.broadlink_check_power=function(a){a=Blockly.Python.valueToCode(a,"device",Blockly.Python.ORDER_ATOMIC);Blockly.Python.definitions_.broadlink="import broadlink";return["devices["+a+"].check_power()\n",Blockly.Python.ORDER_NONE]};
Blockly.Blocks.broadlink_check_sensors={init:function(){this.setHelpUrl("");this.setColour(200);this.appendValueInput("device").appendField("device");this.appendDummyInput().appendField("\u4f20\u611f\u5668\u503c").appendField("");this.setOutput(!0);this.setTooltip("")}};Blockly.Python.broadlink_check_sensors=function(a){a=Blockly.Python.valueToCode(a,"device",Blockly.Python.ORDER_ATOMIC);Blockly.Python.definitions_.broadlink="import broadlink";return["devices["+a+"].check_sensors()\n",Blockly.Python.ORDER_NONE]};