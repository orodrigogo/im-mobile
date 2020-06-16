import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {useTheme} from '../../hooks/ThemeContext';

import database from '../../services/firebase';

import Button from '../../components/Button';
import Title from '../../components/Title';
import Subject from '../../components/Subject';

const Detail = ({route}) => {
  const navigation = useNavigation();
  const {data} = route.params;

  const [watched, setWatched] = useState(data.watched);
  const [like, setLike] = useState(data.like);
  const [loadingWatchedUpdate, setLoadingWatchedUpdate] = useState(false);
  const [loadingLikeUpdate, setLoadingLikedUpdate] = useState(false);

  const {theme} = useTheme();

  const handleGoBack = () => {
    navigation.navigate('Home');
  };

  const handleUpdateLike = async () => {
    if (loadingLikeUpdate) {
      return;
    }

    setLoadingLikedUpdate(true);
    await database()
      .collection('movies')
      .doc(data.id)
      .update({
        like: !like,
      })
      .catch(console.log);

    setLike(!like);
    setLoadingLikedUpdate(false);
  };

  const handleUpdateWatched = async () => {
    if (loadingWatchedUpdate) {
      return;
    }

    setLoadingWatchedUpdate(true);
    await database()
      .collection('movies')
      .doc(data.id)
      .update({
        watched: !watched,
      })
      .catch(console.log);

    setWatched(!watched);
    setLoadingWatchedUpdate(false);
  };

  return (
    <SafeAreaView style={styles.main}>
      <Image
        style={styles.cover}
        source={{
          uri: data.url_cover_image,
        }}
      />

      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={[styles.title, {color: theme.text}]}>
              {data.title}
            </Text>
            <Text style={[styles.recommendations, {color: theme.text}]}>
              {data.recommendation}% gostaram desse filme
            </Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity
              disabled={loadingLikeUpdate}
              style={styles.mark}
              activeOpacity={0.5}
              onPress={handleUpdateLike}>
              {loadingLikeUpdate ? (
                <ActivityIndicator color="#C3C3C3" size="small" />
              ) : (
                <Icon
                  name="heart"
                  style={like ? styles.actived : styles.disabled}
                />
              )}
              <Text style={[styles.markTextLeft, {color: theme.text}]}>
                Marcar na minha lista de favoritos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={loadingWatchedUpdate}
              style={styles.mark}
              activeOpacity={0.5}
              onPress={handleUpdateWatched}>
              <Text style={[styles.markTextRight, {color: theme.text}]}>
                Marcar como já assistido
              </Text>
              {loadingWatchedUpdate ? (
                <ActivityIndicator color="#C3C3C3" size="small" />
              ) : (
                <Icon
                  name="eye"
                  style={watched ? styles.actived : styles.disabled}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.about}>
            <Title text="Sobre" />
            <Text style={[styles.aboutText, {color: theme.text}]}>
              {data.description}
            </Text>
          </View>

          <View style={styles.subject}>
            <Title text="Assuntos" />
            <View style={styles.subjects}>
              {data.subjects.map((item) => (
                <Subject title={item} />
              ))}
            </View>
          </View>
        </View>

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
    justifyContent: 'space-around',
    marginHorizontal: 15,
  },
  content: {
    flex: 1,
    marginTop: 30,
  },
  cover: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto-medium',
  },
  recommendations: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 5,
  },
  about: {
    marginVertical: 30,
  },
  aboutText: {
    color: '#FFF',
    textAlign: 'justify',
    marginTop: 7,
    fontFamily: 'Roboto-regular',
  },
  subject: {
    marginTop: 5,
    marginVertical: 30,
  },
  subjects: {
    flexDirection: 'row',
    marginTop: 5,
  },
  subjectCard: {
    backgroundColor: '#000',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  subjectCardText: {
    color: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 7,
    fontSize: 16,
    fontFamily: 'Roboto-regular',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  mark: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actived: {
    color: '#E21221',
    fontSize: 32,
  },
  disabled: {
    color: '#403D3D',
    fontSize: 32,
  },
  markTextLeft: {
    width: 110,
    marginLeft: 7,
    fontFamily: 'Roboto-regular',
  },
  markTextRight: {
    width: 110,
    textAlign: 'right',
    marginRight: 7,
    fontFamily: 'Roboto-regular',
  },
});

export default Detail;
