import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Alert,
  FlatList,
  Image,
} from 'react-native';
import Header from '../../Components/header';
import NavigationRoutes from '../../Constants/NavigationRoutes';
import Strings from '../../Constants/strings';
import {goBack, navigate} from '../../Services/NavigationServices';
import Colors from '../../Themes/Colors/Color';

import firestore from '@react-native-firebase/firestore';
import Styles from './Styles';
function EmployeeDashboardScreen(props) {
  let email = props.route.params.data;
  console.log('Email', email);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const subscriber = firestore()
      .collection(email)
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
  return (
    <SafeAreaView style={Styles.container}>
      <Header title="Dashboard" onPress={() => goBack()} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            ...Styles.cardStyle,
            ...{backgroundColor: Colors.COLOR_THEME_SECONDARY},
          }}>
          <Text style={Styles.cardTitle}>Total Tasks</Text>
          <Text style={Styles.cardTitle}>{users.length}</Text>
        </View>
        <View
          style={{
            ...Styles.cardStyle,
            ...{backgroundColor: Colors.COLOR_THEME},
          }}>
          <Text style={Styles.cardTitle}>Completed Tasks</Text>
          <Text style={Styles.cardTitle}>0</Text>
        </View>
      </View>
      <View style={{flex: 2}}>
        <View
          style={{
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: Colors.black,
              fontSize: 16,
              fontWeight: '700',
            }}>
            My Tasks
          </Text>
        </View>
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
              <Pressable onPress={() => {}} style={Styles.card}>
                <Text style={{color: Colors.black}}>{item.projectName}</Text>
              </Pressable>
            );
          }}
          keyExtractor={data => data.taskId}
        />
      </View>
    </SafeAreaView>
  );
}
export default EmployeeDashboardScreen;
