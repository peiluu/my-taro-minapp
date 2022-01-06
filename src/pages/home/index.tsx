import { Component } from 'react'
import { View, Text } from '@tarojs/components';


import { observer } from 'mobx-react';

import styles from './index.scss';


export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {

    return (
      <View className={styles['p--home']}>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
