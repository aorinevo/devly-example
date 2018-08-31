const {store} = require('@devly/devly-store');
const {addShellConfig, addShellCommands} = require('@devly/devly-shell/actions');
const {dispatch} = store;

require('@devly/devly-shell');

dispatch(addShellConfig(require('../manifests/shell')));

dispatch(addShellCommands());
