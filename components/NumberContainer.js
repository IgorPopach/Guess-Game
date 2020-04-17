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
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: colors.primary,
    fontSize: 24
  }
});

export default NumberContainer;