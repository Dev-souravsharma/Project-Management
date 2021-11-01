import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../Services/NavigationServices';
import NavigationRoutes from '../Constants/NavigationRoutes';
import MainScreen from '../Screens/Main/Main';
import LoginScreen from '../Screens/Login/Login';
import SignUpScreen from '../Screens/SignUp/SignUp';
import DashboardScreen from '../Screens/Dashboard/Dashboard';
import CreateProjectScreen from '../Screens/CreateProject/createProject';
import ProjectDescriptionScreen from '../Screens/ProjectDescription/ProjectDescription';
import TaskScreen from '../Screens/TaskList/task';
const Stack = createNativeStackNavigator();
function MainNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={NavigationRoutes.Main}>
        <Stack.Screen
          name={NavigationRoutes.Main}
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.Login}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.SignUp}
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.DashBoard}
          component={DashboardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.Project}
          component={CreateProjectScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.Description}
          component={ProjectDescriptionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.Task}
          component={TaskScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
