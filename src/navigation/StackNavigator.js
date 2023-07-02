import About from '../screens/About';
import CartScreen from '../screens/AddToCart';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import HomeScr from '../screens/HomeSection';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const screenOptionStyle = {
  // headerStyle: {
  //   backgroundColor: '#9AC4F8',
  // },
  // headerTintColor: 'white',
  // headerBackTitle: 'Back',
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeScreen" component={HomeScr} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, ContactStackNavigator};
