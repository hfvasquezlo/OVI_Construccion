Blockly.Blocks["f_avanza"] = {
init: function() {
this.appendDummyInput()
   .appendField("Go");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}};
Blockly.Blocks["f_move"] = {
init: function() {
this.appendDummyInput()
   .appendField("Go")
   .appendField(new Blockly.FieldNumber(0), "pasos");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("Help");
this.setHelpUrl("");
}};
Blockly.Blocks["f_xira"] = {
init: function() {
this.appendDummyInput()
   .appendField("Rotate")
   .appendField(new Blockly.FieldDropdown([["Izquierda","E"], ["Derecha","D"]]), "direccion");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}};
Blockly.Blocks["f_hai_c"] = {init: function() {var DIRECTIONS =[["ahead","FR"],["Izquierda","ES"],["Derecha","DE"]];
this.setColour(210);
this.appendDummyInput().appendField("if path").appendField(new Blockly.FieldDropdown(DIRECTIONS),"DIR");
this.appendStatementInput("DO").appendField("do");this.setTooltip("");this.setPreviousStatement(true);this.setNextStatement(true);}};
Blockly.Blocks["f_hai_cElse"] = {init: function() {var DIRECTIONS =[["ahead","FR"],["Izquierda","ES"],["Derecha","DE"]];
this.setColour(210);
this.appendDummyInput().appendField("if path").appendField(new Blockly.FieldDropdown(DIRECTIONS),"DIR");
this.appendStatementInput("DO").appendField("do");
this.appendStatementInput("ELSE").appendField("else");this.setTooltip("");
this.setPreviousStatement(true);this.setNextStatement(true);}};
Blockly.Blocks["f_mentres"] = {init: function() {this.setColour(120);this.appendDummyInput().appendField("repeat until")
.appendField(new Blockly.FieldImage("ima/fin.jpg", 12, 12));
this.appendStatementInput("DO").appendField("do");this.setPreviousStatement(true);this.setTooltip("");}};
