import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import Title from '../../components/Title';

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

        <RectButton style={styles.button} onPress={handleFavorites}>
          <Text style={styles.buttonText}>Meus Favoritos</Text>
        </RectButton>
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
  button: {
    backgroundColor: '#E21221',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default Home;
