import React from 'react';
import {Platform, StyleSheet, TextInput, Text, View} from 'react-native';
import Colors from '../Themes/Colors/Color';

function CustomInput(props) {
  return (
    <View>
      <TextInput
        placeholderTextColor="#626262"
        {...props}
        style={Styles.inputStyle}
        placeholder={props.placeholder}
      />
      {props.error && (
        <View style={{marginLeft: 16, paddingTop: 8}}>
          <Text style={{color: 'red'}}>Please fill value</Text>
        </View>
      )}
    </View>
  );
}
const Styles = StyleSheet.create({
  inputStyle: {
    color: Colors.black,
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowColor: Colors.black,
    elevation: 7,
    padding: Platform.OS === 'ios' ? 16 : 12,
    borderRadius: 10,
  },
});
export default CustomInput;
