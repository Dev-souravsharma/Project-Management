import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../Components/header';
import Strings from '../../Constants/strings';
import {goBack} from '../../Services/NavigationServices';
import Styles from './Styles';
function LoginScreen() {
  return (
    <SafeAreaView style={Styles.container}>
      <Header title="Login" onPress={() => goBack()} />
      <View style={Styles.welcomeContainer}>
        <Text style={Styles.welcomeStyle}>{Strings.welcome}</Text>
      </View>
      <View style={Styles.welcomeSubtitleContainer}>
        <Text style={Styles.welcomeSubtitleStyle}>
          {Strings.welcomeSubtitle}
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default LoginScreen;
