import React, { useEffect, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from 'navigation/AppStack';
import ChatHeader from './components/ChatHeader';
import { getCompletion } from 'state/chat/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/types';
import ChatList from './components/ChatList';
import { colors } from 'styles/colors';

type Props = NativeStackScreenProps<AppStackParamList, 'Chat'>;

const ChatScreen: React.FC<Props> = ({ route }) => {
  const { activity } = route.params;
  const dispatch = useDispatch();
  const { loading, data } = useSelector(({ chat }: RootState) => ({
    loading: chat.loading,
    data: chat.data,
  }));

  useEffect(() => {
    dispatch(getCompletion(activity));
  }, [activity, dispatch]);

  const listData = useMemo(() => {
    const mergedData: string[] = [activity];
    if (loading) {
      mergedData.push('Thinking...');
    } else if (data) {
      mergedData.push(data);
    }
    return mergedData;
  }, [activity, data, loading]);

  return (
    <View style={styles.wrapper}>
      <ChatHeader />
      <ChatList data={listData} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
});

export default ChatScreen;
