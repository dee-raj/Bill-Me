import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable, ToastAndroid } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseConfig';
import AuthForm from '../components/AuthForm';
import ErrorModal from '../components/ErrorModal';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const Login = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [secure, setSecure] = useState(false);
    const Auth = FIREBASE_AUTH;

    const LoginHandler = async (values) => {
        try {
            const userCredential = await signInWithEmailAndPassword(Auth, values.email, values.password);
            ToastAndroid.show("You have successfully logged in!", ToastAndroid.SHORT);
        } catch (error) {
            setErrorMessage(error.message);
            setModalVisible(true);
        }
    };

    return (
        <View style={styles.container}>
            <ErrorModal
                title={'E r r o r . . .'}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                errorMessage={errorMessage}
            />
            <Image source={require('../assets/favicon.png')} style={styles.logo} />
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={LoginHandler}
            >
                {props => (
                    <AuthForm
                        formType="Login"
                        {...props}
                        secure={secure}
                        setSecure={setSecure}
                    />
                )}
            </Formik>

            <Pressable onPress={() => navigation.navigate('Register')} style={styles.linkBtn}>
                <Text style={styles.linkText}>Don't have an account? Register</Text>
            </Pressable>
        </View>
    );
};

export default Login;

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
});
