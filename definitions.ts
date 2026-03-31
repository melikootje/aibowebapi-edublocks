const aiboColor = '#0B7285';

Blockly.Blocks['import_aibo_web_api'] = {
  init: function() {
    this.appendDummyInput().appendField('import Aibo Web API helper');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Import the AiboWebApi class into your Python program.');
  },
};

Blockly.Blocks['aibo_client_init'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('create Aibo client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('with base URL');
    this.appendValueInput('BASE_URL').setCheck(null);
    this.appendDummyInput().appendField('and API key');
    this.appendValueInput('API_KEY').setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Create a reusable client connection for Aibo web requests.');
  },
};

Blockly.Blocks['aibo_get_request'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('result of GET request from client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('to path');
    this.appendValueInput('PATH').setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Send a GET request and store the response dictionary.');
  },
};

Blockly.Blocks['aibo_post_request'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('result of POST request from client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('to path');
    this.appendValueInput('PATH').setCheck(null);
    this.appendDummyInput().appendField('with data');
    this.appendValueInput('PAYLOAD').setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Send a POST request with JSON data and store the response.');
  },
};

Blockly.Blocks['aibo_actions_list'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('available actions from client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Get the list of actions that Aibo supports.');
  },
};

Blockly.Blocks['aibo_actions_get'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('details for action');
    this.appendValueInput('ACTION').setCheck(null);
    this.appendDummyInput()
      .appendField('from client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Get information about a specific action by name.');
  },
};

Blockly.Blocks['aibo_actions_trigger'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('run action');
    this.appendValueInput('ACTION').setCheck(null);
    this.appendDummyInput().appendField('with data');
    this.appendValueInput('PAYLOAD').setCheck(null);
    this.appendDummyInput()
      .appendField('using client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Trigger an action and pass optional JSON payload data.');
  },
};

Blockly.Blocks['aibo_say'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('ask Aibo to say');
    this.appendValueInput('TEXT').setCheck(null);
    this.appendDummyInput()
      .appendField('using client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Use the actions API to make Aibo speak text.');
  },
};

Blockly.Blocks['aibo_settings_get_all'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('all settings from client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Get the full settings object from Aibo.');
  },
};

Blockly.Blocks['aibo_settings_get_key'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('setting value for key');
    this.appendValueInput('KEY').setCheck(null);
    this.appendDummyInput()
      .appendField('from client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Read one setting by key, such as volume or brightness.');
  },
};

Blockly.Blocks['aibo_settings_set_key'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('set setting key');
    this.appendValueInput('KEY').setCheck(null);
    this.appendDummyInput().appendField('to value');
    this.appendValueInput('VALUE').setCheck(null);
    this.appendDummyInput()
      .appendField('using client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Set one setting value on Aibo.');
  },
};

Blockly.Blocks['aibo_settings_update'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('update multiple settings with data');
    this.appendValueInput('SETTINGS').setCheck(null);
    this.appendDummyInput()
      .appendField('using client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Update several settings at once using a JSON object.');
  },
};

Blockly.Blocks['aibo_events_list'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('recent events from client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Get the current list of events.');
  },
};

Blockly.Blocks['aibo_events_since'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('store in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('events since cursor');
    this.appendValueInput('SINCE').setCheck(null);
    this.appendDummyInput()
      .appendField('from client')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Get new events after a cursor or event marker.');
  },
};

Blockly.Blocks['aibo_response_value'] = {
  init: function() {
    this.appendDummyInput().appendField('read from response');
    this.appendValueInput('RESPONSE').setCheck(null);
    this.appendDummyInput().appendField('the value for key');
    this.appendValueInput('KEY').setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Read one value from a response dictionary by key.');
  },
};
