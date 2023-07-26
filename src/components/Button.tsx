import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  View,
  ActivityIndicator,
} from 'react-native';
import { colors } from 'styles/colors';

type Props = {
  label: string;
  leftIcon?: React.ReactElement;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  dark?: boolean;
  loading?: boolean;
};

const Button: React.FC<Props> = ({
  onPress,
  label,
  leftIcon,
  style,
  dark,
  loading,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        dark ? styles.dark : null,
        loading ? styles.loadingContainer : null,
        style,
      ]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator
          color={colors.white}
          style={styles.loadingIndicator}
        />
      ) : leftIcon ? (
        <View style={styles.iconContainer}>{leftIcon}</View>
      ) : null}
      <Text style={[styles.text, styles[dark ? 'whiteText' : 'blackText']]}>
        {label}
      </Text>
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
    borderColor: 'transparent',
  },
  loadingContainer: {
    backgroundColor: colors.textSecondary,
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
  loadingIndicator: {
    marginRight: 8,
  },
  text: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
});
