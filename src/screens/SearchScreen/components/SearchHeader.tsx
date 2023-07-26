import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from 'styles/colors';
import HeaderSearchInput from 'components/HeaderSearchInput';
import HeaderTitle from 'components/HeaderTitle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/types';
import { setSearchTerm } from 'state/search/actions';

const SearchHeader = () => {
  const { top } = useSafeAreaInsets();
  const { searchTerm } = useSelector(({ search }: RootState) => ({
    searchTerm: search.searchTerm,
  }));
  const dispatch = useDispatch();
  const onClear = useCallback(() => {
    dispatch(setSearchTerm(''));
  }, [dispatch]);
  const onChangeText = useCallback(
    (value: string) => {
      dispatch(setSearchTerm(value));
    },
    [dispatch],
  );

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <HeaderTitle style={styles.title}>Search</HeaderTitle>
      <HeaderSearchInput
        onClear={onClear}
        onChangeText={onChangeText}
        searchTerm={searchTerm}
        placeholder="Search activity"
      />
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
