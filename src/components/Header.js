import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Search} from './Search';
import LastAd from './LastAd';

const Header = () => {
  return (
    <View style={styles.header}>
      <Search />
      <LastAd />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#b84592',
    height: 200,
    marginBottom: 100,
  },
});

export default Header;
