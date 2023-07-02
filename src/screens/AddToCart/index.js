import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import GridFlatlist from '../../components/GridFlatlist';
import {ProductSwiper} from '../../components/ProductSwiper';
import Ratings from '../../components/Ratings';
import React from 'react';

const CartScreen = ({navigation}) => {
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
  const styles = StyleSheet.create({
    mainView: {
      backgroundColor: 'white',
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    },
    firstView: {
      width: '90%',
      marginHorizontal: '5%',
      flexDirection: 'row',
    },
    review: {color: '#605A65', fontWeight: '400', fontSize: 14},
    inStock: {color: '#46AB62', fontSize: 14, fontWeight: '700'},
    stockView: {
      width: '50%',
      alignItems: 'flex-end',
    },
    descView: {width: '90%', marginHorizontal: '5%'},
    description: {color: '#34283E', fontSize: 19, fontWeight: '400'},
    price: {
      color: '#34283E',
      fontSize: 25,
      fontWeight: '700',
      marginVertical: 10,
    },
    innerView: {
      marginVertical: 15,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    proDetails: {fontWeight: '700', fontSize: 19, color: '#34283E'},
    allDesc: {fontWeight: '400', fontSize: 14, color: '#605A65'},
    bottomView: {
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      padding: 15,
      bottom: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
  });

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'whitesmoke'}}>
      <View style={styles.mainView}>
        <ProductSwiper />
        <View style={styles.firstView}>
          <View
            style={{
              width: '50%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ratings />
            <Text style={styles.review}>8 reviews</Text>
          </View>
          <View style={styles.stockView}>
            <Text style={styles.inStock}>In Stock</Text>
          </View>
        </View>
        <View style={styles.descView}>
          <Text style={styles.description}>
            Astylish Women Open Front Long Sleeve Chunky Knit Cardigan
          </Text>
          <Text style={styles.price}>$89.99</Text>
        </View>
      </View>

      <View style={styles.innerView}>
        <View
          style={{
            width: '90%',
            padding: 20,
          }}>
          <Text style={styles.proDetails}>Product details</Text>
          <Text style={styles.allDesc}>
            Women's Casual V-Neck Pullover Sweater Long Sleeved Sweater Top with
            High Low Hemline is going to be the newest staple in your wardrobe!
            Living up to its namesake, this sweater is unbelievably soft, li...
          </Text>
        </View>
      </View>

      <View
        style={{
          marginVertical: 15,
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <View
          style={{
            width: '90%',
            marginHorizontal: '5%',
            marginVertical: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: '700', fontSize: 19, color: '#34283E'}}>
              Reviews
            </Text>
            <Text style={{fontWeight: '700', fontSize: 12, color: '#34283E'}}>
              See All
            </Text>
          </View>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              color: '#605A65',
              marginVertical: 15,
            }}>
            Olha Chabanova
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Ratings />
            <Text
              style={{
                fontWeight: '400',
                fontSize: 14,
                color: '#605A65',
              }}>
              June 5,2021
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#605A65',
              marginTop: 5,
            }}>
            I’m old (rolling through my 50’s). But, this is my daughter in law’s
            favorite color right now.❤️ So I wear it whenever we hang out! She’s
            my fashion consultant who keeps me on trend🤣
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: '400',
              color: '#9B9B9B',
              marginTop: 10,
            }}>
            835 people found this helpful
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 14,
                color: '#34283E',
                textDecorationLine: 'underline',
              }}>
              Comment
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                color: '#9B9B9B',
              }}>
              Helpful
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: '5%'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 19,
            color: '#34283E',
          }}>
          Products related to this item
        </Text>
      </View>
      <GridFlatlist
        data={flatlistData}
        horizontal={true}
        numColumns={0}
        priceTextStyle={{
          marginVertical: 6,
          color: 'black',
          fontWeight: '900',
          fontSize: 17,
        }}
      />
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/backArrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#90C960',
            borderRadius: 16,
            height: 48,
            width: 215,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              padding: 5,
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Add to cart
          </Text>
        </TouchableOpacity>
        <Image source={require('../../assets/favorite.png')} />
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
