import React from 'react';

class Toggle extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {isToggleOn:true};
    	// 改变this的指向
    	this.handleClick = this.handleClick.bind(this);
  	}

  	handleClick(){
  		console.log('this is:', this);
   		this.setState(prevState=>({
      		isToggleOn: !prevState.isToggleOn
    	}))
  	}

  	render (){
  		//若是不使用bind改变this指向则可使用此方法
  		//onClick={(e) => this.handleClick(e)}
	    return(
	      	<button onClick={this.handleClick}>
	      		{this.state.isToggleOn?'ON':'OFF'}
	      	</button>
	    )
	}
}
export default Toggle;
