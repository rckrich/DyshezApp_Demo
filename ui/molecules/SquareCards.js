import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableHighlight,
  Image,
} from 'react-native';
import {getMenu} from '../../utils/dishesData';
import {useNavigation} from '@react-navigation/native';
// import Dish from '../../pages/Dish';

const SquareCards = ({id, filteredDishes}) => {
  const navigation = useNavigation();
  const dishes = getMenu(id);

  const renderItem = ({item}) => (
    <TouchableHighlight
      style={styles.card}
      onPress={() => navigation.navigate('Dish', {id: item.id})}>
      <ImageBackground
        source={item.imageUrl}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.wrapperTitle}>
          <Text numberOfLines={1} style={styles.text}>
            {item.name}
          </Text>
        </View>
        <View style={styles.wrapperPrice}>
          <Text style={styles.text}>${item.price.toFixed(2)}</Text>
        </View>
        <View style={styles.wrapperIcons}>
          <View style={styles.comments}>
            <Image
              style={styles.pen}
              source={require('../../assets/icons/heart.png')}
            />
          </View>
          <View style={styles.likes}>
            <View style={styles.likesWrapper}>
              <Image
                style={styles.heart}
                source={require('../../assets/icons/heart.png')}
              />
              <Text>{item.likes}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={filteredDishes?.length > 0 ? filteredDishes : dishes}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{height: 100}}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
    margin: 1,
    height: 194,
    maxWidth: '49%',
  },
  wrapperTitle: {
    backgroundColor: '#000',
    color: '#fff',
    maxWidth: '100%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 5,
    height: 15,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 32,
  },
  wrapperPrice: {
    backgroundColor: '#000',
    color: '#fff',
    maxWidth: '100%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    height: 15,
    paddingHorizontal: 5,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 15,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    maxWidth: 200,
  },
  wrapperIcons: {
    maxWidth: '100%',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    top: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  comments: {
    borderRadius: 20,
    paddingHorizontal: 5,
    height: 20,
    backgroundColor: '#fff',
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likesWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likes: {
    borderRadius: 20,
    paddingHorizontal: 5,
    height: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 12,
    width: 12,
  },
  heart: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 12,
    width: 12,
    marginRight: 2,
  },
});

export default SquareCards;
