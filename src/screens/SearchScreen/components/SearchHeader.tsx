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
      <HeaderTitle>Search</HeaderTitle>
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
});

export default SearchHeader;
