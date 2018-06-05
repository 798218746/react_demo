import React, { Component } from 'react';

//引入样式
import '../css/open.css';

//引入组件
import Lists from '../component/listsKey/lists01';
import KeyFun from '../component/listsKey/key02';
import Temperature from '../component/stateUp/temperature';
class Third extends Component {
    render() {
        return (
            <div>
                <Lists />
                <KeyFun />
                <Temperature />
            </div>
        );
    }
}

export default Third;
