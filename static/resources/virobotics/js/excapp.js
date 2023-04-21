'use strict';

// 开始，主要导入包
Blockly.Blocks['excapp_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("开始");
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_start'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'import excapp\n\n';
    return code;
};