import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Title from '../Title';

const MoviesSection = ({title, movies}) => {
  const navigation = useNavigation();

  const handleOpenDetail = (data) => {
    navigation.navigate('Detail', {data});
  };

  return (
    <View style={styles.container}>
      <Title text={title} />

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.movies}
        data={movies}
        renderItem={(movie) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => handleOpenDetail(movie.item)}>
            <Image
              style={styles.image}
              source={{
                uri: movie.item.url_cover_image,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 150,
    width: 100,
    marginHorizontal: 5,
  },
  movies: {
    flex: 1,
    marginTop: 5,
  },
});

export default MoviesSection;
