import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet, TextInput, Alert } from 'react-native';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { sendPasswordResetEmail, updatePassword } from 'firebase/auth';
import IconItem from './IconItem';
import { Entypo } from "@expo/vector-icons";

const ForgotModel = ({ modalVisible, setModalVisible }) => {
    const Auth = FIREBASE_AUTH;
    const [email, setEmail] = useState('');

    const handleSendResetEmail = () => {
        sendPasswordResetEmail(Auth, email)
            .then(() => {
                Alert.alert('Success', 'Password reset email sent! Check your inbox.');
                setModalVisible(false);
            })
            .catch((error) => {
                let errorMessage = 'An error occurred. Please try again.';
                if (error.code === 'auth/invalid-email') {
                    errorMessage = 'Invalid email format.';
                } else if (error.code === 'auth/user-not-found') {
                    errorMessage = 'No user found with this email.';
                }
                Alert.alert('Error', errorMessage);
            });
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.centeredView}>
                <View style={styles.container}>
                    <Text style={styles.title}>Forgot Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Pressable onPress={handleSendResetEmail} style={styles.resetButton}>
                        <Text style={styles.resetButtonText}>Send Reset Email</Text>
                    </Pressable>
                </View>

                <Pressable
                    style={styles.buttonClose}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <IconItem IconComponent={Entypo} name={'cross'} size={34} />
                </Pressable>
            </View>
        </Modal>
    );
};

export default ForgotModel;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
    },
    resetButton: {
        backgroundColor: '#007AFF',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    resetButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonClose: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
});
