import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import CatalogueComponent from '../../components/CatalogueComponent';
import CustomHeader from '../../components/CustomHeader';
import GridFlatlist from '../../components/GridFlatlist';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import SwiperComponent from '../../components/SwiperComponent';
import styles from './styles';

const HomeScr = ({navigation}) => {
  const data = [
    {id: '1', image: require('../../assets/women.png'), text: 'Womens Fashion'},
    {id: '2', image: require('../../assets/boy.png'), text: 'Mens Fashion'},
    {id: '3', image: require('../../assets/boy.png'), text: 'Phones'},
    {id: '3', image: require('../../assets/women.png'), text: 'Computers'},
    {id: '3', image: require('../../assets/boy.png'), text: 'Mens Fashion'},

    // Add more images and text here
  ];
  const flatlistData = [
    {
      id: '1',
      image: require('../../assets/cloth1.png'),
      descText: 'Saodimallsu Womens Turtleneck Oversized...',
      priceText: '$49',
      priceTextColor: 'red',
    },
    {
      id: '2',
      image: require('../../assets/cloth2.png'),
      descText: 'Astylish Women Open Front Long Sleeve Ch...',
      priceText: '$89.99',
      priceTextColor: 'black',
    },
    {
      id: '3',
      image: require('../../assets/cloth3.png'),
      descText: 'ECOWISH Womens Color Block Striped Draped K...',
      priceText: '$102.33',
      priceTextColor: 'black',
    },
    {
      id: '4',
      image: require('../../assets/cloth4.png'),
      descText: 'Angashion Women Sweaters Casual Long...',
      priceText: '$132.98',
      priceTextColor: 'black',
    },
  ];
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
        }}>
        <CustomHeader />
        <SearchBar />
        <View
          style={{
            borderRadius: 10,
            marginVertical: 15,
          }}>
          <View style={styles.swiperStyle}>
            <SwiperComponent />
          </View>
          <View style={styles.catalogView}>
            <Text style={styles.catalog}>Catalogue</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>See All</Text>
              <Image
                source={require('../../assets/arrow.png')}
                tintColor="grey"
                style={styles.arrowImg}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{height: 90}}>
            <CatalogueComponent data={data} />
          </View>
          <View style={styles.featureView}>
            <Text style={styles.feature}>Featured</Text>
          </View>
          <GridFlatlist
            data={flatlistData}
            priceTextStyle={{
              marginVertical: 6,
              color: 'black',
              fontWeight: '900',
              fontSize: 17,
            }}
            onPress={() => navigation.navigate('CartScreen')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScr;
