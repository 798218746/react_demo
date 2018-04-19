import React,{Component} from 'react';

function tick(){
	ReactDOM.render(
		<Clock date={new Date()} />
	)
}
setInterval(tick, 1000);

class Clock extends React.Component{
	render(){
		return(
			<div>It is {this.props.date.toLocaleTimeString()}</div>
		)
	}
}