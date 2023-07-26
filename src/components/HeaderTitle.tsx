import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { colors } from 'styles/colors';

type Props = {
  children: string;
  style?: TextStyle;
};

const HeaderTitle: React.FC<Props> = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default HeaderTitle;

const styles = StyleSheet.create({
  title: {
    lineHeight: 36,
    fontWeight: '700',
    fontSize: 24,
    color: colors.textPrimary,
  },
});
