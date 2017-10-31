# Currencies -  AngularJS apps


This project  bases on an awesome [John Papa's style guide](https://github.com/johnpapa/angular-styleguide). It is an application demo for a typical [AngularJS](http://angularjs.org/) web app. You can use it to quickly bootstrap your angular web app projects and dev environment for these projects.

The application contains a sample AngularJS application for managing currencies and is preconfigured to install the Angular framework, Restangular, Json-Server and other tools for testing (Karma, jasmin, protractor).



## Getting Started

To get you started you can simply clone the currencies-app repository and install the dependencies.

### Prerequisites

You need git to clone the currencies-app repository. You can get git from [http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone currencies-app 

Clone the currencies-app repository using [git][git]:

```bash
git clone https://github.com/hamedkardous/currencies-app.git
cd currencies-app
```

### Install Dependencies

Firstly, make sure you have json-server, bower, grunt-cli and karma-cli installed globally. To do this run:

```bash
npm install -g bower grunt-cli karma-cli json-server
```

I have preconfigured `npm` to automatically run `bower` so you can simply do:

```bash
npm install
```

Behind the scenes this will also call `bower install`. You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files


### Run the Application

```bash
npm start
```
*Note even if this app is using json-server as REST API, you don't have to launch it manually.
I've configured npm start to launch them simultaneously *

Now browse to the app at `http://localhost:8000`.

## Directory Layout

```
app/                                --> all of the source files for the application
  assets/                               --> other application files
    css/                                  --> custom styles
    data/                                 --> custom data
    fonts/                                --> custom fonts
    images/                               --> custom images
    js/                                   --> custom JavaScript files
    libs/                                 --> custom libraries
  bower_components/                     --> the angular framework files
  common/                               --> common application files
    constants/                              --> custom angular constants    
    directives/                             --> custom angular directives    
    filters/                                --> custom angular filters
  core/                                 --> main application files
    app.js                                  --> main application module
    app.routes.js                           --> main application routes
  index.html                            --> app layout file (the main html template file of the app)
build/                              --> minified JavaScript files
node_modules/                       --> the npm packages for the tools we need
coverage/                           --> coverage reports
dist/                               --> concatenated JavaScript files
protractor-test-results/            --> e2e tests results
tests/                              --> tests scenarios
  e2e/                                  --> end-to-end tests
  unit/                                 --> unit tests
unit-test-results/                  --> unit tests results
.bowerrc                            --> bower options file
.gitignore                          --> git ignore file
.jscsrc                             --> JSCS options file
.jshintrc                           --> JSHint options file
Gruntfile.js                        --> Grunt config file
Procfile                            --> define command which starts app
app.json                            --> web application details file
bower.json                          --> runtime dependencies of the project
karma.conf.js                       --> Karma config file (for unit tests)
package.json                        --> development dependencies of the project
protractor-conf.js                  --> Protractor config file (for e2e tests)
server.js                           --> server config file
```

## Testing

### Running Unit Tests

I already wrote some tests 

* the configuration is found at `karma.conf.js`
* the unit test files (specs) are placed side-by-side with client code: `app/**/*Spec.js`.

```bash
npm test
```


## License

The MIT License, Copyright (c) 2016 Michal Pietrzak

[git]: http://git-scm.com
[grunt]: http://gruntjs.com
[bower]: http://bower.io
[npm]: https://www.npmjs.org
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io