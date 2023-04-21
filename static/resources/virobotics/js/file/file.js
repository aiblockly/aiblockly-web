'use strict';


Blockly.Blocks['excapp_file_read'] = {
    init: function () {
        this.appendValueInput("filepath")
            .setCheck("String")
            .appendField("文件路径");
        this.appendStatementInput("file")
            .setCheck(null)
            .appendField("读取文件");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_file_read'] = function (block) {
    let value_filepath = Blockly.Python.valueToCode(block, 'filepath', Blockly.Python.ORDER_ATOMIC);
    let statements_file = Blockly.Python.statementToCode(block, 'file');
    // TODO: Assemble Python into code variable.
    let code = 'with open(' + value_filepath + ',"rb+") as f:\n';
    code += statements_file;
    return code;
};

Blockly.Blocks['excapp_file_read_f'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("读取");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_file_read_f'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'f.read()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['excapp_file_write'] = {
    init: function () {
        this.appendValueInput("filepath")
            .setCheck("String")
            .appendField("文件名称");
        this.appendValueInput("file_mode")
            .setCheck("String")
            .appendField("写入模式");
        this.appendStatementInput("codeblock")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_file_write'] = function (block) {
    var value_filepath = Blockly.Python.valueToCode(block, 'filepath', Blockly.Python.ORDER_ATOMIC);
    var value_file_mode = Blockly.Python.valueToCode(block, 'file_mode', Blockly.Python.ORDER_NONE);
    var statements_codeblock = Blockly.Python.statementToCode(block, 'codeblock');
    // TODO: Assemble Python into code variable.
    var code = 'with open(' + value_filepath + ',' + value_file_mode + ') as f:\n';
    code += statements_codeblock;
    return code;
};

Blockly.Blocks['excapp_file_write_f'] = {
    init: function () {
        this.appendValueInput("file_data")
            .setCheck(null)
            .appendField("写入");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_file_write_f'] = function (block) {
    var value_file_data = Blockly.Python.valueToCode(block, 'file_data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'f.write(' + value_file_data + ')\n';
    return code;
};

Blockly.Blocks['excapp_file_write_mode'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["覆盖写入", "'w'"], ["追加写入", "'w+'"]]), "file_mode");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['excapp_file_write_mode'] = function (block) {
    var dropdown_file_mode = block.getFieldValue('file_mode');
    // TODO: Assemble Python into code variable.
    var code = dropdown_file_mode;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_STRING_CONVERSION];
};