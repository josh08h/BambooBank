import React, { Component } from 'react';

export default class TransferBodyComponent extends Component {
	render(){
		const { uid, balance } = this.props;
		return (
				<div>
					<div>
						<p>{uid}</p>
						<p>Balance</p>
					</div>
				</div>
			)
	}
}