import React, { Component } from 'react';

export default class Menu extends Component {
	render(){
		const { children } = this.props;
		return (
			<div>
				<p>Bamboo Bank</p>
				{children}
			</div>			
			);
	}
}