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
function ProjectDescriptionScreen(props) {
  const [isOpen, setOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  let data = props.route.params.data;
  let email = props.route.params.email;
  React.useEffect(() => {
    const subscriber = firestore()
      .collection(email.toString())
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
  console.log(data, email, users);
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
                taskName: '',
                taskDescription: '',
                startDate: '',
                endDate: '',
              }}
              validationSchema={schema.task}
              onSubmit={values => {
                console.log('User added!', values);
                firestore()
                  .collection(email)
                  .doc(`${values.taskId}`)
                  .set(values)
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
                      placeholder="Task Name"
                      onChangeText={handleChange('taskName')}
                      error={errors.taskName && touched.taskName}
                    />
                  </View>
                  <View style={Styles.inputContainer}>
                    <CustomInput
                      placeholder="Task Description"
                      onChangeText={handleChange('taskDescription')}
                      error={errors.taskDescription && touched.taskDescription}
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
                      title={'Assign'}
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
      {/* <View style={Styles.card}>
        <View style={Styles.flex}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>Project ID :</Text>
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.subtitle}>{data.projectId}</Text>
          </View>
        </View>
        <View style={Styles.flex}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>Project Name :</Text>
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.subtitle}>{data.projectName}</Text>
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
            <Text style={Styles.title}>Amount :</Text>
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.subtitle}>{data.amount}</Text>
          </View>
        </View>
      </View> */}
      <FlatList
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
      />
      <Pressable
        onPress={() => setOpen(true)}
        style={{
          backgroundColor: Colors.COLOR_THEME_SECONDARY,
          width: 70,
          height: 70,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          position: 'absolute',
          bottom: 20,
          right: 30,
        }}>
        <Text style={{fontSize: 40, marginBottom: 4, color: Colors.white}}>
          +
        </Text>
      </Pressable>
      <HandleModal />
    </SafeAreaView>
  );
}
export default ProjectDescriptionScreen;
