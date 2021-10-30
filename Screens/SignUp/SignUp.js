import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../Components/header';
import {goBack} from '../../Services/NavigationServices';
import Styles from './Style';
function SignUpScreen() {
  return (
    <SafeAreaView style={Styles.container}>
      <Header title={'SignUp'} onPress={() => goBack()} />
    </SafeAreaView>
  );
}
export default SignUpScreen;
