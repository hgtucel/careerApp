import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {listAds} from '../redux/actions/adActions';
import * as RootNavigation from '../RootNavigation';

const LastAd = () => {
  const adList = useSelector((state) => state.adListReducer);
  const {ads, loading, error} = adList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAds());
  }, []);
  return (
    <View style={styles.ad}>
      <Text style={{color: '#fff', marginBottom: 5}}>
        En Son Eklenen İş İlanları
      </Text>
      {loading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={ads}
            horizontal={true}
            renderItem={({item, index}) => (
              <View style={styles.item} key={item.id}>
                <TouchableOpacity
                  onPress={() => RootNavigation.navigate('AdDetail',{id: item.id, title: item.title})}>
                  <Text style={{color: '#037ef3'}}>{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{color: '#52565e'}}>{item.city}</Text>
                </TouchableOpacity>
                <Image
                  style={styles.logo}
                  source={{
                    uri:
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/150px-Apple_logo_black.svg.png',
                  }}
                />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  ad: {
    padding: 10,
    height: 300,
  },
  container: {
    height: 160,
    borderWidth: 1,
    borderColor: '#e8e7e7',
    backgroundColor: '#f3f4f7',
    flexDirection: 'row',
    padding: 10,
  },
  item: {
    borderRightWidth: 1,
    borderColor: '#e8e7e7',
    paddingStart: 15,
    paddingEnd: 30,
    height: 130,
    alignItems: 'center',
  },
  logo: {
    width: 75,
    height: 90,
    marginTop: 10,
  },
});

export default LastAd;
