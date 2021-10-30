import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../Themes/Colors/Color';

function CustomInput(props) {
  return (
    <TextInput
      placeholderTextColor="#626262"
      {...props}
      style={Styles.inputStyle}
      placeholder={props.placeholder}
    />
  );
}
const Styles = StyleSheet.create({
  inputStyle: {
    color: Colors.black,
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowColor: Colors.black,
    elevation: 7,
    padding: 12,
    borderRadius: 10,
  },
});
export default CustomInput;
