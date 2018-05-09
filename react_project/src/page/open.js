import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

//引入样式
import '../css/open.css';

//引入组件
import Header from '../component/header/header';
import Nav from '../component/header/nav';
import Container from '../component/header/container';
import Zujian from '../component/header/gouchengzujian';
import Tiquzujian from '../component/header/tiquzujian';

class Open extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                <Container />
                <Zujian />
                <Tiquzujian />
            </div>
        );
    }
}

export default Open;
