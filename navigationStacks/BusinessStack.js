import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BusinessDetails from "../screens/business/Details";
import AdditionalDetails from "../screens/business/AdditionalDetails";
import BusinessPanValidation from '../screens/business/PanValidation';
import OfficeLocations from "../screens/business/OfficeLocations";
import BankAccounts from "../screens/business/BankAccounts";
import EInvoicing from "../screens/business/EInvoicing";
import BeneficialOwnershipCompliance from "../screens/business/OwnershipCompliance";

const BusinessStack = createNativeStackNavigator();

const BusinessStackProfiles = () => {
    return (
        <BusinessStack.Navigator initialRouteName="Business PAN Validation">
            <BusinessStack.Screen
                name="Business PAN Validation"
                component={BusinessPanValidation}
                options={{ headerShown: false }}
            />
            <BusinessStack.Screen
                name="Business Details"
                component={BusinessDetails}
                options={{ headerShown: false }}
            />
            <BusinessStack.Screen
                name="Additional Details"
                component={AdditionalDetails}
                options={{ headerShown: false }}
            />
            <BusinessStack.Screen
                name="Office Locations"
                component={OfficeLocations}
                options={{ headerShown: false }}
            />
            <BusinessStack.Screen
                name="Bank Accounts"
                component={BankAccounts}
                options={{ headerShown: false }}
            />
            <BusinessStack.Screen
                name="Beneficial Ownership Compliance"
                component={BeneficialOwnershipCompliance}
                options={{ headerShown: false }}
            />
            <BusinessStack.Screen
                name="e-Invoicing"
                component={EInvoicing}
                options={{ headerShown: false }}
            />
        </BusinessStack.Navigator>
    );
};

export default BusinessStackProfiles;
