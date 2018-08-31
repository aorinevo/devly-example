const {store} = require('@devly/devly-store');
const {addApacheConfig, addApacheCommands} = require('@devly/devly-apache/actions');
const {dispatch} = store;

require('@devly/devly-apache');

dispatch(addApacheConfig(require('../manifests/apache')));

dispatch(addApacheCommands());
