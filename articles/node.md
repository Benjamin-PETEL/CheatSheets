# NODE

## Version

for the node version:

    `node --version`

for npm version:  
[npm version doc](https://docs.npmjs.com/cli/v8/commands/npm-version)

    `npm --version`
    `npm -v`

## Install packages

[npm install doc](https://docs.npmjs.com/cli/v8/commands/npm-install)

By Default the package is installed in the dependencies. 

    `npm install myPackage`
    `npm -i myPackage`
    `npm -i --save-prod myPackage

Packages can be saved in the devDependencies (nodemon, jest, ...):

    `npm install --save-dev nodemon`


## Uninstall packages

[npm uninstall doc](https://docs.npmjs.com/cli/v8/commands/npm-uninstall)

    `npm uninstall myPackage`
    `npm remove myPackage`
    `npm rm myPackage`