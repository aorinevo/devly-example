# Introduction

As a micro-services application grows, so does the need for a clear, coherent, and easy way to manage the set-up processes of all the components that make up the application.

## Existing Solutions

Two existing solutions to this problem involve containers and virtual machines.  For a comparison between the two, checkout Pete Brey's article: https://blog.netapp.com/blogs/containers-vs-vms/

## The Devly Solution

Devly is neither a containerization nor a virtual machine solution.  It is a command line utility made up of composeable plugins built on node and npm.  Each plugin abstracts out the low-level details of an application's set-up process and rolls it into a cli command.

With Devly, developers can leverage the power of their host machine and avoid the complexities of mounting files and folders into guest operating systems.

## Integrating Your First App Into Devly

Create a separate repo for your app set-up cli tool.

### Initialize and Install Dependencies
 - Run `npm init`
 - Run `npm install --save @devly/devly-store @devly/devly-cli winston redux`

### Create Directories and Files

```
├── cli
    ├── top-level-command-1
    ├── top-level-command-2
    ├── top-level-command-3
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

Manifest files export a javascript object that serves as the initial state for the corresponding plugin.

#### `plugins` directory

The plugins directory consists of files that compose the manifest with the corresponding action creator which then gets dispatched to the devly store. *Note* it is recommened to use a barrel file to manage all of your apps plugins.

*Make sure to install your plugin as a dependency first.*

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
{
  ...,
  "bin": {
    "dev-test": "./index.js"
  },
  ...
}
```

Make sure `./index.js` includes the hashbang at the top of the file; and requires `./plugins` and `./cli` barrels.

```js
#!/usr/bin/env node

require('./plugins');
require('./cli');
```

Finally, run `npm install -g` from the project's root directory.

## Devly Plugins and Utilities

All Devly plugins and utilities are published to npm under the `@devly` scope.  For a full list, visit https://github.com/devlyjs.

Here is a partial list:
 - [@devly/devly-apache](https://github.com/devlyjs/devly-apache)
 - [@devly/devly-cli](https://github.com/devlyjs/devly-cli)
 - [@devly/devly-store](https://github.com/devlyjs/devly-store)
 - [@devly/devly-shell](https://github.com/devlyjs/devly-shell)
 - [@devly/devly-wordpress](https://github.com/devlyjs/devly-wordpress)
