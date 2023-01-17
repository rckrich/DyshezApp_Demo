import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
// import Address from '../ui/molecules/Address';
import RestaurantsSearch from '../components/RestaurantsSearch';

function Home() {
  return (
    <View style={styles.searchContainer}>
      <SearchBar isHome />
      {/* <Address /> */}
      <Text style={styles.title}>Restaurantes Cercanos</Text>
      <RestaurantsSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#fff',
    padding: 14,
    paddingHorizontal: 8,
  },
  title: {
    fontWeight: '700',
    fontSize: 19,
    paddingLeft: 22,
    // fontFamily: 'PoppinsSemiBold',
  },
});

export default Home;
