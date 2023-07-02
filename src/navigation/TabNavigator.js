import {ContactStackNavigator, MainStackNavigator} from './StackNavigator';
import {Image, View} from 'react-native';

import CatalogueScreen from '../screens/Catalogue';
import FavoriteScreen from '../screens/Favorite';
import ProfileScreen from '../screens/Profile';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarStyle: {backgroundColor: 'red', width: 300},
      }}>
      <Tab.Screen
        name="HomeScr"
        component={MainStackNavigator}
        options={({route}) => ({
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/homeIcon.png')}
              style={{height: 24, width: 24}}
              resizeMode="contain"
              tintColor={color}
            />
          ),

          tabBarLabel: 'Home',
          tabBarStyle: route
            ? (rout => {
                const routeName = getFocusedRouteNameFromRoute(rout) ?? '';
                console.log(rout, 'jjojo');
                if (routeName === 'CartScreen') {
                  return {display: 'none'};
                }
                return;
              })(route)
            : {
                backgroundColor: 'red',
                width: 300,
              },
        })}
      />
      <Tab.Screen
        name="CatalogueScreen"
        component={CatalogueScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/catalogIcon.png')}
              style={{height: 24, width: 24}}
              resizeMode="contain"
              tintColor={color}
            />
          ),
          tabBarLabel: 'Catalogue',
        }}
      />
      {/* <Tab.Screen name="Contact" component={ContactStackNavigator} /> */}
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/FavIcon.png')}
              style={{height: 24, width: 24}}
              resizeMode="contain"
              tintColor={color}
            />
          ),
          tabBarLabel: 'Favorite',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/ProfileIcon.png')}
              style={{
                height: 24,
                width: 24,
              }}
              tintColor={color}
              resizeMode="contain"
            />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
