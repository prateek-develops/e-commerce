import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  swiperStyle: {height: 90, marginHorizontal: 15, borderRadius: 15},
  catalogView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  catalog: {color: '#34283E', fontSize: 20, fontWeight: '900'},
  arrowImg: {
    height: 15,
    width: 15,
    marginTop: 2,
  },
  featureView: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  feature: {fontWeight: '700', fontSize: 19, color: '#34283E'},
});

export default styles;
