Blockly.Blocks.excapp_aiui={init:function(){this.appendValueInput("appid").setCheck("String").appendField("appid");this.appendValueInput("apikey").setCheck("String").appendField("apikey");this.appendValueInput("text").setCheck("String").appendField("\u60a8\u8981\u95ee\u7684");this.appendValueInput("only_text").setCheck("Boolean").appendField("\u4ec5\u6587\u5b57\uff1f");this.setOutput(!0,null);this.setColour(270);this.setTooltip("");this.setHelpUrl("")}};
Blockly.Python.excapp_aiui=function(a){var b=Blockly.Python.valueToCode(a,"appid",Blockly.Python.ORDER_ATOMIC),c=Blockly.Python.valueToCode(a,"apikey",Blockly.Python.ORDER_ATOMIC),d=Blockly.Python.valueToCode(a,"text",Blockly.Python.ORDER_ATOMIC);a=Blockly.Python.valueToCode(a,"only_text",Blockly.Python.ORDER_ATOMIC);define_excapp();return["excapp.aiui(text="+d+",appid="+b+",apikey="+c+",only_text="+a+")",Blockly.Python.ORDER_NONE]};