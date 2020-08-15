import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './screens/Home';
import CategoryDetail from './screens/CategoryDetail';
import AdDetail from './screens/AdDetail';
import {createStackNavigator} from '@react-navigation/stack';
import {isMountedRef, navigationRef} from './RootNavigation';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="AdDetail"
        component={AdDetail}
        options={({route}) => {
          return {title: (route.params && route.params.title) || ''};
        }}
      />
      <HomeStack.Screen
        name="CategoryDetail"
        component={CategoryDetail}
        options={({route}) => {
          return {title: (route.params && route.params.title) || ''};
        }}
      />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
