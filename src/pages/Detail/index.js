import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {useTheme} from '../../hooks/ThemeContext';

import database from '../../services/firebase';

import Button from '../../components/Button';
import Title from '../../components/Title';
import Subject from '../../components/Subject';
import ProgressiveImage from '../../components/ProgressiveImage';

const Detail = ({route}) => {
  const navigation = useNavigation();
  const {id} = route.params;

  const [load, setLoad] = useState(true);
  const [data, setData] = useState({});

  const [watched, setWatched] = useState();
  const [like, setLike] = useState();
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
      .doc(id)
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
      .doc(id)
      .update({
        watched: !watched,
      })
      .catch(console.log);

    setWatched(!watched);
    setLoadingWatchedUpdate(false);
  };

  const loadDetail = useCallback(async () => {
    await database()
      .collection('movies')
      .doc(id)
      .get()
      .then((snapshot) => {
        setData({...snapshot.data()});
        setWatched(snapshot.data().watched);
        setLike(snapshot.data().like);
      })
      .catch(console.log);

    setLoad(false);
  }, [id]);

  useEffect(() => {
    loadDetail();
  }, [loadDetail]);

  return (
    <SafeAreaView style={styles.main}>
      <ShimmerPlaceHolder
        colorShimmer={['#383333', '#242222', '#383333']}
        autoRun={true}
        visible={!load}
        style={styles.cover}>
        <View style={styles.cover}>
          <ProgressiveImage url={data.url_cover_image} />
        </View>
      </ShimmerPlaceHolder>

      <View style={styles.container}>
        <View style={styles.content}>
          <ShimmerPlaceHolder
            colorShimmer={['#332e2e', '#575757', '#332e2e']}
            autoRun={true}
            visible={!load}
            style={styles.shimmerEffectText}>
            <Text style={[styles.title, {color: theme.text}]}>
              {data.title}
            </Text>
            <Text style={[styles.recommendations, {color: theme.text}]}>
              {data.recommendation}% gostaram desse filme
            </Text>
          </ShimmerPlaceHolder>

          <ShimmerPlaceHolder
            colorShimmer={['#332e2e', '#575757', '#332e2e']}
            autoRun={true}
            visible={!load}
            style={styles.shimmerEffectText}>
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
          </ShimmerPlaceHolder>

          <View style={styles.about}>
            <Title text="Sobre" />
            <ShimmerPlaceHolder
              colorShimmer={['#332e2e', '#575757', '#332e2e']}
              autoRun={true}
              visible={!load}
              style={styles.shimmerEffectText}>
              <Text style={[styles.aboutText, {color: theme.text}]}>
                {data.description}
              </Text>
            </ShimmerPlaceHolder>
          </View>

          <View style={styles.subject}>
            <Title text="Assuntos" />
            <ShimmerPlaceHolder
              colorShimmer={['#332e2e', '#575757', '#332e2e']}
              autoRun={true}
              visible={!load}
              style={styles.shimmerEffectText}>
              <View style={styles.subjects}>
                {!load && data.subjects.map((item) => <Subject title={item} />)}
              </View>
            </ShimmerPlaceHolder>
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
  shimmerEffectText: {
    width: '100%',
    height: 50,
    marginVertical: 10,
    opacity: 0.7,
  },
});

export default Detail;
