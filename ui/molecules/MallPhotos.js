import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import Images from '../../utils/imagesIndex';

const MallPhotos = () => {
  const dishes = [
    Images.malls.city32_1,
    Images.malls.city32_2,
    Images.malls.city32_3,
    Images.malls.city32_1,
    Images.malls.city32_2,
    Images.malls.city32_3,
    Images.malls.city32_1,
    Images.malls.city32_2,
    Images.malls.city32_3,
  ];

  const renderItem = ({item}) => (
    <TouchableHighlight style={styles.card} onPress={() => {}}>
      <ImageBackground source={item} resizeMode="cover" style={styles.image} />
    </TouchableHighlight>
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={dishes}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{height: 100}}
      numColumns={3}
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
    height: 140,
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

export default MallPhotos;
