import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable, ToastAndroid } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseConfig';
import AuthForm from '../components/AuthForm';
import ErrorModal from '../components/ErrorModal';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/, 'Must contain 1 uppercase, 1 special character')
        .required('Password is required'),
});

const Register = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [secure, setSecure] = useState(false);
    const Auth = FIREBASE_AUTH;

    const registerHandler = async (values) => {
        try {
            await createUserWithEmailAndPassword(Auth, values.email, values.password);
            const user = userCredential.user;
            console.log(`\n \t ${values.email} \t ${values.password} \t ${values.name} \t \n`)
            await updateProfile(user, {
                displayName: values.name,
            });
            ToastAndroid.show("You have successfully registered!", ToastAndroid.SHORT);
            navigation.navigate('Login');
        } catch (error) {
            setErrorMessage(error.message);
            setModalVisible(true);
        }
    };

    return (
        <View style={styles.container}>
            <ErrorModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                errorMessage={errorMessage}
            />
            <Image source={require('../assets/favicon.png')} style={styles.logo} />
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={registerHandler}
            >
                {props => (
                    <AuthForm
                        formType="Register"
                        {...props}
                        secure={secure}
                        setSecure={setSecure}
                    />
                )}
            </Formik>
            <Pressable onPress={() => navigation.navigate('Login')} style={styles.linkBtn}>
                <Text style={styles.linkText}>Already have an account? Log In</Text>
            </Pressable>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3F2E1',
        paddingHorizontal: 20,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    linkBtn: {
        marginTop: 20,
    },
    linkText: {
        color: '#007AFF',
    },
    loginButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: '100%', // Use 100% to make it responsive
        height: 48,
        borderRadius: 10,
        marginTop: 20,
    },
    loginButtonText: {
        color: '#222222',
        fontWeight: '400',
        fontSize: 18,
    },
});
