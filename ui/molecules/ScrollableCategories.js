import React from 'react';
import {View, FlatList, StyleSheet, Text, Pressable} from 'react-native';
import {getMenuCategories} from '../../utils/dishesData';

const ScrollableCategories = ({id, handleCategorySelect, categorySelected}) => {
  const categories = getMenuCategories(id);

  const renderItem = ({item}) => (
    <View>
      <Pressable
        style={
          categorySelected !== item.category
            ? styles.button
            : styles.buttonBlack
        }
        onPress={() => handleCategorySelect(item.category)}>
        <Text
          style={
            categorySelected !== item.category ? styles.text : styles.textWhite
          }>
          {item.category}
        </Text>
      </Pressable>
    </View>
  );

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 60,
    alignItems: 'center',
  },
  button: {
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    height: 38,
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  buttonBlack: {
    backgroundColor: '#000',
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    paddingHorizontal: 4,
    justifyContent: 'center',
    height: 38,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  textWhite: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
});

export default ScrollableCategories;
