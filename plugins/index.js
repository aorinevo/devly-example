const {store} = require('@devly/devly-store');
const {addApacheConfig, addApacheCommands} = require('@devly/devly-apache/actions');
const {addHostsConfig, addHostsCommands} = require('@devly/devly-hosts/actions');
const {dispatch} = store;

require('@devly/devly-apache');
require('@devly/devly-hosts');

dispatch(addApacheConfig(require('../manifests/apache')));
dispatch(addHostsConfig(require('../manifests/hosts')));

dispatch(addApacheCommands());
dispatch(addHostsCommands());
