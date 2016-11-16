import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import UsernameSelectField from './UsernameSelectField';
import BambeuroSelectField from './BambeuroSelectField';
import RaisedButton from 'material-ui/RaisedButton';


export default class TransferBodyComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			recipient: null,
			amount: null
		}
	}

	handleRecipientChange(recipient){
		this.setState({
			recipient
		})
	}

	handleAmountChange(amount){
		this.setState({
			amount
		})
	}

	handleTransferFunds(amount, recipient){
		
		//validation here

		this.props.transferFunds(amount, recipient)
	}

	render(){
		return (
				<Paper zDepth={1}>
					<BambeuroSelectField
						onAmountChange={(amount)=>this.handleAmountChange(amount)}/>
					<UsernameSelectField 
						getUsernames={this.props.getUsernames}
						onRecipientChange={(recipient)=>this.handleRecipientChange(recipient)}
					/>
					<RaisedButton label='Confirm'
						onClick={()=>this.handleTransferFunds(this.state.amount, this.state.recipient)}/>
				</Paper>
			)
	}
}