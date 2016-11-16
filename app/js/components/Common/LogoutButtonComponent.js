import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

export default class LogoutButtonComponent extends Component {
	render(){
		const { logoutUser } = this.props;
		return (
			<Link to='/'>
				<RaisedButton label="Logout"
						onClick = {() => logoutUser()}
				/>
			</Link>
			)
	}
}