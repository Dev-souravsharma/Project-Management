import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import Header from '../../Components/header';
import {goBack, navigate} from '../../Services/NavigationServices';
import Colors from '../../Themes/Colors/Color';
import firestore from '@react-native-firebase/firestore';
import Styles from './style';
import NavigationRoutes from '../../Constants/NavigationRoutes';
function TaskScreen(props) {
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
  console.log(props.route.params.data);
  return (
    <SafeAreaView>
      <Header title="Assign Task" onPress={() => goBack()} />
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
                navigate(NavigationRoutes.Description, {
                  data: props.route.params.data,
                  email: item.email,
                })
              }
              style={Styles.card}>
              <Text style={{color: Colors.black}}>{item.email}</Text>
            </Pressable>
          );
        }}
        keyExtractor={data => data.taskId}
      />
    </SafeAreaView>
  );
}
export default TaskScreen;
