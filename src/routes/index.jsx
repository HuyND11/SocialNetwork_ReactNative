import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './../screens/Home/index';
import Feather from 'react-native-vector-icons/dist/Feather';
import {useIsFocused} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS} from './../utils/index';
import Account from './../screens/User/index';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const isFocused = useIsFocused();
  return (
    <Tab.Navigator>
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
