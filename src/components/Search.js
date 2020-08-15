import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const Search = () => {
  return (
    <View style={{padding: 10}}>
      <Text style={{marginBottom: 20, color: '#fff'}}>
        Aradığın ilanlar burada.
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput placeholder="Pozisyon ara" style={styles.searchInput} />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={{color: '#fff'}}>ARA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 5,
    paddingLeft: 10,
  },
  searchButton: {
    width: 75,
    backgroundColor: '#3f3d3d',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
