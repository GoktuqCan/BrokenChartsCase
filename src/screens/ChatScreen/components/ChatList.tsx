import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ChatItem from './ChatItem';

type Props = {
  data: string[];
};

const keyExtractor = (item: string) => item;

const Separator = () => <View style={styles.separator} />;

const ChatList: React.FC<Props> = ({ data }) => {
  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => {
      return <ChatItem isRight={!(index % 2)} text={item} />;
    },
    [],
  );

  return (
    <FlatList
      ItemSeparatorComponent={Separator}
      keyExtractor={keyExtractor}
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingLeft: 6,
    paddingRight: 16,
  },
  separator: {
    height: 16,
  },
});
