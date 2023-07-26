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
import { addToHistory } from 'state/history/actions';
import usePrevious from 'hooks/usePrevious';
import { Activity } from 'state/home/types';

type Props = NativeStackScreenProps<AppStackParamList, 'Chat'>;

export type ChatActivity = Activity & { reply?: string };

const ChatScreen: React.FC<Props> = ({ route }) => {
  const { activity } = route.params;
  const dispatch = useDispatch();
  const { loading, data } = useSelector(({ chat }: RootState) => ({
    loading: chat.loading,
    data: chat.data,
  }));
  const prevLoading = usePrevious(loading);
  const reply = useMemo(() => activity.reply || data, [activity.reply, data]);

  useEffect(() => {
    if (!activity.reply) {
      dispatch(getCompletion(activity.activity));
    }
  }, [activity, dispatch]);

  useEffect(() => {
    if (prevLoading && !loading) {
      dispatch(addToHistory(activity, data));
    }
  }, [activity, data, dispatch, loading, prevLoading]);

  const listData = useMemo(() => {
    const mergedData: string[] = [activity.activity];
    if (loading) {
      mergedData.push('Thinking...');
    } else if (reply) {
      mergedData.push(reply);
    }
    return mergedData;
  }, [activity.activity, loading, reply]);

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
