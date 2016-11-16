import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/authentication';
import LogoutButtonComponent from '../components/Common/LogoutButtonComponent';
import InfobarComponent from '../components/Dashboard/InfobarComponent';
import TransferBodyComponent from '../components/Dashboard/TransferBodyComponent';
import { logoutUser } from '../actions/authentication';
import Paper from 'material-ui/Paper';
import style from '../styles/DashboardContainer';

class DashboardContainer extends Component {
	render(){
		return (
			<Paper zDepth={1}>
					<div style={style.container}>
						<LogoutButtonComponent logoutUser={this.props.logoutUser} />
						<InfobarComponent uid={this.props.user}/>
					</div>
					<div>
						<TransferBodyComponent />
					</div>
			</Paper>
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