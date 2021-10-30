import React from 'react';
import {StyleSheet, Image, View, Text, Pressable} from 'react-native';
import Colors from '../Themes/Colors/Color';
function Header(props) {
  return (
    <View style={Styles.container}>
      <Pressable {...props} style={Styles.leftContainer}>
        <Image
          style={Styles.leftIcon}
          source={require('../Assessts/Icons/back.png')}
        />
      </Pressable>
      <View style={Styles.titleContainer}>
        <Text style={Styles.titleStyle}>{props.title}</Text>
      </View>
      <View style={Styles.rightContainer}></View>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftIcon: {
    width: 30,
    height: 30,
  },
  titleStyle: {
    color: Colors.grey,
    fontSize: 16,
    fontWeight: '700',
  },
});
export default Header;
