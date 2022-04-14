import { useEffect, useState } from 'react';
import Taro, { useDidHide, useDidShow } from '@tarojs/taro';

// interface IUserLocation {
//   (longitude: number, latitude: number): number;
// }

export default (longitude: number, latitude: number) => {
  const [location, setLocation] = useState<Taro.getLocation.SuccessCallbackResult>();
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [distance, setDistance] = useState<number>(0);

  const getLocationLoop = () => {
    const t: NodeJS.Timeout = setInterval(async () => {
      try {
        const res: Taro.getLocation.SuccessCallbackResult = await Taro.getLocation({
          type: 'wgs84',
        });
        setLocation(res);
      } catch (e) {}
    }, 5000);
    setTimer(t);
  };

  const start = async () => {
    const res = await Taro.getSetting();
    if (!res.authSetting['scope.userLocation']) {
      try {
        await Taro.authorize({
          scope: 'scope.userLocation',
        });
        getLocationLoop();
      } catch (e) {
        Taro.showModal({
          title: '提示',
          content: '若拒绝授权将无法使用此功能，确认拒绝授权吗？',
          success: r => {
            if (r.confirm) Taro.openSetting();
          },
        });
      }
    } else {
      getLocationLoop();
    }
  };

  const countDistance = (
    lat1: number | undefined,
    lng1: number | undefined,
    lat2: number,
    lng2: number
  ) => {
    if (!lat1 || !lng1) return 0;
    const La1 = (lat1 * Math.PI) / 180.0;
    const La2 = (lat2 * Math.PI) / 180.0;
    const La3 = La1 - La2;
    const Lb3 = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0;
    let s =
      2 *
      Math.asin(
        Math.sqrt(Math.sin(La3 / 2) ** 2 + Math.cos(La1) * Math.cos(La2) * Math.sin(Lb3 / 2) ** 2)
      );
    s *= 6378.137;
    s = Math.round(s * 10000) / 10000;
    s = Number(s.toFixed(4));
    return s;
  };

  const end = () => {
    if (timer) {
      clearInterval(timer);
    }
  };

  useDidShow(() => {
    start();
  });

  useDidHide(() => {
    end();
  });

  useEffect(() => {
    const d = countDistance(location?.latitude, location?.longitude, latitude, longitude);
    setDistance(d);
  }, [location]);

  return distance;
};
