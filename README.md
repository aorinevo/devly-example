# Introduction

As micro-services architecture grows, so does the need for a clear, coherent, and easy way to manage the different set-up processes of the micro-services echo-system.  

## Existing Solutions

Two existing solutions to the problem involve containers and virtual machines.  For a comparison of the two, checkout Pete Brey's article: https://blog.netapp.com/blogs/containers-vs-vms/

## Devly Solution

Devly is neither a containerization nor a virtual machine ecosystem.  It is command line utility made up of compose-able plugins built in node and npm.  Each plugin abstracts out the low-level details of an applications set-up process and rolls it into a cli command.

With Devly, developers can leverage the power of their host machine an avoid the complexities of mounting files and folders into guest operating systems.

## Integrating Your First App Into Devly

Create a separate repo for your app set-up cli tool.

### Initialize and Install Dependencies
 - Run `npm init`
 - Run `npm install --save @devly/devly-store @devly/devly-cli winston redux`

### Create Directories and Files

```
├── cli
    ├── to-level-command-1
    ├── to-level-command-2
    ├── to-level-command-3
    └── index.js
├── manifests
    ├── plugin-1
    ├── plugin-2
    ├── plugin-3
    └── index.js
├── plugins
    ├── plugin-1
    ├── plugin-2
    ├── plugin-3
    └── index.js
└── index.js
```

#### `manifests` directory

Manifest files export a javascript object that contains the information the corresponding plugin needs to run.

#### `plugins` directory

Plugins directory will generally pull in the plugin's manifest file and dispatch an action to the devly-store.  *Make sure to install your plugin as a dependency first.*

```js
const {store} = require('@devly/devly-store');
const {addApacheConfig, addApacheCommands} = require('@devly/devly-apache/actions');
const {dispatch} = store;

require('@devly/devly-apache');

dispatch(addApacheConfig(require('./manifests/apache')));
dispatch(addApacheCommands());
```

### Define and Install Your Root CLI Command

Update your `package.json` to include a bin object.  

```js
//package.json
{
  ...,
  "bin": {
    "dev-test": "./index.js"
  },
  ...
}
```

Make sure the `index.js` file includes the hashbang at the top of the file and requires the plugins and cli barrel files (i.e. `./plugins/index.js` and `./cli/index.js`).

```js
// index.js

#!/usr/bin/env node

require('./plugins');
require('./cli');
```

Finally, run `npm install -g` from the project's root directory.

## Devly Plugins and Utilities

All Devly plugins and utilities are publised to npm under the `@devly` scope.  For a full list, see visit https://github.com/devlyjs.

Here is a partial list:
 - [@devly/devly-apache](https://github.com/devlyjs/devly-apache)
 - [@devly/devly-cli](https://github.com/devlyjs/devly-cli)
 - [@devly/devly-store](https://github.com/devlyjs/devly-store)
