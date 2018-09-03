const {store} = require('@devly/devly-store');
const {addCoremetricsConfig, addCoremetricsCommands} = require('@devly/devly-coremetrics/actions');
const {dispatch} = store;

require('@devly/devly-coremetrics');

dispatch(addCoremetricsConfig(require('../manifests/coremetrics')));

dispatch(addCoremetricsCommands());
