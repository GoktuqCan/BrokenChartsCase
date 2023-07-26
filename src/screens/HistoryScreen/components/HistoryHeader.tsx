import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from 'styles/colors';
import HeaderTitle from 'components/HeaderTitle';
import Trash from 'assets/icons/Trash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/types';
import { setHistorySearchTerm } from 'state/history/actions';
import HeaderSearchInput from 'components/HeaderSearchInput';
import HistoryClearModal from './HistoryClearModal';

const HistoryHeader = () => {
  const { top } = useSafeAreaInsets();
  const { searchTerm } = useSelector(({ history }: RootState) => ({
    searchTerm: history.searchTerm,
  }));
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const onSearchClear = useCallback(() => {
    dispatch(setHistorySearchTerm(''));
  }, [dispatch]);
  const onChangeText = useCallback(
    (value: string) => {
      dispatch(setHistorySearchTerm(value));
    },
    [dispatch],
  );
  const onClearPress = useCallback(() => {
    setModalOpen(true);
  }, []);
  const onModalClosePress = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <>
      <View style={[styles.container, { paddingTop: top }]}>
        <View style={styles.titleContainer}>
          <HeaderTitle>History</HeaderTitle>
          <Pressable onPress={onClearPress}>
            <Trash />
          </Pressable>
        </View>
        <HeaderSearchInput
          onClear={onSearchClear}
          onChangeText={onChangeText}
          searchTerm={searchTerm}
          placeholder="Search chat"
        />
      </View>
      <HistoryClearModal isVisible={modalOpen} onClose={onModalClosePress} />
    </>
  );
};

export default HistoryHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgSecondary,
    borderWidth: 1,
    borderColor: colors.bgSeparator,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
});
