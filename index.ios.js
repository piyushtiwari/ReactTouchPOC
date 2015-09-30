/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

//var MovieLoader = require('./MovieLoader');
var Login = require('./Login');
var {
  Text,
  AppRegistry
}=React;
var AwesomeProject = React.createClass({

  render: function() {
   return(
    <Login />
    );
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);