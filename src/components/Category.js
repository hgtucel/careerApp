import React, {useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {listCategories} from '../redux/actions/categoryActions';
import * as RootNavigation from '../RootNavigation';

const Category = () => {
  const categoryList = useSelector((state) => state.categoryListReducer);
  const {categories, loading, error} = categoryList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCategories());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', color: '#0a8ea0', marginBottom: 10}}>
        Sektörlere Göre İlanlar
      </Text>
      {categories.map((item, index) => (
        <TouchableOpacity key={item.id} style={styles.button} onPress={()=>RootNavigation.navigate('CategoryDetail',{id: item.id, title: item.title})}>
          <Text style={{color: '#fff', textAlign: 'center'}}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#fd9f3e',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});

export default Category;
