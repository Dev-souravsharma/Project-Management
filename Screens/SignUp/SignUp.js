import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import CustomButton from '../../Components/Button';
import CustomInput from '../../Components/customInput';
import Header from '../../Components/header';
import Strings from '../../Constants/strings';
import {goBack} from '../../Services/NavigationServices';
import Styles from './Style';
import firestore from '@react-native-firebase/firestore';
import {Formik} from 'formik';
import {RadioButton} from 'react-native-paper';
import Colors from '../../Themes/Colors/Color';
import schema from '../../Services/validationServices';
function SignUpScreen() {
  const [checked, setChecked] = React.useState('Manager');
  const [isLoading, setLoading] = React.useState(false);
  return (
    <SafeAreaView style={Styles.container}>
      <Header title="SignUp" onPress={() => goBack()} />
      <ScrollView>
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
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={schema.signup}
          onSubmit={values => {
            setLoading(true);
            console.log('User added!', values);
            let data = {...values, checked};
            console.log(data);
            firestore()
              .collection('Users')
              .add(data)
              .then(() => {
                console.log('User added!');
                setLoading(false);
                goBack();
              });
          }}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <View style={Styles.inputCont}>
              <View style={Styles.inputContainer}>
                <CustomInput
                  placeholder="Enter Full Name"
                  onChangeText={handleChange('name')}
                  error={errors.email && touched.email}
                />
              </View>
              <View style={Styles.inputContainer}>
                <CustomInput
                  placeholder="Enter Email"
                  onChangeText={handleChange('email')}
                  error={errors.email && touched.email}
                />
              </View>
              <View style={Styles.inputContainer}>
                <CustomInput
                  placeholder="Enter Password"
                  onChangeText={handleChange('password')}
                  error={errors.email && touched.email}
                />
              </View>
              <View style={Styles.inputContainer}>
                <CustomInput
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  error={errors.email && touched.email}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 16,
                  marginTop: 16,
                  justifyContent: 'center',
                }}>
                <RadioButton
                  value="Manager"
                  color={Colors.COLOR_THEME_SECONDARY}
                  status={checked === 'Manager' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Manager')}
                />
                <Text style={{color: 'black'}}>Manager</Text>
                <RadioButton
                  value="Employee"
                  color={Colors.COLOR_THEME_SECONDARY}
                  status={checked === 'Employee' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('Employee')}
                />
                <Text style={{color: 'black'}}>Employee</Text>
              </View>
              <View style={Styles.buttonContainer}>
                <CustomButton
                  title={'Sign Up'}
                  onPress={handleSubmit}
                  titleStyle={Styles.buttonTile}
                  style={Styles.loginButton}
                />
              </View>
              {isLoading ? <ActivityIndicator size="large" animating /> : null}
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SignUpScreen;
