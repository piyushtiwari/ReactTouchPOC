'use strict';

var React = require('react-native');

var {
	Text,
	View,
	StyleSheet
} = React;

var Login = React.createClass({
	render: function(){
return(
<View style={styles.container}>
	<Text> This is a login page</Text>
	</View>
		)}
});

var styles = StyleSheet.create({
	container:{
		flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
	}
});
module.exports = Login;

