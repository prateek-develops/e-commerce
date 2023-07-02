import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

const CustomHeader = () => {
  return (
    <View
      style={{
        height: 100,
        width: '100%',
        backgroundColor: '#1FCECB',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
      }}>
      <TouchableOpacity onPress={() => Alert.alert('menu')}>
        <Image source={require('../assets/drawer.png')} resizeMode="cover" />
      </TouchableOpacity>
      <Text style={{fontSize: 19, fontWeight: '900', color: 'white'}}>
        NEAR TO NATURE
      </Text>
      <Image source={require('../assets/bell.png')} />
    </View>
  );
};

export default CustomHeader;
