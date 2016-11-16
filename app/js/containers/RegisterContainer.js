import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginPage/LoginForm';
import RegisterForm from '../components/RegisterPage/RegisterForm';
import { addUser } from '../actions/authentication';
import Paper from 'material-ui/Paper';
import style from '../styles/RegisterContainer';

class RegisterContainer extends Component {
	render(){
		return (
			<div style={style.container}>
				<Paper>
					<RegisterForm
						addUser = {this.props.addUser}
					/>
				</Paper>
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user.id
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addUser: (email, password) => dispatch(addUser(email, password))
	}
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(RegisterContainer);