import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Dimensions, ScrollView } from 'react-native';

import BodyText from './../components/BodyText';
import TitleText from './../components/TitleText';
import MainButton from './../components/MainButton';

import colors from './../constants/colors';

const GameOverScreen = ({ userNumber, guessRounds, onRestart }) => {

  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get('window').height);
      setAvailableDeviceWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    }
  });

  return (
      <ScrollView>
        <View style={styles.screen}>
          <TitleText>The Game is Over</TitleText>
          <View style={{
            ...styles.imageContainer, ...{
              width: availableDeviceWidth * 0.7,
              height: availableDeviceWidth * 0.7,
              borderRadius: availableDeviceWidth * 0.7 / 2,
              marginVertical: availableDeviceHeight / 30
            }
          }}>
            <Image
              fadeDuration={300}
              source={require('../assets/success.png')}
              // source={{
              //   uri: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg'
              // }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={{ ...styles.resultContainer, marginVertical: availableDeviceHeight / 60 }}>
            <BodyText style={{ ...styles.resultText, fontSize: availableDeviceHeight < 400 ? 16 : 20 }}>
              Your phone needed <Text style={styles.highlight}>{guessRounds} </Text>
        rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </BodyText>
          </View>
          <MainButton onPress={onRestart}>
            New Game
      </MainButton>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30
  },
  resultText: {
    textAlign: 'center'
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;