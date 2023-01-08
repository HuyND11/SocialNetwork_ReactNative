<<<<<<< HEAD
import React from 'react';
import {StyleSheet} from 'react-native';
import UserProfile from './src/components/UserProfile';

export default function App() {
  return <UserProfile />;
}
=======
import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './src/routes/index';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
>>>>>>> 16e4e69d513b7877a6f357cb223122c0a052d518

const styles = StyleSheet.create({});
