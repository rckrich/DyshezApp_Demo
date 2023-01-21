import React, {useState} from 'react';
import {Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CategoryCards from './CategoryCards';
import ListMenu from './ListMenu';
import {filterMenu} from '../../utils/dishesData';
import RestaurantCards from './RestaurantCards';

const Tab = createMaterialTopTabNavigator();

const MallTabs = ({id}) => {
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [categorySelected, setCategorySelected] = useState(null);

  const handleCategorySelect = category => {
    if (category !== categorySelected) {
      const helper = filterMenu(id, category);
      setFilteredDishes(helper);
      setIsFiltered(true);
      setCategorySelected(category);
    } else {
      setFilteredDishes([]);
      setIsFiltered(false);
      setCategorySelected(null);
    }
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: '#434343'},
      }}>
      <Tab.Screen
        name="Restaurants"
        children={() => <RestaurantCards id={id} />}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/restaurants.png')}
              style={{
                width: 25,
                height: 25,
                opacity: focused ? null : 0.5,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ListMenu"
        children={() => (
          <ListMenu
            id={id}
            filteredDishes={filteredDishes}
            handleCategorySelect={handleCategorySelect}
            categorySelected={categorySelected}
          />
        )}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/list.png')}
              style={{
                width: 25,
                height: 25,
                opacity: focused ? null : 0.5,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MallTabs;
