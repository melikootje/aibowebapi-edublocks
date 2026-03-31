Blockly.Python['import_aibo_web_api'] = function() {
  return 'from aibo_web_api import AiboWebApi\n';
};

Blockly.Python['aibo_client_init'] = function(block) {
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const baseUrl = Blockly.Python.valueToCode(block, 'BASE_URL', 0);
  const apiKey = Blockly.Python.valueToCode(block, 'API_KEY', 0);
  const code = `${client} = AiboWebApi(${baseUrl}, ${apiKey})\n`;
  return code;
};

Blockly.Python['aibo_get_request'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const path = Blockly.Python.valueToCode(block, 'PATH', 0);
  const code = `${response} = ${client}.get(${path})\n`;
  return code;
};

Blockly.Python['aibo_post_request'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const path = Blockly.Python.valueToCode(block, 'PATH', 0);
  const payload = Blockly.Python.valueToCode(block, 'PAYLOAD', 0);
  const code = `${response} = ${client}.post(${path}, ${payload})\n`;
  return code;
};

Blockly.Python['aibo_say'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const text = Blockly.Python.valueToCode(block, 'TEXT', 0);
  const code = `${response} = ${client}.say(${text})\n`;
  return code;
};

Blockly.Python['aibo_perform_action'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const action = Blockly.Python.valueToCode(block, 'ACTION', 0);
  const code = `${response} = ${client}.perform_action(${action})\n`;
  return code;
};

Blockly.Python['aibo_response_value'] = function(block) {
  const response = Blockly.Python.valueToCode(block, 'RESPONSE', 0);
  const key = Blockly.Python.valueToCode(block, 'KEY', 0);
  const code = `${response}.get(${key})`;
  return [code, 0];
};
