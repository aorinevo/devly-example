const {store} = require('@devly/devly-store');
const {addHostsConfig, addHostsCommands} = require('@devly/devly-hosts/actions');
const {dispatch} = store;

require('@devly/devly-hosts');

dispatch(addHostsConfig(require('../manifests/hosts')));

dispatch(addHostsCommands());
