import React, {useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import CustomButton from '../../Components/Button';
import CustomInput from '../../Components/customInput';
import Header from '../../Components/header';
import {goBack} from '../../Services/NavigationServices';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Styles from './Style';
import {Formik} from 'formik';
import firestore from '@react-native-firebase/firestore';

function CreateProjectScreen() {
  const [isLoading, setLoading] = useState(false);
  return (
    <SafeAreaView style={Styles.constainer}>
      <Header title="Create Project" onPress={() => goBack()} />
      <Formik
        initialValues={{
          projectId: '',
          taskId: '',
          taskName: '',
          taskDescription: '',
          startDate: '',
          endDate: '',
          employeeId: '',
          amount: '',
          projectName: '',
        }}
        onSubmit={values => {
          setLoading(true);
          firestore()
            .collection('ProjectData')
            .doc(values.taskName)
            .set(values)
            .then(() => {
              console.log('User added!');
              setLoading(false);
              goBack();
            });
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <ScrollView>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Project ID"
                onChangeText={handleChange('projectId')}
                value={values.projectId}
              />
            </View>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Project Name"
                onChangeText={handleChange('projectName')}
                value={values.projectName}
              />
            </View>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Task ID"
                onChangeText={handleChange('taskId')}
                value={values.taskId}
              />
            </View>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Task Name"
                onChangeText={handleChange('taskName')}
                value={values.taskName}
              />
            </View>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Task Description"
                onChangeText={handleChange('taskDescription')}
                value={values.taskDescription}
              />
            </View>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Start Date"
                onChangeText={handleChange('startDate')}
                value={values.startDate}
              />
            </View>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="End Date"
                onChangeText={handleChange('endDate')}
                value={values.endDate}
              />
            </View>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Employee ID"
                onChangeText={handleChange('employeeId')}
                value={values.employeeId}
              />
            </View>
            <View style={Styles.inputContainer}>
              <CustomInput
                placeholder="Enter the Amount"
                onChangeText={handleChange('amount')}
                value={values.amount}
              />
            </View>
            <View style={Styles.buttonContainer}>
              <CustomButton
                onPress={handleSubmit}
                title={'Create Task'}
                titleStyle={Styles.buttonTile}
                style={Styles.loginButton}
              />
            </View>
          </ScrollView>
        )}
      </Formik>
      {isLoading === true ? (
        <View style={Styles.indicator}>
          <ActivityIndicator size="large" animating />
        </View>
      ) : null}
    </SafeAreaView>
  );
}
export default CreateProjectScreen;
