import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';

import styles from './index.less';

function Index() {
  /**
   * this指向问题
   */
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

  /**
   * Symbol类型
   * Symbol类型创建独一无二的数据，两个值永远不相等（永远不会重复的字符串）
   * Symbol.description - 定义Symbol的描述语言
   */
  const Symbol1 = Symbol(1);
  const Symbol2 = Symbol(1);
  // console.log(Symbol1);
  // console.log(Symbol1 === Symbol2);
  // console.log(Symbol1.description);

  // 用Symbol3.for声明在全局变量里
  const Symbol3 = Symbol.for('JS');
  const Symbol4 = Symbol.for('JS');
  // console.log(Symbol3);
  // console.log(Symbol3 === Symbol4);
  // console.log(Symbol3.description);

  // Symbol应用 - 做唯一的key,避免相同的key值产生数据的覆盖
  const user1 = {
    name: '李四',
    key: Symbol(),
  };
  const user2 = {
    name: '李四',
    key: Symbol(),
  };
  const grade = {
    [user1.key]: {
      js: 80,
    },
    [user2.key]: {
      js: 70,
    },
  };

  // console.log(grade[user1.key]);
  /**
   *深浅拷贝方法
   * Object.create()方法用于创建一个新对象，并把新对象的原型对象指向该方法的第一个参数。
   */

  const father = {
    age: 18,
  };

  const son = Object.create(father);
  console.log(son.age);
  console.log(son.__proto__);

  /**
   * js事件循环机制
   */
  setTimeout(() => {
    // 异步任务 - 宏任务 - 计时器线程将setTimeout回调送入宏队列等待微任务队列全部执行完毕，再执行
    console.log('计时器执行');
  }, 0);
  // 同步任务 - 按照顺序由js主线程直接执行
  for (let i = 0; i < 100; i++) {
    console.log('i', i);
  }

  // 同步任务
  for (let j = 0; j < 100; j++) {
    console.log('j', j);
  }
  // 异步任务 - 微任务（vip）- 优先执行
  Promise.resolve().then(() => {
    console.log('Promise执行');
  });

  return (
    <View className={styles['p--home']}>
      <Text>Hello world!</Text>
      {/* <View className={styles['p--text']}>Hello world!</View> */}
    </View>
  );
}
export default Index;
