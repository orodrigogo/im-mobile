import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import Button from '../../components/Button';
import MoviesSection from '../../components/MoviesSection';

const movies = [1, 2, 3, 4, 5];

const Home = () => {
  const navigation = useNavigation();

  function handleFavorites() {
    navigation.navigate('Favorites');
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <MoviesSection title="Recomendados para você" movies={movies} />
          <MoviesSection title="Populares" movies={movies} />
          <MoviesSection title="Assistir Novamente" movies={movies} />
        </View>

        <Button onPress={handleFavorites} title="Meus Favoritos" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    marginTop: 30,
  },
});

export default Home;
