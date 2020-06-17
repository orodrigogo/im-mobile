import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Title from '../Title';
import ProgressiveImage from '../ProgressiveImage';

const MoviesSection = ({title, load = true, movies}) => {
  const navigation = useNavigation();

  const handleOpenDetail = (data) => {
    navigation.navigate('Detail', {data});
  };

  return (
    <View style={styles.container}>
      <Title text={title} />
      {load ? (
        <ActivityIndicator style={styles.loader} />
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
              <ProgressiveImage
                source={{
                  uri: movie.item.url_cover_image,
                }}
              />
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
});

export default MoviesSection;
