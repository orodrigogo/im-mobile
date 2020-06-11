import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';

const movies = [1, 2, 3, 4, 5];

const Home = () => {
  const navigation = useNavigation();

  function handleFavorites() {
    navigation.navigate('Favorites');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Header />

        <View style={styles.section}>
          <Title text="Recomendados para você" />
          <ScrollView
            style={styles.movies}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}>
            {movies.map((movie) => (
              <Image
                style={styles.image}
                key={movie}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg',
                }}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Title text="Populares" />
          <ScrollView
            style={styles.movies}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}>
            {movies.map((movie) => (
              <Image
                style={styles.image}
                key={movie}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg',
                }}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Title text="Assistir novamente" />
          <ScrollView
            style={styles.movies}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}>
            {movies.map((movie) => (
              <Image
                style={styles.image}
                key={movie}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg',
                }}
              />
            ))}
          </ScrollView>
        </View>

        <Button onPress={handleFavorites} title="Meus Favoritos" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  section: {},
  movies: {
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 100,
    marginHorizontal: 5,
  },
});

export default Home;
