/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

//var MovieLoader = require('./MovieLoader');
var Login = require('./Login');
var Content = require('./content');
var {
  Text,
  AppRegistry
}=React;
var AwesomeProject = React.createClass({

  render: function() {
    if(this.state.loggedIn){
    return(
    <Content />
    );
    }else{
   return(
    <Login onLogin={this.onLogin} />
    );
 }
  },
  onLogin: function(){
    this.setState({loggedIn: true});
    console.log('successfully logged into the server');
  },
  getInitialState: function(){
    return{
      loggedIn:false
    }
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);