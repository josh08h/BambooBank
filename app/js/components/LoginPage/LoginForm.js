import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import style from '../../styles/LoginPage';
import { Link } from 'react-router';

export default class Menu extends Component {
	handleLoginUser(){
		let email = this.refs.email.input.value;
		let password = this.refs.password.input.value;
		this.props.loginUser(email, password);
	}

	render(){
		return (
			<div>
				<h1>Login Page</h1>
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
						<Link to="/register">
						<RaisedButton label="Register"
							style={style.registerButton}
						/>
						</Link>
						<RaisedButton label="Login"
						onClick = {() => this.handleLoginUser()} />
					</div>
			);
	}
}