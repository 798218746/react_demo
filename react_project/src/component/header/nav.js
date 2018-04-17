import React, { Component } from 'react';

class Nav extends React.Component {
	constructor(){
		super();
		this.state = {
			arr:['a','b','c'],
			btnName:'确认'
		};
		this.funct = this.funct.bind(this);
	}
	funct(){
		var self = this;
		console.log('6666666');
	}
	
    render() {
       return (
        	<div>
	        	<button onClick={this.funct}>{this.state.btnName}</button>
        		<div>{this.state.arr}</div>
        	</div>
        );
    }
}
export default Nav;