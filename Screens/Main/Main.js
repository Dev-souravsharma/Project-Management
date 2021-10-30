import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  ImageBackground,
  Button,
  Alert,
} from 'react-native';
import CustomButton from '../../Components/Button';
import NavigationRoutes from '../../Constants/NavigationRoutes';
import {navigate} from '../../Services/NavigationServices';
import Style from './Style';
function MainScreen(props) {
  console.log(props);
  return (
    <SafeAreaView style={Style.container}>
      <Image
        style={Style.image}
        source={require('../../Assessts/Images/office.png')}
      />
      <View style={Style.header}>
        <Text style={Style.titleStyle}>Project Management</Text>
        <Text style={Style.subTitleStyle}>
          The Smart Tool is designed to help you better manage your Task
        </Text>
      </View>
      <View style={Style.VStack}>
        <View style={Style.buttonContainer}>
          <CustomButton
            onPress={() => navigate(NavigationRoutes.Login)}
            title={'LOGIN'}
            titleStyle={Style.buttonTitle}
            style={Style.buttonStyleLogin}
          />
        </View>
        <View style={Style.buttonContainer}>
          <CustomButton
            title={'SIGN UP'}
            titleStyle={Style.buttonTitle}
            style={Style.buttonStyle}
            onPress={() => navigate(NavigationRoutes.SignUp)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default MainScreen;
