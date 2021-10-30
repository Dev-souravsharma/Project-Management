import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Alert,
  FlatList,
} from 'react-native';
import Header from '../../Components/header';
import NavigationRoutes from '../../Constants/NavigationRoutes';
import Strings from '../../Constants/strings';
import {goBack, navigate} from '../../Services/NavigationServices';
import Colors from '../../Themes/Colors/Color';
import Styles from './Style';
function DashboardScreen() {
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
          <Text style={Styles.cardTitle}>Ongoing Projects</Text>
        </View>
        <View
          style={{
            ...Styles.cardStyle,
            ...{backgroundColor: Colors.COLOR_THEME},
          }}>
          <Text style={Styles.cardTitle}>Completed Projects</Text>
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
            My Projects
          </Text>
        </View>
        <FlatList
          data={Strings.data}
          renderItem={({item, index}) => {
            return (
              <View style={Styles.card}>
                <Text style={{color: Colors.black}}>{item.Project}</Text>
              </View>
            );
          }}
          keyExtractor={data => data.id}
        />
        <Pressable
          onPress={() => navigate(NavigationRoutes.Project)}
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
      </View>
    </SafeAreaView>
  );
}
export default DashboardScreen;
