import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';

//引入组件
import Open from './page/open';
import Second from './page/second'
//import 'antd';
//import { Button } from 'antd';
class App extends Component {
  render() {
    return (
      <div className="App">
         <Open />
         <Second />
      </div>
    );
  }
}
export default App;
