import React, { Component } from 'react';


function Msg(user){
    return user.name+' '+user.skill;
}
let user = {
    name:'xiaoming',
    skill:'xxxxx'
};

const item = (
    <div>
        {Msg(user)}
    </div>
);
class Header extends Component {
    render() {
       return (
           item
        );
    }
}

export default Header;