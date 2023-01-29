import React from 'react';
import {Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RestaurantCards from './RestaurantCards';
import MallPhotos from './MallPhotos';

const Tab = createMaterialTopTabNavigator();

const MallTabs = ({id}) => {
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
        children={() => <MallPhotos />}
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
