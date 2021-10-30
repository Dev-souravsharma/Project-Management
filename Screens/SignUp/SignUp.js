import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CustomButton from '../../Components/Button';
import CustomInput from '../../Components/customInput';
import Header from '../../Components/header';
import Strings from '../../Constants/strings';
import {goBack} from '../../Services/NavigationServices';
import Styles from './Style';
function SignUpScreen() {
  return (
    <SafeAreaView style={Styles.container}>
      <Header title="SignUp" onPress={() => goBack()} />
      <View style={Styles.itemContainer}>
        <View style={Styles.welcomeContainer}>
          <Text style={Styles.welcomeStyle}>{'Sign Up'}</Text>
        </View>
        <View style={Styles.welcomeSubtitleContainer}>
          <Text style={Styles.welcomeSubtitleStyle}>
            {'Create an Account & Manage your Task'}
          </Text>
        </View>
      </View>
      <View style={Styles.inputCont}>
        <View style={Styles.inputContainer}>
          <CustomInput placeholder="Enter Email" />
        </View>
        <View style={Styles.inputContainer}>
          <CustomInput placeholder="Enter Password" />
        </View>
        <View style={Styles.inputContainer}>
          <CustomInput placeholder="Confirm Password" />
        </View>
        <View style={Styles.buttonContainer}>
          <CustomButton
            title={'Sign Up'}
            titleStyle={Styles.buttonTile}
            style={Styles.loginButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default SignUpScreen;
