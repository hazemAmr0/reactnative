// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "./SinginScreen"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SigninScreen">
        <Stack.Screen name="HomeScreen" component={SigninScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
