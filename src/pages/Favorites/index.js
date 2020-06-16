import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import database from '../../services/firebase';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Home');
  }

  const fetchFavorites = useCallback(async (valueToSearch) => {
    let data = [];
    let query;

    if (valueToSearch) {
      query = database()
        .collection('movies')
        .where('like', '==', true)
        .orderBy('title')
        .startAt(valueToSearch)
        .endAt(valueToSearch + '\uf8ff');
    } else {
      query = database().collection('movies').where('like', '==', true);
    }

    await query.get().then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        data.push({id: doc.id, ...doc.data()});
      });
    });

    setFavorites(data);
  }, []);

  const handleOpenDetail = (data) => {
    navigation.navigate('Detail', {data});
  };

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Header />

        <View style={styles.section}>
          <Title text="Meus Favoritos" />
          <SearchInput
            placeholder="Buscar..."
            autoCorrect={false}
            autoCapitalize={false}
            value={search}
            onChangeText={(value) => setSearch(value)}
            onClear={() => setSearch('')}
            onPressToSearch={() => fetchFavorites(search)}
          />
        </View>

        <FlatList
          style={styles.list}
          numColumns={3}
          columnWrapperStyle={styles.movies}
          data={favorites}
          keyExtractor={(item) => String(item.id)}
          renderItem={(item) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => handleOpenDetail(item.item)}>
              <Image
                source={{uri: item.item.url_thumbnail_image}}
                style={styles.image}
              />
            </TouchableOpacity>
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
  list: {
    flex: 1,
  },
});

export default Favorites;
