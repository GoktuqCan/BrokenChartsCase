import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from 'styles/colors';
import SearchInput from './SearchInput';
import HeaderTitle from 'components/HeaderTitle';

const SearchHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <HeaderTitle style={styles.title}>Search</HeaderTitle>
      <SearchInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgSecondary,
    borderWidth: 1,
    borderColor: colors.bgSeparator,
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 8,
  },
});

export default SearchHeader;
