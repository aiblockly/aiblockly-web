'use strict';

Blockly.Blocks['excapp_aiui_init'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("初始化");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_aiui_init'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'from aiui2 import aiui\n\n';
    return code;
};

Blockly.Blocks['excapp_aiui'] = {
    init: function () {
        this.appendValueInput("question")
            .setCheck("String")
            .appendField("您要问的");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_aiui'] = function (block) {
    var value_question = Blockly.Python.valueToCode(block, 'question', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'aiui(' + value_question + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};