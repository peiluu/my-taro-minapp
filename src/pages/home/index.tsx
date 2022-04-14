import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { useFunc } from '@/hooks/useElderMode';

import styles from './index.less';

function Index() {
  const { useTodo } = useFunc();
  console.log(useTodo);
  return (
    <View className={styles['p--home']}>
      <Text>Hello world!</Text>
      <Text>Hello world!</Text>
      <Text>Hello world!</Text>
    </View>
  );
}
export default Index;
