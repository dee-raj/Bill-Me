import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BeneficialOwnershipCompliance = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Beneficial Ownership Compliance</Text>
        </View>
    )
}

export default BeneficialOwnershipCompliance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#73676757",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});