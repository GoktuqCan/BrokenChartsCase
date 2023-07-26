import { useCallback, useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';

export default function useKeyboardShow() {
  const [isKeyboardShow, setKeyboardShow] = useState(false);
  const isAndroid = Platform.OS === 'android';
  const onKeyboardDidShow = useCallback(() => {
    setKeyboardShow(true);
  }, []);
  const onKeyboardDidHide = useCallback(() => {
    setKeyboardShow(false);
  }, []);
  useEffect(() => {
    const showListener = Keyboard.addListener(
      `keyboard${isAndroid ? 'Did' : 'Will'}Show`,
      onKeyboardDidShow,
    );
    const hideListener = Keyboard.addListener(
      `keyboard${isAndroid ? 'Did' : 'Will'}Hide`,
      onKeyboardDidHide,
    );
    return () => {
      showListener?.remove();
      hideListener?.remove();
    };
  }, [isAndroid, onKeyboardDidHide, onKeyboardDidShow]);

  return isKeyboardShow;
}
