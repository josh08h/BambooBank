import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginPage/LoginForm';
import { loginUser } from '../actions/authentication';

class LoginContainer extends Component {
	
	componentWillUpdate(nextProps, nextState){
		nextProps.uid ? nextProps.router.push('/dashboard')
									: null;
	}


	render(){
		return (
					<LoginForm
						loginUser={this.props.loginUser}/>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		uid: state.user.id
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (email, password) => dispatch(loginUser(email, password))
	}
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(LoginContainer);