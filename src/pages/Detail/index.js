import React from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import Title from '../../components/Title';
import Subject from '../../components/Subject';

const Detail = () => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Home');
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
            <View>
              <Text>Marcar na minha lista de favoritos</Text>
            </View>
            <View>
              <Text>Marcar como já assistido</Text>
            </View>
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
});

export default Detail;
