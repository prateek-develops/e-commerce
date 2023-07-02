import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import CatalogueComponent from '../../components/CatalogueComponent';
import CustomHeader from '../../components/CustomHeader';
import GridFlatlist from '../../components/GridFlatlist';
import SearchBar from '../../components/SearchBar';
import SwiperComponent from '../../components/SwiperComponent';

const CatalogueScreen = ({navigation}) => {
  const [buttonColor, setButtonColor] = useState(0);
  // const [color, setColor] = useState('red');

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
  const ffdata = [
    {id: '1', text: 'All'},
    {id: '2', text: 'Dresses'},
    {id: '3', text: 'Top'},
    {id: '4', text: 'Sweaters'},
    {id: '5', text: 'Jeans'},
  ];
  const renderItem = ({item, index}) => {
    return (
      <View style={{marginHorizontal: 5}}>
        <TouchableOpacity
          onPress={() => setButtonColor(index)}
          style={{
            backgroundColor:
              buttonColor == index && buttonColor == 0 ? '#90C960' : 'white',
            borderRadius: 20,
          }}>
          <Text
            style={{
              backgroundColor: buttonColor == index ? '#90C960' : 'white',
              padding: 10,
              borderRadius: 20,
              paddingHorizontal: 20,
              color: buttonColor == index ? 'white' : 'black',
            }}>
            {item.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
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
          <View style={{marginHorizontal: 10}}>
            <FlatList
              data={ffdata}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
          <View
            style={{
              width: '90%',
              marginHorizontal: '5%',
              marginVertical: '5%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '700', fontSize: 19, color: '#34283E'}}>
              166 items
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: '700', fontSize: 12, color: '#9B9B9B'}}>
                Sort by:
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 12,
                  color: '#34283E',
                  marginHorizontal: 3,
                }}>
                Featured
              </Text>
              <Image
                source={require('../../assets/arrow.png')}
                tintColor="#34283E"
                style={{
                  height: 15,
                  width: 15,
                  transform: [{rotate: '90deg'}],
                }}
                resizeMode="contain"
              />
            </View>
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

export default CatalogueScreen;
