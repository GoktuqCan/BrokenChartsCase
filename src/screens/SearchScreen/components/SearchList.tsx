import React, { useCallback, useMemo } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { colors } from 'styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { Activity } from 'state/home/types';
import Plate from 'assets/icons/search/Plate';
import Message from 'assets/icons/search/Message';
import Checklist from 'assets/icons/search/Checklist';
import Meditation from 'assets/icons/search/Meditation';
import Balloons from 'assets/icons/search/Balloons';
import Tool from 'assets/icons/search/Tool';
import Music from 'assets/icons/search/Music';
import Book from 'assets/icons/search/Book';
import Heart from 'assets/icons/search/Heart';
import SearchItem, { SearchItemType } from './SearchItem';
import { useNavigation } from '@react-navigation/native';
import { addToHistory } from 'state/history/actions';

const Icons = [
  Plate,
  Message,
  Checklist,
  Meditation,
  Balloons,
  Tool,
  Music,
  Book,
  Heart,
];

const keyExtractor = (item: SearchItemType) => item.key;

const ListSeparator = () => <View style={styles.separator} />;

const SearchList = () => {
  const { searchTerm, data } = useSelector(({ search }) => ({
    searchTerm: search.searchTerm,
    data: search.data,
  }));
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const filteredData = useMemo(() => {
    return data.reduce((prevArr: Activity[], item: Activity, index: number) => {
      if (
        item.activity.toLocaleLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return [...prevArr, { ...item, icon: Icons[index % Icons.length] }];
      }
      return prevArr;
    }, []);
  }, [data, searchTerm]);

  const onItemSelect = useCallback(
    (item: Activity) => {
      navigation.navigate('Chat', {
        activity: item,
      });
    },
    [dispatch, navigation],
  );

  const renderItem = useCallback(
    ({ item }: { item: SearchItemType }) => {
      return <SearchItem item={item} onSelect={onItemSelect} />;
    },
    [onItemSelect],
  );

  return (
    <FlatList
      ItemSeparatorComponent={ListSeparator}
      keyExtractor={keyExtractor}
      keyboardDismissMode="on-drag"
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainer}
      data={filteredData}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  contentContainer: {
    paddingTop: 19,
    paddingLeft: 16,
    paddingRight: 4,
  },
  separator: {
    height: 0.5,
    backgroundColor: colors.bgSeparator,
    marginVertical: 12,
    marginLeft: 48,
  },
});

export default SearchList;
