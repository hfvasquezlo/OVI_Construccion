Blockly.JavaScript["f_avanza"] = function(block) {var code="adddatamove(1);";return code;};
Blockly.JavaScript["f_move"] = function(block) {var number_pasos = block.getFieldValue("pasos");var code="adddatamove("+number_pasos+");";return code;};
Blockly.JavaScript["f_xira"] = function(block) {var dropdown_direccion = block.getFieldValue("direccion");var code="adddatarot("+dropdown_direccion+");";return code;};
Blockly.JavaScript["f_hai_c"] = function(block) {var argument = block.getFieldValue("DIR") +
'(\'block_id_' + block.id + '\')';
var branch = Blockly.JavaScript.statementToCode(block,"DO");
var code = 'if (' + argument + ') {\n' + branch + '}\n';
return code;};
Blockly.JavaScript["f_hai_cElse"] = function(block) {var argument = block.getFieldValue("DIR") +
'(\'block_id_' + block.id + '\')';
var branch0 = Blockly.JavaScript.statementToCode(block,"DO");
var branch1 = Blockly.JavaScript.statementToCode(block,"ELSE");
var code = 'if (' + argument + ') {\n' + branch0 +'} else {\n' + branch1 + '}\n';
return code;};
Blockly.JavaScript["f_mentres"] = function(block) {var branch = Blockly.JavaScript.statementToCode(block,"DO");if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
'\'block_id_' + block.id + '\'') + branch;
}
return 'while (notDone()) {\n' + branch + '}\n';};
