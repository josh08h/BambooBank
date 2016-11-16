import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import style from '../../styles/Menu';
import { Link } from 'react-router';


export default class RegisterForm extends Component {
	
	handleSubmit(){
		let email = this.refs.email.input.value;
		let password = this.refs.password.input.value;
		this.props.addUser(email, password);
	}

	render(){
		return (
			<div style={style.formContainer}>
				<h1>Registration Page</h1>
						<TextField
							hintText="Email"
							floatingLabelText="Email"
							ref="email"
						/>
						<br />
						<TextField
							hintText="Password"
							floatingLabelText="Password"
							ref="password"
						/>
						<br />
						<Link to="/">
						<RaisedButton label="Cancel"
							style={style.registerButton}
						/>
						</Link>
						<RaisedButton label="Submit"
							onClick={()=>this.handleSubmit()}/>
				</div>
			);
	}
}