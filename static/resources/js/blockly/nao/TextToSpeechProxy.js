Blockly.Blocks.stopAll={init:function(){this.setHelpUrl("");this.setColour(150);this.appendDummyInput().appendField("\u505c\u6b62\u8bf4\u8bdd");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};Blockly.Python.stopAll=function(a){Blockly.Python.definitions_.ALTextToSpeechProxy='myTextToSpeechProxy=ALProxy("ALTextToSpeechProxy"127.0.0.1",9559)';return"myTextToSpeechProxy.stopAll();\n"};
Blockly.Blocks.setVolume={init:function(){this.setHelpUrl("");this.setColour(150);this.appendValueInput("volume").setCheck("Number").appendField("volume");this.appendDummyInput().appendField("\u8bbe\u7f6e\u97f3\u91cf");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};
Blockly.Python.setVolume=function(a){a=Blockly.Python.valueToCode(a,"volume",Blockly.Python.ORDER_ATOMIC)||"0.000000";Blockly.Python.definitions_.ALTextToSpeechProxy='myTextToSpeechProxy=ALProxy("ALTextToSpeechProxy"127.0.0.1",9559)';return"myTextToSpeechProxy.setVolume("+a+");\n"};
Blockly.Blocks.setLanguage2={init:function(){this.setHelpUrl("");this.setColour(150);this.appendValueInput("language").setCheck("String").appendField("language");this.appendDummyInput().appendField("\u8bbe\u7f6e\u8bed\u8a00");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};
Blockly.Python.setLanguage2=function(a){a=Blockly.Python.valueToCode(a,"language",Blockly.Python.ORDER_ATOMIC)||'""';Blockly.Python.definitions_.ALTextToSpeechProxy='myTextToSpeechProxy=ALProxy("ALTextToSpeechProxy"127.0.0.1",9559)';return"myTextToSpeechProxy.setLanguage("+a+");\n"};
Blockly.Blocks.say={init:function(){this.setHelpUrl("");this.setColour(150);this.appendValueInput("stringToSay").setCheck("String").appendField("stringToSay");this.appendDummyInput().appendField("\u8bf4\u8bdd");this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip("")}};
Blockly.Python.say=function(a){a=Blockly.Python.valueToCode(a,"stringToSay",Blockly.Python.ORDER_ATOMIC)||'""';Blockly.Python.definitions_.ALTextToSpeechProxy='myTextToSpeechProxy=ALProxy("ALTextToSpeechProxy"127.0.0.1",9559)';return"myTextToSpeechProxy.say("+a+");\n"};
