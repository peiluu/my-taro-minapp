import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { user4 } from './index';

import styles from './index.less';

/**
 * 泛型
 * 泛型（Genercics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
 * 泛型类型T T表示任何类型
 * 泛型可以用于合并一个只有传入数据类型的不同的的函数方法，简化代码量
 */
function Id<T, W>(n1: T, n2: W): any {
  console.log([n1, n2]);
  return [n1, n2];
}

Id(1, 2);
Id([1], 2);

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
 * interface 接口 和 type 类型别名
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。它有时被称做“鸭式辨型法”或“结构性子类型化”。
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */
// export default interface user {
//   name: string;
// };

type user1 = {
  name: string;
};
type user2 = {
  age: number;
};
// type keys = 'firstName' | 'lastName';
const keys = {
  firstName: '',
  lastName: '',
};
type UserName = {
  [i in keys]: string;
};
function Index() {
  const getUser = (tem: UserName) => {
    console.log(tem);
  };

  getUser({
    firstName: '1',
    lastName: '1',
  });

  return <View className={styles['p--home']}>ts编写实例</View>;
}
export default Index;
