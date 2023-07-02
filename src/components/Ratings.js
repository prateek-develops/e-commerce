import {Image, StyleSheet, View} from 'react-native';

import React from 'react';

const Ratings = () => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 8}}>
      <Image
        source={require('../assets/star.png')}
        resizeMode="contain"
        style={styles.starImg}
      />
      <Image
        source={require('../assets/star.png')}
        resizeMode="contain"
        style={styles.starImg}
      />
      <Image
        source={require('../assets/star.png')}
        resizeMode="contain"
        style={styles.starImg}
      />
      <Image
        source={require('../assets/star.png')}
        resizeMode="contain"
        style={styles.starImg}
      />
      <Image
        source={require('../assets/star.png')}
        resizeMode="contain"
        style={styles.starImg}
      />
    </View>
  );
};

export default Ratings;

const styles = StyleSheet.create({});
