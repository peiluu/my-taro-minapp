import { useState, useEffect } from 'react';
import Taro, { useDidHide, useDidShow } from '@tarojs/taro';
// import { get as getGlobalData, set as setGlobalData } from '@utils/globaldata';
import { ELDER_MODE_TYPE } from '@/config/constant';
// import * as request from '@utils/request';

interface ELDERS_ENTRY {
  isOlder: string;
  isReminder: string;
}

// 缓存配置的key
export const ELDER_MODE_STROAGE_KEY = 'eldersEntry';

// 长辈模式全局class名
export const ELDER_MODE_CLASS_NAME = 'theme-elder-mode';

/**
 * Example: project/p34/src/pages/pay/index.tsx
 * @description 敬老版 - 长辈模式 Class 类组件 - 获取根节点样式名
 * @returns {stirng} elderClassName
 */
export const getElderModeClassName = () => {
  const storageEldersEntry = Taro.getStorageSync(ELDER_MODE_STROAGE_KEY);
  let elderClassName = '';
  const isElder = storageEldersEntry && storageEldersEntry.isOlder === ELDER_MODE_TYPE.ELDER_MODE;

  elderClassName = isElder ? ELDER_MODE_CLASS_NAME : '';

  return elderClassName;
};

/**
 * 长辈模式配置
 * Example: project/p34/src/components/form/formitem/index.tsx
 * @description 敬老版 - 长辈模式 Hook 函数组件 - 获取长辈模式配置
 * @return {string} rootClassName - 长辈模式标识.
 * @return {boolean} isElderMode - 当前是否长辈模式
 * @return {boolean} eldersEntry - 当前配置
 * @return {function} onToogleElderMode - 是否记住当前模式
 */
export const useElderMode = () => {
  // 更新长辈模式配置全局缓存
  const updateEldersEntry = config => {
    Taro.setStorageSync(ELDER_MODE_STROAGE_KEY, config);
    // setGlobalData(ELDER_MODE_STROAGE_KEY, config);
  };

  // 初始化长辈模式配置
  const initIsElderMode = async () => {
    // const storageEldersEntry = getGlobalData(ELDER_MODE_STROAGE_KEY);
    // if (!storageEldersEntry) return;
    // updateEldersEntry(storageEldersEntry);
  };

  // 更新或切换长辈模式
  const onToogleElderMode = (params?: ELDERS_ENTRY) => {
    if (params) {
      updateEldersEntry(params);
      return;
    }
    const storageEldersEntry = Taro.getStorageSync(ELDER_MODE_STROAGE_KEY);
    const IS_ELDER_MODE =
      storageEldersEntry && storageEldersEntry.isOlder === ELDER_MODE_TYPE.ELDER_MODE;
    const newELdersEntry = {
      ...storageEldersEntry,
      isOlder: IS_ELDER_MODE ? ELDER_MODE_TYPE.NORMAL_MODE : ELDER_MODE_TYPE.ELDER_MODE,
    };
    updateEldersEntry(newELdersEntry);
    if (newELdersEntry.isOlder === ELDER_MODE_TYPE.ELDER_MODE) {
      Taro.redirectTo({
        url: '/pkg3/home/index',
      });
    }
  };

  useDidShow(() => {
    initIsElderMode();
  });

  useDidHide(() => {});

  useEffect(() => {}, []);

  // 当在组件中使用的时候没有useDidShow钩子直接使用Taro.getStorageSync替代useState
  const eldersEntryData = Taro.getStorageSync(ELDER_MODE_STROAGE_KEY);
  return {
    rootClassName:
      eldersEntryData?.isOlder === ELDER_MODE_TYPE.ELDER_MODE ? ELDER_MODE_CLASS_NAME : '',
    isElderMode: +eldersEntryData?.isOlder,
    eldersEntry: eldersEntryData,
    onToogleElderMode,
  };
};

/**
 * 自定义hooks, use开头的一个函数，内部可以使用其他的hook
 * @returns useTodo
 */
export const useFunc = () => {
  useDidShow(() => {
    console.log('触发useDidShow');
  });
  const [number, setNumber] = useState(1);
  useDidShow(() => {
    setNumber(2);
    console.log(`触发useDidShow, 输出number的值=${number}`);
  });
  return {
    useTodo: '一个自定义hook函数',
  };
};

/**
 * react函数式组件，大写开头的函数
 */
export const Index = () => {
  useDidShow(() => {
    console.log('触发useDidShow');
  });
  const [number, setNumber] = useState(1);
  // useDidShow(() => {
  //   console.log(`触发useDidShow, 输出number的值=${number}`);
  // });
};
