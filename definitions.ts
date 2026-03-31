const aiboColor = '#0B7285';

Blockly.Blocks['import_aibo_web_api'] = {
  init: function() {
    this.appendDummyInput().appendField('from aibo_web_api import AiboWebApi');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_client_init'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField(' = AiboWebApi(');
    this.appendValueInput('BASE_URL').setCheck(null);
    this.appendDummyInput().appendField(',');
    this.appendValueInput('API_KEY').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_get_request'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.get(');
    this.appendValueInput('PATH').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_post_request'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.post(');
    this.appendValueInput('PATH').setCheck(null);
    this.appendDummyInput().appendField(',');
    this.appendValueInput('PAYLOAD').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_actions_list'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.actions_list()');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_actions_get'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.actions_get(');
    this.appendValueInput('ACTION').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_actions_trigger'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.actions_trigger(');
    this.appendValueInput('ACTION').setCheck(null);
    this.appendDummyInput().appendField(',');
    this.appendValueInput('PAYLOAD').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_say'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.say(');
    this.appendValueInput('TEXT').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_settings_get_all'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.settings_get_all()');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_settings_get_key'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.settings_get(');
    this.appendValueInput('KEY').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_settings_set_key'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.settings_set(');
    this.appendValueInput('KEY').setCheck(null);
    this.appendDummyInput().appendField(',');
    this.appendValueInput('VALUE').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_settings_update'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.settings_update(');
    this.appendValueInput('SETTINGS').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_events_list'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.events_list()');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_events_since'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField(' = ')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('.events_since(');
    this.appendValueInput('SINCE').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
  },
};

Blockly.Blocks['aibo_response_value'] = {
  init: function() {
    this.appendDummyInput().appendField('read');
    this.appendValueInput('RESPONSE').setCheck(null);
    this.appendDummyInput().appendField('[');
    this.appendValueInput('KEY').setCheck(null);
    this.appendDummyInput().appendField(']');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(aiboColor);
  },
};
