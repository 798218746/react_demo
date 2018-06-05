import React from 'react';


const numbers = [1,2,3,4,5];

function NumList(props){
	const numbers = props.numbers;
	//键(Keys) 帮助 React 标识哪个项被修改、添加或者移除了。
	//可用索引值或者key
	const listItems = numbers.map((number,index)=>
		<li key={index} id={'num_'+index}>{number}</li>
	);
	return(
		<ul>
			{listItems}
		</ul>
	);
}

class Lists extends React.Component{
	
	render(){
		return (
			<NumList numbers={numbers} />
		)
	}
	
}
export default Lists;
