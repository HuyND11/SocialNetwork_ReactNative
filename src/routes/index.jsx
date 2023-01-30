import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './../screens/Home/index';
import Feather from 'react-native-vector-icons/Feather';
import {StatusBar, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FontSize} from './../utils/index';
import Account from './../screens/User/index';
import Create from '../screens/Create';

const BottomTab = () => {
  const focusIcon = isFocused => {
    return isFocused ? styles.isFocused : styles.isUnfocused;
  };
  const focusText = isFocused => {
    return isFocused ? styles.isFocusedText : styles.isUnfocusedText;
  };

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: COLORS.primaryBg,
          borderTopWidth: 0,
        },
      }}
      sceneContainerStyle={{backgroundColor: COLORS.primaryBg}}>
      <Tab.Screen
        name="home"
        component={Home}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return <Text style={focusText(focused)}>Home</Text>;
            },
            tabBarIcon: ({focused}) => {
              return <Feather name="home" style={focusIcon(focused)} />;
            },
          };
        }}
      />
      <Tab.Screen
        name="createPost"
        component={Create}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return <Text style={focusText(focused)}>Create</Text>;
            },
            tabBarIcon: ({focused}) => {
              return (
                <Feather
                  name="plus"
                  style={
                    focused ? styles.iconCenterFocused : styles.isUnfocused
                  }
                />
              );
            },
            title: 'create',
          };
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return <Text style={focusText(focused)}>Account</Text>;
            },
            tabBarIcon: ({focused}) => {
              return <Feather name="user" style={focusIcon(focused)} />;
            },
            title: 'Home',
          };
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  isFocused: {
    color: COLORS.whiteText,
    fontWeight: '600',
    fontSize: 35,
  },
  isUnfocused: {
    color: COLORS.greyText,
    fontWeight: '400',
    fontSize: 28,
  },
  isFocusedText: {
    color: COLORS.whiteText,
    fontWeight: '500',
    fontSize: FontSize.mediumSize,
  },
  isUnfocusedText: {
    color: COLORS.greyText,
    fontWeight: '400',
    fontSize: FontSize.mediumSize,
  },
  iconCenterFocused: {
    backgroundColor: COLORS.bgActiveBtn,
    padding: 10,
    fontSize: 35,
    borderRadius: 30,
    color: COLORS.whiteText,
    position: 'absolute',
    top: -30,
    shadowColor: COLORS.likedBtn,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 6.0,
    elevation: 10,
  },
});

export default BottomTab;
