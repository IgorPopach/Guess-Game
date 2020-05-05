import React from 'react';
import { Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';

const TitleText = ({ style, children }) => <Text style={{...styles.title, ...style}} >{children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  }
});

export default TitleText;