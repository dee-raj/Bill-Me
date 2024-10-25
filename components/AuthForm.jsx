import React from 'react';
import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const AuthForm = ({ formType, values, errors, touched, handleChange, handleBlur, handleSubmit, secure, setSecure }) => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.titleText}>{formType} Me!</Text>
            {formType === "Register" ? <>
                <TextInput
                    placeholder="Name"
                    style={styles.inputBox}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholderTextColor="#396C59"
                    autoCapitalize="words"
                    inputMode='text'
                />
                {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
            </> : null}
            <TextInput
                placeholder="Email"
                style={styles.inputBox}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholderTextColor="#396C59"
                inputMode='email'
                autoCapitalize="none"
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <View style={styles.passBtnStyle}>
                <TextInput
                    placeholder="Password"
                    style={styles.passwordInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholderTextColor="#396C59"
                    secureTextEntry={secure}
                />
                <Pressable onPress={() => setSecure(!secure)} style={styles.secureBtn}>
                    <Feather name={secure ? 'eye' : 'eye-off'} size={28} color={secure ? "#FE0769" : "#777"} />
                </Pressable>
            </View>
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <Pressable onPress={handleSubmit} style={styles.submitBtn}>
                <Text style={styles.submitBtnText}>{formType}</Text>
            </Pressable>
        </View>
    );
};

export default AuthForm;

const styles = StyleSheet.create({
    formContainer: {
        width: '90%',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#396C59',
        marginBottom: 20,
    },
    inputBox: {
        height: 60,
        width: '99%',
        borderColor: '#396C59',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#FEA',
        color: '#396C59',
    },
    errorText: {
        color: 'red',
        marginTop: -15,
        marginBottom: 10,
        alignSelf: 'center',
    },
    passBtnStyle: {
        width: '99%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: '#396C59',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    passwordInput: {
        height: 35,
        paddingHorizontal: 20,
        flex: 1,
    },
    secureBtn: {
        marginLeft: 10,
    },
    submitBtn: {
        backgroundColor: '#396C59',
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 60,
        marginBottom: 10,
        width: '100%'
    },
    submitBtnText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
});
