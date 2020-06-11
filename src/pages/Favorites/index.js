import React from 'react';
import {View, SafeAreaView, StyleSheet, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Input from '../../components/Input';

const movies = [1, 2, 3, 4, 5];

const Favorites = () => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Header />

        <View style={styles.section}>
          <Title text="Meus Favoritos" />
          <Input placeholder="Buscar..." autoCorrect={false} />
        </View>

        <FlatList
          style={{flex: 1}}
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

        <Button title="Voltar" onPress={handleGoBack} />
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
  section: {
    marginVertical: 30,
  },
  movies: {
    justifyContent: 'space-between',
  },
  image: {
    height: 150,
    width: 100,
    marginVertical: 5,
  },
});

export default Favorites;
