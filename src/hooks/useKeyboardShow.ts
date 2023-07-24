import { useCallback, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export default function useKeyboardShow() {
  const [isKeyboardShow, setKeyboardShow] = useState(false);
  const onKeyboardDidShow = useCallback(() => {
    setKeyboardShow(true);
  }, []);
  const onKeyboardDidHide = useCallback(() => {
    setKeyboardShow(false);
  }, []);
  useEffect(() => {
    const showListener = Keyboard.addListener(
      'keyboardWillShow',
      onKeyboardDidShow,
    );
    const hideListener = Keyboard.addListener(
      'keyboardWillHide',
      onKeyboardDidHide,
    );
    return () => {
      showListener?.remove();
      hideListener?.remove();
    };
  }, [onKeyboardDidHide, onKeyboardDidShow]);

  return isKeyboardShow;
}
