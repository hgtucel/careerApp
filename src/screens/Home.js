import React from 'react';
import Header from '../components/Header';
import LastAd from '../components/LastAd';
import Category from '../components/Category';
import {ScrollView} from 'react-native';
export const Home = () => {
  return (
    <ScrollView>
      <Header />
      <Category />
    </ScrollView>
  );
};
