import React,{Component} from 'react';

const commentData = {
	date:new Date(),
	text:'提取组件',
	author:{
		name:'xmm',
		authUrl:require('../../img/huiyuan_yiji.png')
	}
}


//连接时间方法
function format(date){
	return date.toLocaleDateString();
}

function Comment(props){
	return(
		<div className ='userInfo'>
			<img className='pic_box' 
				src={props.author.authUrl}
				alt={props.author.name} />
			<div>{props.author.name}</div>
			<div>{props.text}</div>
			<div>{format(props.date)}</div>
		</div>
	)
}

class Tiquzujian extends Component {
	render(){
		return(
			<div>
				<Comment date={commentData.date} text={commentData.text} author={commentData.author} />
			</div>
		)
	}
}
export default Tiquzujian;



