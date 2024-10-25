import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import SettingsScreen from '../screens/SettingsScreen';
import Dashboard from '../screens/Dashboard';
import HomeStackScreen from './HomeStack';
import Purchases from '../screens/Purchases';
import ProfileStackNavigation from './ProfileStack';

const Tab = createBottomTabNavigator();
const MainTabNavigator = () => {
    const CustomTabBarButton = ({ children, onPress, isActive }) => {
        return (
            <Pressable
                style={[styles.tabButton, isActive ? styles.activeTab : styles.inactiveTab]}
                onPress={onPress}
            >
                {children}
            </Pressable>
        );
    };
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ navigation }) => {
                const state = navigation.getState();
                const routeName = getActiveRouteName(state);
                // console.log("Current Navigation State: ", state);
                // console.log("Active Route Name: ", routeName);

                const shouldHide = shouldHideTabBar(routeName);
                return {
                    headerShown: false,
                    tabBarStyle: {
                        display: shouldHide ? 'none' : 'flex',
                        ...styles.tabBar
                    },
                    tabBarActiveTintColor: '#007AFF',
                    tabBarInactiveTintColor: '#888',
                };
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />,
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} isActive={props.accessibilityState.selected}>
                            {props.children}
                        </CustomTabBarButton>
                    ),
                }}
            />
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color }) => <MaterialIcons name="dashboard" size={24} color={color} />,
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} isActive={props.accessibilityState.selected}>
                            {props.children}
                        </CustomTabBarButton>
                    ),
                }}
            />
            <Tab.Screen
                name="Purchases"
                component={Purchases}
                options={{
                    tabBarLabel: 'Purchases',
                    tabBarIcon: ({ color }) => <FontAwesome5 name="wallet" size={24} color={color} />,
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} isActive={props.accessibilityState.selected}>
                            {props.children}
                        </CustomTabBarButton>
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => <Entypo name="cog" size={24} color={color} />,
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} isActive={props.accessibilityState.selected}>
                            {props.children}
                        </CustomTabBarButton>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackNavigation}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => <Entypo name="user" size={24} color={color} />,
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} isActive={props.accessibilityState.selected}>
                            {props.children}
                        </CustomTabBarButton>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
const getActiveRouteName = (state) => {
    const route = state.routes[state.index];
    if (route.state) {
        return getActiveRouteName(route.state);
    }
    return route.name;
};
const shouldHideTabBar = (routeName) => {
    const hideTabBarScreens = ['Business', 'UserDetails'];
    return hideTabBarScreens.includes(routeName);
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#DEFAEC',
        height: 48,
        borderColor: 'transparent',
        overflow: 'hidden',
        marginBottom: 2
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    activeTab: {
        backgroundColor: '#8EA9EF87',
        borderRadius: 8,
    },
    inactiveTab: {
        backgroundColor: 'transparent',
    },
});

export default MainTabNavigator;
