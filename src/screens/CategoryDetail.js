import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import ListAd from '../components/ListAd';
import {useDispatch, useSelector} from 'react-redux';
import {categoryAds} from '../redux/actions/adActions';

const CategoryDetail = ({route}) => {
  const categoryAdList = useSelector((state) => state.categoryAdListReducer);
  const {ads, loading, error} = categoryAdList;
  const dispatch = useDispatch();

  const id = route.params?.id;
  useEffect(() => {
    dispatch(categoryAds(id));
  }, []);

  return (
    <>
      <View style={styles.header}>
        <Text style={{color: '#fff', margin: 20, fontSize: 18}}>
          {route.params?.title} İş İlanları | {ads.length}
        </Text>
      </View>
      <FlatList
        data={ads}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ListAd item={item} />}
      />
    </>
  );
};

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

export default CategoryDetail;
