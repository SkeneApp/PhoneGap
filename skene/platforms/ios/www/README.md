# Info

## Content

1. [Install](#install)
2. [Deploy](#deploy)
3. [Description](#description)
  1. [Templates](#templates)
  2. [Folder](#folder)

## Install

To be able to deploy app you need to install dependencies first.

**You won't be able to deploy app without installing**

1. Install **Node**
  * [Official website](http://nodejs.org/)
  * [Install from terminal](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
2. After go to this folder in the terminal
3. Run `npm install`, it will install required libraries to *node_modules* folder


## Deploy

Application uses [browserify](http://browserify.org/), therefore you need to rebuild app every time you made a change.

There are four tasks:

* `gulp scripts` builds *app.js*
* `gulp templates` builds *templates.js*
* `gulp watch` watches for file changes in *source* folder (**only js files**)
* `gulp` runs `gulp scripts` and then `gulp watch`

If gulp command won't be found, try installing gulp globally:
`npm install -g gulp`


## Description

### Templates

* Templates should be edited in *source/templates*
* After change run `gulp templates` task to add them together and make requirable
  * it can be automized by adding this task to gulp to rebuild when the file was changed (*ask Roman if needed*)

### Folder

**Source** folder contains:

```
-models/
-collections/
-views/
-router.js
-app.js
```

**Builds** folder contains:

```
-app.js
-templates.js
```

**gulpfile.js** gulp tasks (described below)

**package.json** simple file for *npm* to install required packages
