import React, { Component } from 'react';
import style from '../../styles/InfobarComponent';

export default class InfobarComponent extends Component {
	

	render(){
		const { uid, balance } = this.props;
		return (
					<div style={style.container}>
						<p style={style.uid}>uid: {uid}</p>
						<p>{balance}</p>
					</div>
			)
	}
}