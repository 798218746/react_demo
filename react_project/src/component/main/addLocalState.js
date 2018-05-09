import React from 'react';

class AddLocalState extends React.Component{
	constructor(props){
		super(props);
		this.state = {data:new Date()};
	}
	render(){
		return(
			<div>
				<h1>在类组件中添加本地状态(state)</h1>
				<h2> {this.state.data.toLocaleTimeString()} </h2>
			</div>
		)
	}
}

export default AddLocalState;