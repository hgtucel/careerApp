/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TabNavigator} from './TabNavigator';

export const App = () => {
  return (
    <SafeAreaProvider>
      <TabNavigator />
    </SafeAreaProvider>
  );
};
