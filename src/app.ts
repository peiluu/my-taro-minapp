import { Component } from 'react';
import { observable, action, computed, useStrict } from 'mobx';
import './app.less';

class App extends Component {
  // this.props.children 是将要会渲染的页面
  render() {
    console.log('第一次提交');
    console.log(222222222);
    return this.props.children;
  }
}

export default App;
