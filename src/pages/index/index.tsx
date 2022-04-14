import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';

import styles from './index.less';

function Index() {
  return (
    <View className={styles['p--home']}>
      <Text>Hello world!</Text>
      <Text>Hello world!</Text>
      <Text>Hello world!</Text>
    </View>
  );
}
export default Index;
