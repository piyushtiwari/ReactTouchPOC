'use strict';

var React = require('react-native');

var {
	Text,
	View
} =React;

var Content = React.createClass({

	render:function(){
		return(
			<View>
			<Text>This is the next page</Text>
			</View>
		);
	}
})

module.exports = Content;
