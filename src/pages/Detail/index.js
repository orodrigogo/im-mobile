import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import Title from '../../components/Title';
import Subject from '../../components/Subject';

const Detail = () => {
  const [watched, setWatched] = useState(true);
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Home');
  }

  function handleWatch() {
    setWatched(!watched);
  }

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <SafeAreaView style={styles.main}>
      <Image
        style={styles.cover}
        source={{
          uri:
            'https://culturadoria.com.br/wp-content/uploads/2019/04/Culture_AvengersEndgameTrailer-1.jpg',
        }}
      />

      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Avengers endgame</Text>
            <Text style={styles.recommendations}>95% gostaram desse filme</Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.mark}
              activeOpacity={0.5}
              onPress={handleLike}>
              <Icon
                name="heart"
                style={liked ? styles.actived : styles.disabled}
              />
              <Text style={styles.markTextLeft}>
                Marcar na minha lista de favoritos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mark}
              activeOpacity={0.5}
              onPress={handleWatch}>
              <Text style={styles.markTextRight}>Marcar como já assistido</Text>
              <Icon
                name="eye"
                style={watched ? styles.actived : styles.disabled}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.about}>
            <Title text="Sobre" />
            <Text style={styles.aboutText}>
              Após Thanos eliminar metade das criaturas vivas, os Vingadores têm
              de lidar com a perda de amigos e entes queridos. Com Tony Stark
              vagando perdido no espaço sem água e comida, Steve Rogers e
              Natasha Romanov lideram a resistência contra o titã louco.
            </Text>
          </View>

          <View style={styles.subject}>
            <Title text="Assuntos" />
            <View style={styles.subjects}>
              <Subject title="ficção" />
              <Subject title="ação" />
              <Subject title="aventura" />
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
    fontWeight: 'bold',
    color: '#FFF',
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
    color: '#FFF',
    width: 110,
    marginLeft: 7,
  },
  markTextRight: {
    color: '#FFF',
    width: 110,
    textAlign: 'right',
    marginRight: 7,
  },
});

export default Detail;
