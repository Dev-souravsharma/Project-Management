import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Header from '../../Components/header';
import {goBack} from '../../Services/NavigationServices';
import Styles from './Style';
function TaskDescription(props) {
  console.log(props);
  let data = props.route.params.data;
  return (
    <SafeAreaView>
      <Header title={'Task Details'} onPress={() => goBack()} />
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
      </View>
    </SafeAreaView>
  );
}
export default TaskDescription;
