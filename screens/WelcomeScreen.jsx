import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome !!!</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Register')}
                activeOpacity={0.58}
            >
                <Text style={styles.buttonText}>New User</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
                activeOpacity={0.58}
            >
                <Text style={styles.buttonText}>Already Have Account</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3F2E1',
        width: '99%'
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#396C59',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#396C59',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '87%'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
});

