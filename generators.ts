Blockly.Python['import_aibo_web_api'] = function() {
  return 'from aibo_web_api import AiboWebApi\n';
};

Blockly.Python['aibo_client_init'] = function(block) {
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const baseUrl = Blockly.Python.valueToCode(block, 'BASE_URL', 0);
  const apiKey = Blockly.Python.valueToCode(block, 'API_KEY', 0);
  return `${client} = AiboWebApi(${baseUrl}, ${apiKey})\n`;
};

Blockly.Python['aibo_get_request'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const path = Blockly.Python.valueToCode(block, 'PATH', 0);
  return `${response} = ${client}.get(${path})\n`;
};

Blockly.Python['aibo_post_request'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const path = Blockly.Python.valueToCode(block, 'PATH', 0);
  const payload = Blockly.Python.valueToCode(block, 'PAYLOAD', 0);
  return `${response} = ${client}.post(${path}, ${payload})\n`;
};

Blockly.Python['aibo_actions_list'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  return `${response} = ${client}.actions_list()\n`;
};

Blockly.Python['aibo_actions_get'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const action = Blockly.Python.valueToCode(block, 'ACTION', 0);
  return `${response} = ${client}.actions_get(${action})\n`;
};

Blockly.Python['aibo_actions_trigger'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const action = Blockly.Python.valueToCode(block, 'ACTION', 0);
  const payload = Blockly.Python.valueToCode(block, 'PAYLOAD', 0);
  return `${response} = ${client}.actions_trigger(${action}, ${payload})\n`;
};

Blockly.Python['aibo_say'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const text = Blockly.Python.valueToCode(block, 'TEXT', 0);
  return `${response} = ${client}.say(${text})\n`;
};

Blockly.Python['aibo_settings_get_all'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  return `${response} = ${client}.settings_get_all()\n`;
};

Blockly.Python['aibo_settings_get_key'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const key = Blockly.Python.valueToCode(block, 'KEY', 0);
  return `${response} = ${client}.settings_get(${key})\n`;
};

Blockly.Python['aibo_settings_set_key'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const key = Blockly.Python.valueToCode(block, 'KEY', 0);
  const value = Blockly.Python.valueToCode(block, 'VALUE', 0);
  return `${response} = ${client}.settings_set(${key}, ${value})\n`;
};

Blockly.Python['aibo_settings_update'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const settings = Blockly.Python.valueToCode(block, 'SETTINGS', 0);
  return `${response} = ${client}.settings_update(${settings})\n`;
};

Blockly.Python['aibo_events_list'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  return `${response} = ${client}.events_list()\n`;
};

Blockly.Python['aibo_events_since'] = function(block) {
  const response = Blockly.Python.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
  const client = Blockly.Python.nameDB_.getName(block.getFieldValue('client'), Blockly.VARIABLE_CATEGORY_NAME);
  const since = Blockly.Python.valueToCode(block, 'SINCE', 0);
  return `${response} = ${client}.events_since(${since})\n`;
};

Blockly.Python['aibo_response_value'] = function(block) {
  const response = Blockly.Python.valueToCode(block, 'RESPONSE', 0);
  const key = Blockly.Python.valueToCode(block, 'KEY', 0);
  return [`${response}.get(${key})`, 0];
};
