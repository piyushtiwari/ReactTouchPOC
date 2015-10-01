'use strict';

var React = require('react-native');
var buffer = require('buffer');

var {
	Text,
	TextInput,
	View,
	StyleSheet,
	TouchableHighlight,
	Component,
	ActivityIndicatorIOS
} = React;

class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			showProgress:false
		}
	}
	render(){
		var errorCtrl = <View />;
		if(!this.state.success && this.state.badCredentials){
			errorCtrl = <Text >The username or Password entered is incorrect</Text>;
		}
return(
<View style={styles.container}>
	<TextInput placeholder="User Name" onChangeText={(text)=>this.setState({username:text})} style={styles.textInput}/>
	<TextInput placeholder="Password" onChangeText={(text)=>this.setState({password:text})} style={styles.textInput} secureTextEntry="true"/>

<TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={styles.button} >

<Text style={styles.buttonText}>Log in</Text></TouchableHighlight>
{errorCtrl}
	<ActivityIndicatorIOS 
	animating={this.state.showProgress}
	size="large"  style={styles.loader}/>
	</View>
		);}
onLoginPressed(){
console.log("Logging in using username "+this.state.username);
this.setState({showProgress:true});
var authService = require('./AuthService');
authService.login({
	username: this.state.username,
	password: this.state.password
},(results)=>{
	this.setState(Object.assign({

	},results));
	if(results.success && this.props.onLogin){
		this.props.onLogin();
	}
});
}

}

var styles = StyleSheet.create({
	container:{
		flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:10,
	},
	textInput:{
		margin:10,
		height:50,
        justifyContent: 'center',
        padding:10,
        borderWidth:1,
	},
	button:{
    backgroundColor:'#48BBEC',
    height:50,
    alignSelf:'stretch',
    justifyContent:'center',
    padding:10,
    margin:10,
	},
	buttonText:{
		fontSize:20,
		color:'#FFF',
		alignSelf:'center',
	},
    loader:{
    	marginTop: 20
    }

});
module.exports = Login;

