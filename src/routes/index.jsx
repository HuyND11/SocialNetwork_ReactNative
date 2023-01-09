import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useIsFocused} from '@react-navigation/native';
import {Text} from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import Home from './../screens/Home/index';
import Account from './../screens/User/index';
import {COLORS} from './../utils/index';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const isFocused = useIsFocused();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={() => {
          return {
            tabBarLabel: () => {
              return (
                <Text
                  style={{
                    color: isFocused ? '#000' : '#CCC',
                    fontWeight: '600',
                  }}>
                  {'Home'}
                </Text>
              );
            },
            tabBarIcon: () => {
              return (
                <Feather
                  name="home"
                  size={28}
                  color={isFocused ? COLORS.blackText : '#CCC'}
                />
              );
            },
            title: 'Home',
          };
        }}
      />
      <Tab.Screen
        name="create"
        component={Home}
        options={() => {
          return {
            tabBarLabel: () => {
              return false;
            },
            tabBarIcon: () => {
              return (
                // <TouchableOpacity
                //   style={{
                //     backgroundColor: COLORS.bgActiveBtn,
                //     borderRadius: 99,
                //   }}>

                // </TouchableOpacity>
                <Feather
                  name="plus"
                  size={28}
                  color={isFocused ? COLORS.whiteText : '#CCC'}
                />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={() => {
          return {
            tabBarLabel: () => {
              return (
                <Text
                  style={{
                    color: isFocused ? COLORS.blackText : '#CCC',
                    fontWeight: '600',
                  }}>
                  {'Account'}
                </Text>
              );
            },
            tabBarIcon: () => {
              return (
                <Feather
                  name="user"
                  size={28}
                  color={isFocused ? COLORS.blackText : '#CCC'}
                />
              );
            },
            title: 'Home',
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
