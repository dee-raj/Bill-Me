import React from "react";
import SellerProfile from "../screens/SellerProfile";
import ProfileScreen from "../screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BusinessStackProfiles from "./BusinessStack";

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigation = () => {
    return (
        <ProfileStack.Navigator
            initialRouteName="SellerProfile"
        >
            <ProfileStack.Screen
                name="SellerProfile"
                component={SellerProfile}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="UserDetails"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="Business"
                component={BusinessStackProfiles}
                options={{ headerShown: false }}
            />
        </ProfileStack.Navigator>
    )
};
export default ProfileStackNavigation;