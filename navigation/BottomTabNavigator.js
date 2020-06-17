import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import TodayScreen from '../screens/TodayScreen';
import ThreeDayScreen from '../screens/ThreeDayScreen';
import AllScreen from '../screens/AllScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Today';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: "What's for Dinner?"});

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          title: 'Today',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="today" library="MaterialIcons"/>,
        }}
      />
      <BottomTab.Screen
        name="ThreeDay"
        component={ThreeDayScreen}
        options={{
          title: '3 Day',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="calendar-range" library="MaterialCommunityIcons"/>,
        }}
      />
      <BottomTab.Screen
        name="All"
        component={AllScreen}
        options={{
          title: 'All',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="calendar-multiple" library="MaterialCommunityIcons"/>,
        }}
      />
    </BottomTab.Navigator>
  );
}
