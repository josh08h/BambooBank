import React, { Component } from 'react';
import style from '../../styles/InfobarComponent';

export default class InfobarComponent extends Component {


	render(){
		const { uid, bambeuros } = this.props;
		return (
					<div style={style.container}>
						<p style={style.uid}>uid: {uid}</p>
						<p>B:{bambeuros}</p>
					</div>
			)
	}
}