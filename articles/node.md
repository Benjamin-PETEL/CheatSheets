# NODE

## Version

for the node version:

    node --version

## NPM

NPM is the default package manager for node.  
Alternative is Yarn that is developped by Facebook

### Versions

for npm version:  
[npm version doc](https://docs.npmjs.com/cli/v8/commands/npm-version)

    npm --version
    npm -v

### Package versions

Package are versionned using 3 digits: major, minor, patch.
Package can be updated using:

    npm update

up to last patch for: "package": "~x.x.x"  
up to last minor for: "package": "^x.x.x"  

To update to last major use:

    npm update packageName@latest

### Install packages

[npm install doc](https://docs.npmjs.com/cli/v8/commands/npm-install)

By Default the package is installed in the dependencies. 

    npm install myPackage
    npm -i myPackage
    npm -i --save-prod myPackage

Packages can be saved in the devDependencies (nodemon, jest, ...):

    npm install --save-dev nodemon


### Uninstall packages

[npm uninstall doc](https://docs.npmjs.com/cli/v8/commands/npm-uninstall)

    npm uninstall myPackage
    npm remove myPackage
    npm rm myPackage

## dotenv & .env

Environnement variables are available via dotenv package: [dotenv doc](https://github.com/motdotla/dotenv#readme)

Package is installed via npm:

    npm install dotenv --save

Then import the package as early as possible in the application:

    require('dotenv').config();

To call an environnement variable from file .env:

    SECRET_KEY="YOURSECRETKEYGOESHERE"

Just have to call it:

    let secret = process.env.SECRET_KEY