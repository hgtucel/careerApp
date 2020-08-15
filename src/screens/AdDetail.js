import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {detailsAds} from '../redux/actions/adActions';

const AdDetail = ({route}) => {
  const adDetails = useSelector((state) => state.adDetailsReducer);
  const {ad, loading, error} = adDetails;
  const dispatch = useDispatch();

  const id = route.params?.id;
  useEffect(() => {
    dispatch(detailsAds(id));
  }, []);
  return (
    <View>
      {loading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <View>
              <Text>{ad.title}</Text>
              <Text>-</Text>
              <Text>{ad.city}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: '#fff', fontSize: 15}}>BAŞVUR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quality}>
            <View style={styles.qualityHeader}>
              <Text
                style={{color: '#912da2', fontSize: 15, fontWeight: 'bold'}}>
                İş Tanımı
              </Text>
            </View>
            <View style={{padding: 15}}>
              <Text>{ad.description}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: '#912da2',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quality: {
    borderWidth: 2,
    borderColor: '#e7e7e7',
    backgroundColor: '#fff',
  },
  qualityHeader: {
    backgroundColor: '#f9f9f9',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AdDetail;
