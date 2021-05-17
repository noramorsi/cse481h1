import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import GroceryListScreen from './components/groceryListScreen';
import GoalsScreen from './components/goalsScreen';
import TreeScreen from './components/treeScreen';
import SettingsScreen from './components/settingsScreen';

// https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator();

function GroceryListScreenNested() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Grocery List" component={GroceryListScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Goals" component={GoalsScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    );
}

// https://reactnavigation.org/docs/tab-based-navigation
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={GroceryListScreenNested} />
      <Tab.Screen name="Visualization" component={TreeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}