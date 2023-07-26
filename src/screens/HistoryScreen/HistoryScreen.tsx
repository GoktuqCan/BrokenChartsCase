import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from 'styles/colors';
import HistoryHeader from './components/HistoryHeader';
import HistoryList from './components/HistoryList';

const HistoryScreen = () => {
  return (
    <View style={styles.wrapper}>
      <HistoryHeader />
      <HistoryList />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
});
