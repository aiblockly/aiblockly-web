Blockly.Blocks.excapp_audio_player={init:function(){this.appendDummyInput().appendField("\u64ad\u653e\u97f3\u9891");this.appendDummyInput().appendField("\u8bbe\u5907\u540d\u79f0").appendField(new Blockly.FieldDropdown([["\u9ed8\u8ba4\u8bbe\u5907","default"],["4mic\u9ea6\u514b\u98ce","seeed"],["6mic\u9ea6\u514b\u98ce","respeaker"]]),"player_name");this.appendDummyInput().appendField("\u91c7\u6837\u7387").appendField(new Blockly.FieldTextInput("16000"),"rate");this.appendDummyInput().appendField("\u58f0\u9053").appendField(new Blockly.FieldTextInput("1"),
"channels");this.appendDummyInput().appendField("\u91c7\u6837\u7cbe\u5ea6").appendField(new Blockly.FieldTextInput("2"),"sample_width");this.appendValueInput("audio").setCheck(null).appendField("\u97f3\u9891\u6570\u636e");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(230);this.setTooltip("");this.setHelpUrl("")}};
Blockly.Python.excapp_audio_player=function(a){var b=a.getFieldValue("player_name"),c=a.getFieldValue("rate"),d=a.getFieldValue("channels"),e=a.getFieldValue("sample_width");a=Blockly.Python.valueToCode(a,"audio",Blockly.Python.ORDER_ATOMIC);return'pl = excapp.Player()\npl.select_device(type=False, name="'+b+'")\npl.get_stream()\npl.playlist(rate='+c+",\n    channels="+d+",\n    sample_width="+e+",\n    playlist="+a+")\n"};
