Blockly.Blocks.unsubscribe={init:function(){this.setHelpUrl("");this.setColour(96);this.appendValueInput("nameId").setCheck("String").appendField("nameId");this.appendDummyInput().appendField("\u505c\u6b62\u91c7\u96c6");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};
Blockly.Python.unsubscribe=function(a){a=Blockly.Python.valueToCode(a,"nameId",Blockly.Python.ORDER_ATOMIC)||'""';Blockly.Python.definitions_.ALVideoDeviceProxy='myVideoDeviceProxy=ALProxy("ALVideoDeviceProxy"127.0.0.1",9559)';return"myVideoDeviceProxy.unsubscribe("+a+");\n"};
Blockly.Blocks.getImageRemote={init:function(){this.setHelpUrl("");this.setColour(96);this.appendValueInput("name").setCheck("String").appendField("name");this.appendDummyInput().appendField("\u83b7\u53d6\u89c6\u9891\u6570\u636e").appendField("");this.setOutput(!0,"Array");this.setTooltip("")}};
Blockly.Python.getImageRemote=function(a){a=Blockly.Python.valueToCode(a,"name",Blockly.Python.ORDER_ATOMIC)||'""';Blockly.Python.definitions_.ALVideoDeviceProxy='myVideoDeviceProxy=ALProxy("ALVideoDeviceProxy"127.0.0.1",9559)';return["myVideoDeviceProxy.getImageRemote("+a+");\n",Blockly.Python.ORDER_NONE]};
Blockly.Blocks.subscribe={init:function(){this.setHelpUrl("");this.setColour(96);this.appendValueInput("gvmName").setCheck("String").appendField("gvmName");this.appendValueInput("resolution").setCheck("Number").appendField("resolution");this.appendValueInput("colorSpace").setCheck("Number").appendField("colorSpace");this.appendValueInput("fps").setCheck("Number").appendField("fps");this.appendDummyInput().appendField("\u5f00\u59cb\u91c7\u96c6").appendField("");this.setOutput(!0,"String");this.setTooltip("")}};
Blockly.Python.subscribe=function(a){var b=Blockly.Python.valueToCode(a,"gvmName",Blockly.Python.ORDER_ATOMIC)||'"0"',c=Blockly.Python.valueToCode(a,"resolution",Blockly.Python.ORDER_ATOMIC)||"1",d=Blockly.Python.valueToCode(a,"colorSpace",Blockly.Python.ORDER_ATOMIC)||"11";a=Blockly.Python.valueToCode(a,"fps",Blockly.Python.ORDER_ATOMIC)||"10";Blockly.Python.definitions_.ALVideoDeviceProxy='myVideoDeviceProxy=ALProxy("ALVideoDeviceProxy"127.0.0.1",9559)';return["myVideoDeviceProxy.subscribe("+b+
","+c+","+d+","+a+");\n",Blockly.Python.ORDER_NONE]};Blockly.Blocks.setActiveCamera_1={init:function(){this.setHelpUrl("");this.setColour(96);this.appendValueInput("activecamera").setCheck("Number").appendField("activecamera");this.appendDummyInput().appendField("\u8bbe\u7f6e\u6444\u50cf\u5934").appendField("");this.setOutput(!0,"Boolean");this.setTooltip("")}};
Blockly.Python.setActiveCamera_1=function(a){a=Blockly.Python.valueToCode(a,"activecamera",Blockly.Python.ORDER_ATOMIC)||"0";Blockly.Python.definitions_.ALVideoDeviceProxy='myVideoDeviceProxy=ALProxy("ALVideoDeviceProxy"127.0.0.1",9559)';return["myVideoDeviceProxy.setActiveCamera("+a+");\n",Blockly.Python.ORDER_NONE]};
