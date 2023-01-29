import React from 'react';
import {getMallRestaurants} from '../../utils/restaurantsData';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RestaurantCard = ({logoUrl, id, isActive}) => {
  const navigation = useNavigation();
  const handleClick = restaurantId => {
    if (isActive) {
      navigation.navigate('Restaurant', {id: restaurantId});
    } else {
      alert('Whoops! Has llegado al final del demo');
    }
  };

  return (
    <TouchableHighlight
      style={styles.touchable}
      onPress={() => handleClick(id)}
      underlayColor="transparent">
      <View style={styles.card}>
        <ImageBackground
          source={logoUrl}
          resizeMode="cover"
          style={styles.image}>
          <Text></Text>
        </ImageBackground>
      </View>
    </TouchableHighlight>
  );
};

const RestaurantCards = ({id}) => {
  const renderItem = ({item}) => (
    <RestaurantCard
      logoUrl={item.logoUrl}
      id={item.id}
      isActive={item.isActive}
    />
  );

  const restaurants = getMallRestaurants(id);

  return (
    <FlatList
      style={styles.container}
      data={restaurants}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{height: 30}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
    height: 190,
    borderRadius: 0,
  },
  touchable: {
    width: '50%',
    padding: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default RestaurantCards;
