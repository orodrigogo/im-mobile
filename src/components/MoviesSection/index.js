import React, {useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Title from '../Title';
import ProgressiveImage from '../ProgressiveImage';

const MoviesSection = ({title, load, movies}) => {
  const navigation = useNavigation();

  const handleOpenDetail = (data) => {
    navigation.navigate('Detail', {data});
  };

  return (
    <View style={styles.container}>
      <Title text={title} />
      {load ? (
        <ActivityIndicator size="small" style={styles.loader} />
      ) : (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.movies}
          data={movies}
          renderItem={(movie) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => handleOpenDetail(movie.item)}>
              <View style={styles.image}>
                <ProgressiveImage url={movie.item.url_thumbnail_image} />
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movies: {
    flex: 1,
    marginTop: 5,
  },
  loader: {
    marginTop: 30,
  },
  image: {
    height: 150,
    width: 100,
    marginHorizontal: 5,
  },
});

export default MoviesSection;
