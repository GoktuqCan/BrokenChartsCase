import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  children: string;
};

const HeaderTitle: React.FC<Props> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default HeaderTitle;

const styles = StyleSheet.create({
  title: {
    marginTop: 8,
    lineHeight: 36,
    fontWeight: '700',
    fontSize: 24,
  },
});
