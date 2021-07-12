/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform,StyleSheet,TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
// Navigation Imports
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerMenu from '../screens/app/common/DrawerMenu';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/app/Dashboard';
import Profile from '../screens/app/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5';

const deviceInfo = Platform.OS;

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const MixedRoutes = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}

const AuthScreens = () => (
  <AuthStack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
    />
  </AuthStack.Navigator>
);

const HomeScreens = () => (
  <AppStack.Navigator>
    <Stack.Screen
      name="Home"
      component={Dashboard}
    />
  </AppStack.Navigator>
);



const ProfileScreens = () => (
  <AppStack.Navigator>
    <Stack.Screen name="Profile" component={Profile} options={menuOptions} />
  </AppStack.Navigator>
);

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      adaptive
      allowFontScaling
      keyboardHidesTabBar='true'
      tabBarOptions={{
        labelStyle: inlineStyles.heading,
        activeTintColor: '#0c9',
        inactiveTintColor: '#000',
        keyboardHidesTabBar: !deviceInfo.iOSDevice,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={({route}) => ({
          tabBarIcon: ({color}) => (
            <Icon name="home" size={14} color={color} />
          ),
        })}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{ name: 'Today' }],
            });
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreens}
        options={({route}) => ({
          tabBarIcon: ({color}) => (
            <Icon name="user" size={14} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="More"
        component={HomeScreens}
        options={({route}) => ({
          tabBarIcon: ({color}) => (
            <Icon name="bars" size={14} color={color} />
          ),
        })}
        listeners={({ navigation }) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
            // Do something with the `navigation` object
            navigation.toggleDrawer();
          },
        })}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  const token = useSelector((state) => state.appData.token);
  return (
    <Drawer.Navigator
      swipeEnabled={false}
      drawerStyle={{
        backgroundColor: '#fff',
        width: '70%',
      }}
      drawerContent={(props) => <DrawerMenu {...props} />}
      >
      {!token ? (
        <Drawer.Screen name="App" component={TabBar} />
      ) : (
        <Drawer.Screen
          name="Auth"
          component={AuthScreens}
          options={{swipeEnabled: false}}
        />
      )}
    </Drawer.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';
  if (
     routeName === 'Profile' ||
     routeName ===  "My Appointments" ||
     routeName ===  "Appointment Details" ||
     routeName ===  "Past Care" ||
     routeName ===  "Past Care Details" ||
     routeName ===  "Past Care Service Details" ||
     //routeName ===  "Find Care" ||
     routeName ===  "Talk to PT" ||
     routeName ===  "Call Us" ||
     routeName ===  "Exercise" ||
     routeName ===  "Education" ||
     routeName ===  "Inbox" ||
     routeName ===  "TaskDetails" ||
     routeName ===  "EducationDetails" ||
     routeName ===  "Session Summary"
     ) {
    return false;
  }
  return true;
}

const dynamicNameOptions = ({route, navigation}) => ({
  title: route.params.name,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerTitleStyle: inlineStyles.heading,
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
       <Icon name="tasks" size={24} color='#000' />
    </TouchableOpacity>
  ),
});


const menuOptions = ({navigation}) => ({
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerTitleStyle: inlineStyles.heading,
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
       <Icon name="tasks" size={24} color='#000' />
    </TouchableOpacity>
  ),
});

const inlineStyles = StyleSheet.create({
  heading: {
    fontSize: 12,
    fontFamily: 'Lato-Regular'
  }
})


export default MixedRoutes;