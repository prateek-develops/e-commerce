// import {ImageBackground, StyleSheet, Text, View} from 'react-native';

// import React from 'react';

// const CatalogueComponent = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require('../assets/sad.png')}
//         style={styles.imageBackground}
//         resizeMode="cover">
//         <View style={styles.overlay}>
//           <Text style={styles.text}>Hello, World!</Text>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     height: 150,
//     width: 90,
//   },
//   imageBackground: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
//   text: {
//     color: 'white',
//     fontWeight: 'bold',
//     alignSelf: 'center',
//     marginHorizontal: 20,
//   },
// });

import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';

// export default CatalogueComponent;
import React from 'react';

const CatalogueComponent = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      horizontal
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <ImageBackground
            borderRadius={10}
            source={item.image}
            style={styles.image}>
            <View style={styles.overlay}>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </ImageBackground>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 90,
    height: 90,
    marginHorizontal: 8,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
  },
});

export default CatalogueComponent;
