import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import { AuthStack } from './AuthStack';

const Stack = createNativeStackNavigator();

export function AppStack() {
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Main"
                component={MainTabNavigator}
            />
            <Stack.Screen
                name="AuthStack"
                component={AuthStack}
            />
        </Stack.Navigator>
    );
}
