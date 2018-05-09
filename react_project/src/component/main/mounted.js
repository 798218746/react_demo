import React from 'react';

let name = 'mounting 生命周期挂在与取消';

class Mounted extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:new Date()
		};
	}
	
	componentDidMount(){
		this.timerID = setInterval(
			()=>this.tick(),1000
		)
	}
	
	
	componentWillUnmount(){
		clearInterval(this.timerID)
	}
	
	tick(){
		this.setState({
			data:new Date()
		});
	}
	
	render(){
		return(
      		<div>
      			<div>{name}</div>
      			<div> {this.state.data.toLocaleTimeString()} </div>
      		</div>
		)
	}
}
export default Mounted;
