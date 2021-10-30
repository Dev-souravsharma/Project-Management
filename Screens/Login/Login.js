import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CustomButton from '../../Components/Button';
import CustomInput from '../../Components/customInput';
import Header from '../../Components/header';
import Strings from '../../Constants/strings';
import {goBack} from '../../Services/NavigationServices';
import Styles from './Styles';
function LoginScreen() {
  return (
    <SafeAreaView style={Styles.container}>
      <Header title="Login" onPress={() => goBack()} />
      <View style={Styles.itemContainer}>
        <View style={Styles.welcomeContainer}>
          <Text style={Styles.welcomeStyle}>{Strings.welcome}</Text>
        </View>
        <View style={Styles.welcomeSubtitleContainer}>
          <Text style={Styles.welcomeSubtitleStyle}>
            {Strings.welcomeSubtitle}
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
        <View style={Styles.buttonContainer}>
          <CustomButton
            title={'Login'}
            titleStyle={Styles.buttonTile}
            style={Styles.loginButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default LoginScreen;
