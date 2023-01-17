import React from 'react';
import {View, FlatList, StyleSheet, Text, ImageBackground} from 'react-native';

const RestaurantCard = ({id}) => (
  <View style={styles.card}>
    <ImageBackground source={id} resizeMode="cover" style={styles.image}>
      <Text> </Text>
    </ImageBackground>
  </View>
);

const FeedCards = ({data}) => {
  const renderItem = ({item}) => <RestaurantCard id={item} />;

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item}
      numColumns={3}
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{height: 30}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
    margin: 1,
    height: 140,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default FeedCards;
