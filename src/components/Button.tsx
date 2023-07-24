import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import { colors } from 'styles/colors';

type Props = {
  label: string;
  leftIcon?: React.ReactElement;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  dark?: boolean;
};

const Button: React.FC<Props> = ({ onPress, label, leftIcon, style, dark }) => {
  return (
    <Pressable
      style={[styles.container, dark ? styles.dark : null, style]}
      onPress={onPress}
    >
      {leftIcon ? <View style={styles.iconContainer}>{leftIcon}</View> : null}
      <Text style={styles[dark ? 'whiteText' : 'blackText']}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: {
    backgroundColor: colors.black,
  },
  whiteText: {
    color: colors.bgPrimary,
  },
  blackText: {
    color: colors.textPrimary,
  },
  iconContainer: {
    marginRight: 8,
  },
});
