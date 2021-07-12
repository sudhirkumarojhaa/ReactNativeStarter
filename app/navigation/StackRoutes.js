/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Dashboard from '../screens/app/Dashboard';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

const AppScreen = () => {
  return (
    <AppStack.Navigator
      mode="card"
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Dashboard" component={Dashboard} />
    </AppStack.Navigator>
  );
};

const Routes = () => {
  const token = useSelector(state => state.appData.token);
  return (
    <RootStack.Navigator>
      {token ? (
        <RootStack.Screen name="App" component={AppScreen} />
      ) : (
        <RootStack.Screen name="Login" component={AuthScreen} />
      )}
    </RootStack.Navigator>
  );
};

export default Routes;
