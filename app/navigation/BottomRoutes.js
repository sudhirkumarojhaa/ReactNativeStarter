/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Dashboard from '../screens/app/Dashboard';
import Profile from '../screens/app/Profile';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const ProfileScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const BottomRoutes = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        safeAreaInsets: 'top',
        activeTintColor: '#fff',
        inactiveTintColor: '#477b72',
        labelStyle: {fontSize: 14, fontWeight: 'bold'},
        style: {
          backgroundColor: '#000',
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={HomeScreens}
        options={({route}) => ({
          tabBarIcon: ({color}) => (
            <Icon name="tasks" size={24} color={color} />
          ),
        })}
        listeners={({navigation}) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Dashboard');
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreens}
        options={({route}) => ({
          tabBarIcon: ({color}) => (
            <Icon name="bookmark" size={24} color={color} />
          ),
        })}
        listeners={({navigation}) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Profile');
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomRoutes;
