import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AgeValidationScreen from './screens/AgeValidationScreen';
import MovieSelectionScreen from './screens/MovieSelectionScreen';

export type RootStackParamList = {
  AgeValidation: undefined;
  MovieSelection: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AgeValidation">
        <Stack.Screen name="AgeValidation" component={AgeValidationScreen} />
        <Stack.Screen name="MovieSelection" component={MovieSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
