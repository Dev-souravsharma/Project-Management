import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../Themes/Colors/Color';
function CustomButton(props) {
  return (
    <View style={Styles.buttonContainer}>
      <Pressable
        {...props}
        android_ripple={{borderless: false, color: Colors.darkGrey}}
        style={{...Styles.container, ...props.style}}>
        <Text style={{...Styles.text, ...props.titleStyle}}>{props.title}</Text>
      </Pressable>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 10,
    elevation: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 16,
  },
  buttonContainer: {
    borderRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
});
export default CustomButton;
