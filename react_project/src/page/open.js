import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//引入组件
import Header from '../component/header/header';
import Nav from '../component/header/nav';
class Open extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
            </div>
        );
    }
}

export default Open;