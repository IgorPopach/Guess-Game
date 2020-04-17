import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import Card from './../components/Card';
import Input from './../components/Input';
import NumberContainer from './../components/NumberContainer';
import colors from './../constants/colors';

const StartGameScreen = ({ onStartGame }) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    };
    setSelectedNumber(chosenNumber);
    setConfirmed(true);
  }

  const changeInputHandler = () => {
    setConfirmed(false);
    setSelectedNumber(null);
  }

  const startGameHandler = () => onStartGame(selectedNumber);

  let selectedNumberOutput;
  if (!selectedNumber) {
    selectedNumberOutput = (
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={colors.secondary} onPress={resetInputHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={colors.primary} onPress={confirmInputHandler} />
          </View>
        </View>
      </Card>
    );
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card>
        <View style={styles.confirmedContainer}>
          <Text style={styles.title}>You selected</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>
        </View>
        <View style={styles.confirmedOutputButton}>
          <Button title="Change Number" color={colors.secondary} onPress={changeInputHandler} />
        </View>
        <View style={styles.confirmedOutputButton}>
          <Button title="Lets Play!" color={colors.primary} onPress={startGameHandler} />
        </View>
      </Card>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        {selectedNumberOutput}
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  titleNumber: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center'
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100,
  },
  confirmedContainer: {
    alignItems: 'center'
  },
  confirmedOutputButton: {
    margin: 10,
  }
});

export default StartGameScreen;