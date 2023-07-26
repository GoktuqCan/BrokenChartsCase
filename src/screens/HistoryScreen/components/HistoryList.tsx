import React, { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'state/types';
import HistoryItem from 'components/HistoryItem';
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
import { SearchItemType } from 'screens/SearchScreen/components/SearchItem';
import { getActivityDescription } from 'utils/StringUtils';
import { useNavigation } from '@react-navigation/native';
import { colors } from 'styles/colors';

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

const ListSeparator = () => <View style={styles.separator} />;

const keyExtractor = (item: SearchItemType) => item.key;

const HistoryList = () => {
  const navigation = useNavigation();
  const { searchTerm, data } = useSelector(({ history }: RootState) => ({
    searchTerm: history.searchTerm,
    data: history.data,
  }));

  const onItemSelect = useCallback(
    (item: Activity) => {
      navigation.navigate('Chat', {
        activity: item,
      });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: { item: SearchItemType }) => {
      return (
        <HistoryItem
          title={item.activity}
          description={getActivityDescription(item)}
          leftIcon={<item.icon />}
          onPress={() => onItemSelect(item)}
          style={styles.historyItem}
        />
      );
    },
    [onItemSelect],
  );

  const filteredData = useMemo(() => {
    return data.reduce(
      (prevArr: SearchItemType[], item: Activity, index: number) => {
        if (
          item.activity.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return [...prevArr, { ...item, icon: Icons[index % Icons.length] }];
        }
        return prevArr;
      },
      [],
    );
  }, [data, searchTerm]);

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      ItemSeparatorComponent={ListSeparator}
      keyExtractor={keyExtractor}
      keyboardDismissMode="on-drag"
      renderItem={renderItem}
      data={filteredData}
      style={styles.list}
    />
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  separator: {
    height: 16,
  },
  historyItem: {
    backgroundColor: colors.bgSecondary,
  },
});
