import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors/Color';
const Styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inputContainer: {
    width: '95%',
    marginVertical: 12,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  buttonTile: {
    color: Colors.white,
  },
  loginButton: {
    backgroundColor: Colors.COLOR_THEME_SECONDARY,
  },
});
export default Styles;
