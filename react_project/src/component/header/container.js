import React, { Component } from 'react';

//一个组件
const element = React.createElement(
	'div',
	{className:'ele ele_box'},
	'你好'
);

//一个方法
(function tick(){
	const item = (
		<div>
			<p>It is {new Date().toLocaleDateString()}</p>
		</div>,document.getElementsByClassName('tickClock')
	);
	console.log('66666');
})();

class Container extends Component {
	constructor(props){
		super(props);
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