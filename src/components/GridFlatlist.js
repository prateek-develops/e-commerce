import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Ratings from './Ratings';
import React from 'react';

const itemWidth = Dimensions.get('window').width / 2;

const GridFlatlist = ({
  priceTextStyle,
  data,
  onPress,
  numColumns = 2,
  horizontal = false,
}) => {
  return (
    <View style={{marginHorizontal: 10}}>
      <FlatList
        data={data ?? []}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        horizontal={horizontal}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <ImageBackground
              source={item?.image}
              borderRadius={10}
              style={{
                height: 165,
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 12,
              }}
              resizeMode="contain">
              {index == 0 ? (
                <Text
                  style={{
                    backgroundColor: '#D23A3A',
                    padding: 5,
                    marginRight: '70%',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    color: 'white',
                    fontWeight: '800',
                  }}>
                  -50%
                </Text>
              ) : (
                ''
              )}
            </ImageBackground>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Ratings />
              <Image
                source={require('../assets/favorite.png')}
                resizeMode="cover"
                style={{marginTop: -30}}
              />
            </View>
            <View style={{width: '100%', marginTop: -5}}>
              <Text style={{color: 'black', fontWeight: '400'}}>
                {item?.descText}
              </Text>
              <Text
                style={[priceTextStyle, {color: index == 0 ? 'red' : 'black'}]}>
                {item?.priceText}
              </Text>
            </View>
            {/* <Text style={styles.text}>{item.text}</Text> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: itemWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'transparent',
    // backgroundColor: 'red',
    marginVertical: 10,
    borderRadius: 12,
  },
  text: {
    fontSize: 18,
  },
  starImg: {marginHorizontal: 2},
});

export default GridFlatlist;
