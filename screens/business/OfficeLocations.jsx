import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OfficeLocations = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Office Locations</Text>
        </View>
    )
}

export default OfficeLocations

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});