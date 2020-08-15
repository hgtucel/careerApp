import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListAd = ({item}) => (
  <TouchableOpacity style={styles.ad} key={item.id}>
    <View>
      <Text>{item.title}</Text>
      <Text>{item.brand}</Text>
      <Text>{item.city}</Text>
    </View>
    <View>
      <Text>15.08.2020</Text>
      <Image
        style={{width: 50, height: 50, resizeMode: 'stretch', marginLeft: 15}}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/150px-Apple_logo_black.svg.png',
        }}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#b84592',
    height: 75,
    marginBottom: 20,
  },
  ad: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default ListAd;
