// y
Blockly.Blocks['excapp_function_y'] = {
    init: function () {
        this.appendValueInput("function")
            .setCheck(null)
            .appendField("y");
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['excapp_function_y'] = function (block) {
    let value_function = Blockly.JavaScript.valueToCode(block, 'function', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    let code = 'y = ' + value_function + ';';
    return code;
};

// x
Blockly.Blocks['excapp_function_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("x");
        this.setOutput(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['excapp_function_x'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    let code = 'x';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};