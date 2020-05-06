import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from './../constants/colors';

const NumberContainer = ({ children }) => 
  (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    borderColor: colors.secondary,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: colors.secondary,
    fontSize: 24
  }
});

export default NumberContainer;