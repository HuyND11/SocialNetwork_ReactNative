import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './src/routes/index';
import Login from './src/screens/Auth/Login';
import Register from './src/screens/Auth/Register';
import {COLORS} from './src/utils';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: COLORS.primaryBg},
            headerTintColor: COLORS.bgActiveBtn,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen name="main" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
