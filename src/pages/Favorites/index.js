import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';

const movies = [1, 2, 3, 4, 5];

const Favorites = () => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Header />

        <View>
          <Text style={styles.title}>Meus Favoritos</Text>
          <TextInput />
        </View>

        <View>
          <FlatList
            columnWrapperStyle={styles.movies}
            data={movies}
            numColumns={3}
            renderItem={(movies) => (
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

        <RectButton style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttonText}>Voltar</Text>
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
  header: {
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  section: {},
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  movies: {
    justifyContent: 'space-between',
  },
  image: {
    height: 150,
    width: 100,
    marginVertical: 5,
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

export default Favorites;
