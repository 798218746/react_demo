import React, { Component } from 'react';

class Nav extends Component {
	constructor(){
		super();
		this.state = {
			arr:['a','b','c'],
			btnName:'确认'
		};
		this.funct = this.funct.bind(this);
	}
	funct(){
//		var self = this;
		console.log('8888');
	}
    render() {
       return (
        	<div>
	        	<div onClick={this.funct}>{this.state.btnName}</div>
        	</div>
        );
    }
}
export default Nav;