import React from 'react';

function UserGreeting(props){
	return <p>已经登录</p>
}

function GuestGreeting(props){
	return <p>已经注销</p>
}

function Greeting(props){
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn){
		return <UserGreeting />
	}else{
		return <GuestGreeting />
	}
}

//按钮内容改变
function LoginBtn(props){
	return (
		<button onClick={props.onClick}>LogIn</button>
	)
}
function LogoutBtn(props){
	return (
		<button onClick={props.onClick}>LogOut</button>
	)
}

class Yuansubianliang extends React.Component {
	constructor(props){
		super(props);
		this.handLoginClick = this.handLoginClick.bind(this);
		this.handLogoutClick = this.handLogoutClick.bind(this);
		this.state = {isLoggedIn:false}
	}
	handLoginClick(){
		this.setState({isLoggedIn:true})
	}
	handLogoutClick(){
		this.setState({isLoggedIn:false})
	}
	render(){
		const isLoggedIn = this.state.isLoggedIn;
		let button = null;
		if(isLoggedIn){
			button = <LogoutBtn onClick = {this.handLogoutClick} />
		}else{
			button = <LoginBtn onClick = {this.handLoginClick} />
		}
		return(
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
        		{button}
			</div>
		)
	}
}
export default Yuansubianliang;