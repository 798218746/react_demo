import React, { Component } from 'react';

//引入样式
import '../css/open.css';

//引入组件
import Mounted from '../component/main/mounted';
import AddLocalState from '../component/main/addLocalState';
import Toggle from '../component/main/btnEvent';
import Tiaojian from '../component/main/tiaojian';
import Yuansubianliang from '../component/main/yuansubianliang';
import HasState from '../component/main/hasState';
import Luojifu from '../component/main/tiaojianluojifu';

class Second extends Component {
    render() {
        return (
            <div>
                <AddLocalState />
                <Mounted />
                <Toggle />
                <Tiaojian />
                <Yuansubianliang />
                <HasState />
                <Luojifu />
            </div>
        );
    }
}

export default Second;
