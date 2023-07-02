import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const SearchBar = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.button}>hel</Text> */}
      <Image
        source={require('../assets/searchIcon.png')}
        style={{marginHorizontal: 10}}
      />
      <TextInput
        style={styles.input}
        placeholder="What are you looking for?"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 22,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    marginTop: -20,
    shadowColor: 'black',
    elevation: 4,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },
});

export default SearchBar;
