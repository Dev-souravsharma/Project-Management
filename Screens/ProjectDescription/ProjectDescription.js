import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../Components/header';
import {goBack} from '../../Services/NavigationServices';
import Styles from './Style';
function ProjectDescriptionScreen(props) {
  let data = props.route.params.data;
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
            <Text style={Styles.title}>Task Description :</Text>
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.subtitle}>{data.taskDescription}</Text>
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
    </SafeAreaView>
  );
}
export default ProjectDescriptionScreen;
