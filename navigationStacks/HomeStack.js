import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import WorkFieldTasksScreen from '../screens/WorkFieldTasksScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="HomeScreen">
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="Work"
                component={WorkFieldTasksScreen}
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    );
};

export default HomeStackScreen;