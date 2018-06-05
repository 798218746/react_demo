import React from 'react';

/*控制对应状态的文本内容*/
function UserGreeting(props){
	return <div>用户登录</div>
}
function GuestGreeting(props){
	return <div>游客登录</div>
}

function Greeting(props){
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn){
		return <UserGreeting />
	}
	return <GuestGreeting />
}

/*控制按钮显示状态的方法*/
function LoginBtn(props){
	return(
		<button onClick={props.onClick}>点击登录</button>
	)
}

function LogoutBtn(props){
	return(
		<button onClick={props.onClick}>点击注销</button>
	)
}

class HasState extends React.Component{
	constructor(props){
		super(props);
		//声明初始状态值
		this.state = {isLoggedIn:false};
		//改变this的指向
		this.handLogin = this.handLogin.bind(this);
		this.handLogout = this.handLogout.bind(this);
	}
	
	handLogin(){
		this.setState({isLoggedIn:true});
	}
	handLogout(){
		this.setState({isLoggedIn:false});
	}
	
	render(){
		let titleMsg = '一个有状态组件';
		const isLoggedIn = this.state.isLoggedIn;
		let button = null;
		if(isLoggedIn){
			button = <LoginBtn onClick = {this.handLogout} />
		}else{
			button = <LogoutBtn onClick = {this.handLogin} />
		}
		
		return(
			<div>
				<h2>{titleMsg}</h2>
				<Greeting isLogedIn={isLoggedIn}/>
				{button} 
			</div>
		)
	}
}
export default HasState;