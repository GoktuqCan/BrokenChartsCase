import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import SearchScreen from 'screens/SearchScreen/SearchScreen';
import HistoryScreen from 'screens/HistoryScreen/HistoryScreen';
import Search from 'assets/icons/Search';
import { colors } from 'styles/colors';
import Home from 'assets/icons/Home';
import History from 'assets/icons/History';
import HomeFilled from 'assets/icons/HomeFilled';
import HistoryFilled from 'assets/icons/HistoryFilled';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarLabel: () => null,
  tabBarActiveTintColor: colors.textPrimary,
  tabBarInactiveTintColor: colors.textSecondary,
};

const homeOptions = {
  tabBarIcon: ({ focused }: { focused: boolean }) =>
    focused ? <HomeFilled /> : <Home />,
};

const searchOptions = {
  tabBarIcon: ({ color }: { color: string }) => (
    <Search color={color} width={24} height={24} />
  ),
};

const historyOptions = {
  tabBarIcon: ({ focused }: { focused: boolean }) =>
    focused ? <HistoryFilled /> : <History />,
};

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen options={homeOptions} name="Home" component={HomeScreen} />
      <Tab.Screen
        options={searchOptions}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={historyOptions}
        name="History"
        component={HistoryScreen}
      />
    </Tab.Navigator>
  );
}
