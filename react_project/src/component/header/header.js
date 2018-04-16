import React, { Component } from 'react';

//引入样式文件
import '../../css/header.css';

let user = {
    name:'xiaoming',
    skill:'xxxxx'
};

const item = (
    <div className = 'head_box'>
        {Msg(user)}
    </div>
);

function Msg(user){
    return user.name+' '+user.skill;
}

class Header extends Component {
    render() {
       return (
           item
        );
    }
}

export default Header;