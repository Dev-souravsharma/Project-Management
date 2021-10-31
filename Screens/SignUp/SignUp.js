import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CustomButton from '../../Components/Button';
import CustomInput from '../../Components/customInput';
import Header from '../../Components/header';
import Strings from '../../Constants/strings';
import {goBack} from '../../Services/NavigationServices';
import Styles from './Style';
import firestore from '@react-native-firebase/firestore';
import {Formik} from 'formik';
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
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={values => {
          console.log('User added!', values);
          firestore()
            .collection('Users')
            .add(values)
            .then(() => {
              console.log('User added!');
              // setLoading(false);
              goBack();
            });
        }}>
        {({handleChange, handleSubmit, values}) => (
          <View style={Styles.inputCont}>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Enter Email"
                onChangeText={handleChange('email')}
              />
            </View>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Enter Password"
                onChangeText={handleChange('password')}
              />
            </View>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
              />
            </View>
            <View style={Styles.buttonContainer}>
              <CustomButton
                title={'Sign Up'}
                onPress={handleSubmit}
                titleStyle={Styles.buttonTile}
                style={Styles.loginButton}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
export default SignUpScreen;
