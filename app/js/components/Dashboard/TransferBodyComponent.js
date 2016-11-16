import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import UsernameSelectField from './UsernameSelectField';
import BambeuroSelectField from './BambeuroSelectField';
import RaisedButton from 'material-ui/RaisedButton';


export default class TransferBodyComponent extends Component {
	handleTransfer(value, amount){

	}

	render(){
		return (
				<Paper zDepth={1}>
					<BambeuroSelectField />
					<UsernameSelectField 
						getUsernames={this.props.getUsernames}
					/>
					<RaisedButton label='Confirm'/>
				</Paper>
			)
	}
}