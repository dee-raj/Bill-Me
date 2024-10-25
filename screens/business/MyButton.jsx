import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

const MyButton = ({ handlePress, title, bgColor }) => {
    return (
        <Pressable
            onPress={handlePress}
            style={[styles.proceedBtn, {
                backgroundColor: bgColor ? bgColor : '#1a5aff'
            }]}
        >
            <Text style={styles.buttonText}>{title ? title : "PROCEED"}</Text>
        </Pressable>
    );
};

export default MyButton;

const styles = StyleSheet.create({
    proceedBtn: {
        width: '40%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
