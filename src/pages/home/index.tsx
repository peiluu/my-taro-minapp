import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';

import { observer } from 'mobx-react';

import styles from './index.scss';

const Index = () => {
  return (
    <View className={styles['p--home']}>
      <Text>Hello world!</Text>
      <Text>Hello world!</Text>
      <Text>Hello world!</Text>
    </View>
  );
};
export default Index;
