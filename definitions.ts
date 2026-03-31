const aiboColor = '#0B7285';

Blockly.Blocks['import_aibo_web_api'] = {
  init: function() {
    this.appendDummyInput().appendField('get Aibo ready');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Get the Aibo helper ready so your code can talk to Aibo.');
  },
};

Blockly.Blocks['aibo_client_init'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('make Aibo link')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('with website');
    this.appendValueInput('BASE_URL').setCheck(null);
    this.appendDummyInput().appendField('and secret key');
    this.appendValueInput('API_KEY').setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Make a link so your code can send messages to Aibo.');
  },
};

Blockly.Blocks['aibo_get_request'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('what Aibo says back from')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('page');
    this.appendValueInput('PATH').setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Ask Aibo for information from one page.');
  },
};

Blockly.Blocks['aibo_post_request'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('what happens when')
      .appendField(new Blockly.FieldVariable('aibo'), 'client')
      .appendField('sends to page');
    this.appendValueInput('PATH').setCheck(null);
    this.appendDummyInput().appendField('with this');
    this.appendValueInput('PAYLOAD').setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Send some information to Aibo and save the answer.');
  },
};

Blockly.Blocks['aibo_actions_list'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('things Aibo can do from')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('See all the things Aibo knows how to do.');
  },
};

Blockly.Blocks['aibo_actions_get'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('about action');
    this.appendValueInput('ACTION').setCheck(null);
    this.appendDummyInput()
      .appendField('from')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Learn more about one thing Aibo can do.');
  },
};

Blockly.Blocks['aibo_actions_trigger'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('make Aibo do');
    this.appendValueInput('ACTION').setCheck(null);
    this.appendDummyInput().appendField('using');
    this.appendValueInput('PAYLOAD').setCheck(null);
    this.appendDummyInput()
      .appendField('with')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Tell Aibo to do something.');
  },
};

Blockly.Blocks['aibo_say'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('make Aibo say');
    this.appendValueInput('TEXT').setCheck(null);
    this.appendDummyInput()
      .appendField('with')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Make Aibo speak some words.');
  },
};

Blockly.Blocks['aibo_settings_get_all'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('all Aibo settings from')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('See all of Aibo’s settings.');
  },
};

Blockly.Blocks['aibo_settings_get_key'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('setting called');
    this.appendValueInput('KEY').setCheck(null);
    this.appendDummyInput()
      .appendField('from')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('See one setting, like volume.');
  },
};

Blockly.Blocks['aibo_settings_set_key'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('change setting');
    this.appendValueInput('KEY').setCheck(null);
    this.appendDummyInput().appendField('to');
    this.appendValueInput('VALUE').setCheck(null);
    this.appendDummyInput()
      .appendField('with')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Change one Aibo setting.');
  },
};

Blockly.Blocks['aibo_settings_update'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('change many settings with');
    this.appendValueInput('SETTINGS').setCheck(null);
    this.appendDummyInput()
      .appendField('with')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Change lots of Aibo settings at once.');
  },
};

Blockly.Blocks['aibo_events_list'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('new things that happened from')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('See what just happened.');
  },
};

Blockly.Blocks['aibo_events_since'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('save in')
      .appendField(new Blockly.FieldVariable('response'), 'response')
      .appendField('things that happened after');
    this.appendValueInput('SINCE').setCheck(null);
    this.appendDummyInput()
      .appendField('from')
      .appendField(new Blockly.FieldVariable('aibo'), 'client');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(aiboColor);
    this.setTooltip('See what happened after a saved point.');
  },
};

Blockly.Blocks['aibo_response_value'] = {
  init: function() {
    this.appendDummyInput().appendField('from answer');
    this.appendValueInput('RESPONSE').setCheck(null);
    this.appendDummyInput().appendField('get');
    this.appendValueInput('KEY').setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(aiboColor);
    this.setTooltip('Pick one thing out of Aibo’s answer.');
  },
};
