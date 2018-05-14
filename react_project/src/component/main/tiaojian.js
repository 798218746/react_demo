import React from 'react';


function UserGreeting(props){
	//若为真则返回
	return <h1>welcome back. </h1>
}

function GuestGreeting(props){
	//若为假则返回
	return <h1>please sign again. </h1>
}

function Greeting(props){
	//判断条件
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn){
		return <UserGreeting />;
	}else{
		return <GuestGreeting />;
	}
}

class Tiaojian extends React.Component{
	render(){
		return(
			<div>
				<p>条件渲染</p>
				<Greeting isLoggedIn={false} />
			</div>
		)
	}
}
export default Tiaojian;