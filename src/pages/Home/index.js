import React, {useCallback, useEffect, useState, useMemo} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import database from '../../services/firebase';

import Header from '../../components/Header';
import Button from '../../components/Button';
import MoviesSection from '../../components/MoviesSection';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(true);
  const navigation = useNavigation();

  const handleFavorites = () => {
    navigation.navigate('Favorites');
  };

  const fetchMovies = useCallback(async () => {
    let data = [];

    await database()
      .collection('movies')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          data.push({id: doc.id, ...doc.data()});
        });
      });

    setMovies(data);
    setLoad(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const recommended = useMemo(() => {
    return movies.filter((item) => item.recommendation > 70);
  }, [movies]);

  const popular = useMemo(() => {
    return movies.filter((item) => item.recommendation > 92);
  }, [movies]);

  const watchAgain = useMemo(() => {
    return movies.filter((item) => item.watched === true);
  }, [movies]);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <MoviesSection
            title="Recomendados para você"
            movies={recommended}
            load={load}
          />
          <MoviesSection title="Populares" movies={popular} load={load} />
          <MoviesSection
            title="Assistir Novamente"
            movies={watchAgain}
            load={load}
          />
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
