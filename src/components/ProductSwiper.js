import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
// AppRegistry.registerComponent('myproject', () => SwiperComponent);
import React, {Component} from 'react';

import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');

export const ProductSwiper = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        height={240}
        onMomentumScrollEnd={(e, state, context) =>
          console.log('index:', state.index)
        }
        dot={
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 8,
              height: 8,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
              borderRadius: 10,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: 'white',
              width: 8,
              borderRadius: 10,
              height: 8,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        paginationStyle={{
          left: 0,
          right: 0,
          bottom: 20,
          position: 'absolute',
        }}
        autoplay={true}>
        <View style={styles.slide}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('../assets/cloth2.png')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('../assets/cloth2.png')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('../assets/cloth2.png')}
          />
        </View>
      </Swiper>
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
    height: 375,
  },

  wrapper: {},

  slide: {
    justifyContent: 'center',
    flex: 1,
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    height: '90%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 16,
  },
};
