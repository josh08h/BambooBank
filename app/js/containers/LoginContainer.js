import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginPage/LoginForm';
import Paper from 'material-ui/Paper';
import { loginUser } from '../actions/authentication';
import style from '../styles/LoginContainer';
class LoginContainer extends Component {
	
	componentWillUpdate(nextProps, nextState){
		nextProps.uid ? nextProps.router.push('/dashboard')
									: null;
	}


	render(){
		return (
			<div style={style.container}>
				<Paper>
					<LoginForm
						loginUser={this.props.loginUser}/>
				</Paper>
			</div>
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