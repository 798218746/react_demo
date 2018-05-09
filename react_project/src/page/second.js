import React, { Component } from 'react';

//引入样式
import '../css/open.css';

//引入组件
import Mounted from '../component/main/mounted';
import AddLocalState from '../component/main/addLocalState';

class Second extends Component {
    render() {
        return (
            <div>
                <AddLocalState />
                <Mounted />
            </div>
        );
    }
}

export default Second;
