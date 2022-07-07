import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';

import styles from './index.less';

/**
 * 泛型
 * 泛型（Genercics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
 * 泛型类型T T表示任何类型
 * 泛型可以用于合并一个只有传入数据类型的不同的的函数方法，简化代码量
 */
function Id<T, W>(n1: T, n2: W): any {
  // console.log(n1, n2);
  return [n1, n2];
}

Id(1, 2);

// 泛型约束（extends 受到某一个接口的约束）
interface ILength {
  length: number;
}

// 传入的T泛型类型必须要一个number类型的length属性
function IExtent<T extends ILength>(n: T): number {
  return n.length;
}
IExtent('hre');

/**
 * this指向问题
 */
function Index() {
  const obj = {
    a: 10,
    b() {
      // console.log(`this a = ${this.a}`);
    },
    c: () => {
      // console.log(`this b = ${this.a}`);
    },
  };
  obj.b(); // 普通函数中this指向该函数的直接调用者 => obj
  obj.c(); // 箭头函数中this指向其定义环境

  return (
    <View className={styles['p--home']}>
      <Text>Hello world!</Text>
      <Text>Hello world!</Text>
      <Text>Hello world!</Text>
    </View>
  );
}
export default Index;
