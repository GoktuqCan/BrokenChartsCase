import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import ChatScreen, { ChatActivity } from 'screens/ChatScreen/ChatScreen';

export type AppStackParamList = {
  BottomTabs: undefined;
  Chat: { activity: ChatActivity };
};

const screenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
