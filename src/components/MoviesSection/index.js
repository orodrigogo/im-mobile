import React from 'react';
import {View, ScrollView, FlatList, Image, StyleSheet} from 'react-native';

import Title from '../Title';

const MoviesSection = ({title, movies}) => {
  return (
    <View style={styles.container}>
      <Title text={title} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.movies}
        data={movies}
        renderItem={(movie) => (
          <Image
            style={styles.image}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg',
            }}
          />
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
