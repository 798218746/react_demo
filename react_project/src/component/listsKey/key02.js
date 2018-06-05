import React from 'react';

function ListItem(props){
	return <li>{props.value}</li>
}

function NumList(props){
	const item = props.item;
	const listItems = item.map((number)=>
		<ListItem key={number.toString()} value={number} />
	)
	return(
		<ul>{listItems}</ul>
	)
}

const item = [1,2,3];
class KeyFun extends React.Component{
	render(){
		return(
			<div>
				<div>------使用 keys 提取组件-----</div>
				<NumList item={item} />
			</div>
		)
	}
}
export default KeyFun;