import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/authentication';
import LogoutButtonComponent from '../components/Common/LogoutButtonComponent';
import InfobarComponent from '../components/Dashboard/InfobarComponent';
import TransferBodyComponent from '../components/Dashboard/TransferBodyComponent';
import { logoutUser } from '../actions/authentication';


class DashboardContainer extends Component {
	render(){
		return (
					<div>
						<LogoutButtonComponent logoutUser={this.props.logoutUser} />

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
		addUser: (email, password) => dispatch(addUser(email, password)),
		logoutUser: ()=> dispatch(logoutUser())
	}
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(DashboardContainer);