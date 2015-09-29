# ng-proper-possessive — Some names end in 's'. Others don't. Do the right thing.

[![Build Status](https://travis-ci.org/codehangar/ng-proper-possessive.svg?branch=master)](https://travis-ci.org/codehangar/ng-proper-possessive)

A simple AngularJS directive to properly handle possessive nouns.

## Getting Started

#### Manual Download
Download the from [here](https://github.com/codehangar/ng-proper-possessive/releases)

#### Bower 
```
bower install ng-proper-possessive
```
<!--
#### Npm
```
npm install ng-copy-text
```
-->

## Usage

1. Set `ngProperPossessive` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ngProperPossessive'])
  ```

2. Add proper-possessive directive to the desired element, and set the 'name' attribute to the value you need to manipulate.
Example:
  ```html
  <span proper-possessive name="user.name"></span>
  ```

## Credits
This project was initially forked from the application template seed here
[https://github.com/refactorthis/angular-component-seed.git](https://github.com/refactorthis/angular-component-seed.git)
