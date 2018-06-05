import React from 'react';


function Mailbox(props){
	const unreadMsg = props.unreadMsg;
	return (
		<div>
			<h1>使用逻辑 && 操作符的内联 if 用法</h1>
			{ 
				unreadMsg.length> 0 &&
				<h2>
					Hi!you have {unreadMsg.length} unread message.
				</h2>
			}
		</div>
	)
}

const msg = ['a','b:2','c:3'];
class Luojifu extends React.Component{
	render(){
		return(
			<Mailbox unreadMsg={msg} />
		)
	}
}
export default Luojifu;
