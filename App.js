import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './components/DrawerNavigator';
import RestaurantScreen from './pages/Restaurant';
import DishScreen from './pages/Dish';
import AllResults from './pages/AllResults';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DrawerNavigator">
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{
              headerTitle: () => (
                <Image
                  style={{
                    width: 90,
                    height: 37,
                    resizeMode: 'contain',
                  }}
                  source={require('./assets/logo-pink.png')}
                />
              ),
              headerBackImage: () => (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  source={require('./assets/icons/back.png')}
                />
              ),
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Dish"
            component={DishScreen}
            options={{
              headerTitle: () => (
                <Image
                  style={{
                    width: 90,
                    height: 37,
                    resizeMode: 'contain',
                  }}
                  source={require('./assets/logo-pink.png')}
                />
              ),
              headerBackImage: () => (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  source={require('./assets/icons/back.png')}
                />
              ),
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Results"
            component={AllResults}
            options={{
              headerTitle: () => (
                <Image
                  style={{
                    width: 90,
                    height: 37,
                    resizeMode: 'contain',
                  }}
                  source={require('./assets/logo-pink.png')}
                />
              ),
              headerBackImage: () => (
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  source={require('./assets/icons/back.png')}
                />
              ),
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
