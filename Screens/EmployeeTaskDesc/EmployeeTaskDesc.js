import {Formik} from 'formik';
import React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import CustomButton from '../../Components/Button';
import CustomInput from '../../Components/customInput';
import Header from '../../Components/header';
import NavigationRoutes from '../../Constants/NavigationRoutes';
import {goBack, navigate} from '../../Services/NavigationServices';
import schema from '../../Services/validationServices';
import Colors from '../../Themes/Colors/Color';
import firestore from '@react-native-firebase/firestore';
import Styles from './Style';
function EmployeeTaskDescriptionScreen(props) {
  const [isOpen, setOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  let data = props.route.params.data;
  let email = props.route.params.email;
  console.log(data, email);
  function HandleModal() {
    return (
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <Pressable style={{flex: 1}} onPress={() => setOpen(false)}></Pressable>
        <View
          style={{
            backgroundColor: '#ffff',
            flex: 2,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            elevation: 10,
          }}>
          <ScrollView style={{flex: 1}}>
            <View
              style={{
                width: 70,
                height: 8,
                backgroundColor: '#eaeaea',
                alignSelf: 'center',
                marginTop: 8,
                borderRadius: 20,
              }}></View>
            <Formik
              initialValues={{
                taskId: '',
                startDate: '',
                endDate: '',
              }}
              validationSchema={schema.taskEmp}
              onSubmit={values => {
                let isComplete = true;
                let newData = {...values, isComplete};
                console.log('User added!', newData);
                firestore()
                  .collection(email)
                  .doc(`${values.taskId}`)
                  .update(newData)
                  .then(() => {
                    console.log('User added!');
                    goBack();
                  });
              }}>
              {({handleChange, handleSubmit, values, errors, touched}) => (
                <View style={Styles.inputCont}>
                  <View style={Styles.inputContainer}>
                    <CustomInput
                      placeholder="Task Id"
                      onChangeText={handleChange('taskId')}
                      error={errors.taskId && touched.taskId}
                    />
                  </View>

                  <View style={Styles.inputContainer}>
                    <CustomInput
                      placeholder="Start Date"
                      onChangeText={handleChange('startDate')}
                      error={errors.startDate && touched.startDate}
                    />
                  </View>
                  <View style={Styles.inputContainer}>
                    <CustomInput
                      placeholder="End Date"
                      onChangeText={handleChange('endDate')}
                      error={errors.endDate && touched.endDate}
                    />
                  </View>
                  <View style={Styles.buttonContainer}>
                    <CustomButton
                      title={'Done'}
                      onPress={handleSubmit}
                      titleStyle={Styles.buttonTile}
                      style={Styles.loginButton}
                    />
                  </View>
                  {/* {isLoading ? (
                    <ActivityIndicator size="large" animating />
                  ) : null} */}
                </View>
              )}
            </Formik>
          </ScrollView>
        </View>
      </Modal>
    );
  }
  return (
    <SafeAreaView style={Styles.contaniner}>
      <Header title={'Add Task'} onPress={() => goBack()} />
      <View style={Styles.card}>
        <View style={Styles.flex}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>Task ID :</Text>
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.subtitle}>{data.taskId}</Text>
          </View>
        </View>
        <View style={Styles.flex}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>Task Name :</Text>
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.subtitle}>{data.taskName}</Text>
          </View>
        </View>
        <View style={Styles.flex}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>Start Date :</Text>
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.subtitle}>{data.startDate}</Text>
          </View>
        </View>
        <View style={Styles.flex}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>End Date :</Text>
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.subtitle}>{data.endDate}</Text>
          </View>
        </View>
        <View style={Styles.flex}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>Task Description :</Text>
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.subtitle}>{data.taskDescription}</Text>
          </View>
        </View>
        <View style={Styles.flex}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>Is Complete :</Text>
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.subtitle}>{`${data.isComplete}`}</Text>
          </View>
        </View>
      </View>
      {/* <FlatList
        data={users}
        ListEmptyComponent={
          <View style={{flex: 1}}>
            <Image
              style={{
                width: 300,
                height: 300,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../Assessts/Images/office.png')}
            />
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() =>
                navigate(NavigationRoutes.TaskDescription, {
                  data: item,
                })
              }
              style={Styles.cardDash}>
              <Text style={{color: Colors.black}}>{item.taskName}</Text>
            </Pressable>
          );
        }}
        keyExtractor={data => data.taskId}
      /> */}
      <Pressable
        onPress={() => setOpen(true)}
        style={{
          backgroundColor: Colors.COLOR_THEME_SECONDARY,
          width: '50%',
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          padding: 16,
          marginTop: 16,
        }}>
        <Text style={{fontSize: 16, color: Colors.white}}>
          Mark as Complete
        </Text>
      </Pressable>
      <HandleModal />
    </SafeAreaView>
  );
}
export default EmployeeTaskDescriptionScreen;
