import React, { Component } from 'react';

//一个组件
const element = React.createElement(
	'div',
	{className:'ele ele_box'},
	'你好'
);
class Container extends Component {
	constructor(){
		super();
		this.state = {
			content:'确认'
		};
	}
	
	render() {
       	return (
        	<div>
        		<div className='container_box'>
	        		<div className='content_box'>
	        			{this.state.content}
	        		</div>
	        	</div>
	        	{element}
	        	<div className='tickClock'></div>
        	</div>
        );
    }
}
export default Container;