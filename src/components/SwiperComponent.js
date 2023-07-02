import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
// AppRegistry.registerComponent('myproject', () => SwiperComponent);
import React, {Component} from 'react';

import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
    borderRadius: 12,
  },

  wrapper: {},

  slide: {
    justifyContent: 'center',
    borderRadius: 12,
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
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    lineHeight: 31,
  },

  image: {
    height: '90%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 16,
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 12,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    borderRadius: 10,
    flex: 1,
  },
};

export default class SwiperComponent extends Component {
  render() {
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
                width: '18%',
                height: 2,
                marginLeft: 3,
                marginRight: 3,
                marginBottom: 3,
                borderRadius: 2,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: '18%',
                borderRadius: 2,
                height: 2,
                marginLeft: 3,
                marginRight: 3,
                marginBottom: 3,
              }}
            />
          }
          paginationStyle={{
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
          }}
          autoplay={false}>
          <View style={styles.slide}>
            <ImageBackground
              borderRadius={10}
              source={require('../assets/Catalogue.png')}
              style={{height: '100%', width: '100%'}}
              resizeMode="cover">
              <View style={styles.overlay}>
                <Text style={styles.text}>Fashion Sale</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#E7B944',
                      fontWeight: '700',
                      marginLeft: 20,
                    }}>
                    See More
                  </Text>
                  <Image
                    source={require('../assets/arrow.png')}
                    tintColor="#E7B944"
                    style={{
                      height: 18,
                      width: 18,
                      marginTop: 2,
                    }}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../assets/Catalogue.png')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../assets/angry.png')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../assets/angry.png')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../assets/angry.png')}
            />
          </View>
        </Swiper>
      </View>
    );
  }
}
