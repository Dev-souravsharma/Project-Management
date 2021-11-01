import {Formik} from 'formik';
import React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from 'react-native';
import CustomButton from '../../Components/Button';
import CustomInput from '../../Components/customInput';
import Header from '../../Components/header';
import NavigationRoutes from '../../Constants/NavigationRoutes';
import {goBack} from '../../Services/NavigationServices';
import schema from '../../Services/validationServices';
import Colors from '../../Themes/Colors/Color';
import Styles from './Style';
function ProjectDescriptionScreen(props) {
  const [isOpen, setOpen] = React.useState(false);
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
                taskName: '',
                taskDescription: '',
                startDate: '',
                endDate: '',
              }}
              validationSchema={schema.task}
              onSubmit={values => {
                console.log('User added!', values);
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
      <Header title={'Project Description'} onPress={() => goBack()} />
      <View style={Styles.card}>
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
      </View>
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
