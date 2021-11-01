import React from 'react';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import CustomButton from '../../Components/Button';
import CustomInput from '../../Components/customInput';
import Header from '../../Components/header';
import NavigationRoutes from '../../Constants/NavigationRoutes';
import Strings from '../../Constants/strings';
import {goBack, navigate} from '../../Services/NavigationServices';
import Styles from './Styles';
import {Formik} from 'formik';
import schema from '../../Services/validationServices';
import firestore from '@react-native-firebase/firestore';
function LoginScreen() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .onSnapshot(querySnapshot => {
        const users = [];

        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
      });

    return () => subscriber();
  }, []);
  console.log(users);
  function authUser(email, password) {
    let user = users.filter(item => {
      return item.email === email && item.password === password;
    });
    if (user.length === 0) {
      Alert.alert('User Not Found', 'Please Check email and password');
    } else {
      navigate(NavigationRoutes.DashBoard, {data: users});
    }
  }
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
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema.login}
        onSubmit={values => {
          console.log('User added!', values);
          authUser(values.email, values.password);
          firestore()
            .collection('Test')
            .doc('Project')
            .collection('Task')
            .doc('Demo')
            .set({task: 'This is task'})
            .then(() => {
              console.log('User added!');
            });
        }}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={Styles.inputCont}>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Enter Email"
                onChangeText={handleChange('email')}
                value={values.email}
                error={errors.email && touched.email}
              />
            </View>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Enter Password"
                onChangeText={handleChange('password')}
                value={values.password}
                error={errors.password && touched.password}
              />
            </View>
            <View style={Styles.buttonContainer}>
              <CustomButton
                onPress={handleSubmit}
                title={'Login'}
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
export default LoginScreen;
