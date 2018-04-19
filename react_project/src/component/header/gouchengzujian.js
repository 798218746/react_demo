import React, { Component } from 'react';

//props构成组件

function Hello(props){
	return <p>hello {props.name} </p>;
}
function Show(){
	return (
		<div>
			<Hello name='构成组件1' />
			<Hello name='构成组件2' />
			<Hello name='构成组件3' />
		</div>
	)
}
class Zujian extends Component {
  	render() {
	    return (
	      <div className="App">
	         <Show />
	      </div>
	    );
  	}
}
export default Zujian;
