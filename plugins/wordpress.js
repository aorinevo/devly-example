const {store} = require('@devly/devly-store');
const {addWordPressConfig, addWordPressCommands} = require('@devly/devly-wordpress/actions');
const {dispatch} = store;

require('@devly/devly-wordpress');

dispatch(addWordPressConfig(require('../manifests/wordpress')));

dispatch(addWordPressCommands());
