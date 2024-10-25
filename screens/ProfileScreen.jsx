import { Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import ForgotModel from '../components/ForgotModel';

const ProfileScreen = ({ navigation }) => {
    const Auth = FIREBASE_AUTH;
    const [userInitial, setUserInitial] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [forgotModelVisible, setForgotModelVisible] = useState(false);


    useEffect(() => {
        const user = Auth.currentUser;

        if (user) {
            const displayName = user.displayName || user.email;
            const initial = displayName.charAt(0).toUpperCase();

            let firstName = user.email.split('@')[0];
            let lastName = user.email.substring(user.email.indexOf('@') + 1, user.email.indexOf('.'));
            setUserInitial(initial);
            setUserName(firstName + " " + lastName);
            setUserEmail(user.email);
        }
    }, [Auth]);

    const handleSignOut = async () => {
        const user = Auth.currentUser;
        try {
            await signOut(Auth);
            // console.log('User signed out', user);
            ToastAndroid.show("You have successfully logged out!", ToastAndroid.LONG);
        } catch (error) {
            // console.error('Error signing out:', error);
            ToastAndroid.show("Error signing out: " + error.message, ToastAndroid.SHORT);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.initialContainer}>
                    <Text style={styles.initialText}>{userInitial}</Text>
                </View>
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.userEmail}>{userEmail}</Text>
                </View>
            </View>

            <ForgotModel
                modalVisible={forgotModelVisible}
                setModalVisible={setForgotModelVisible}
            />

            <Pressable onPress={() => setForgotModelVisible(!forgotModelVisible)} style={styles.btnStyle}>
                <Text style={styles.linkText}>Forgot Password?</Text>
            </Pressable>

            <Pressable style={styles.logoutButton} onPress={handleSignOut}>
                <Text style={styles.fabIcon}>Logout</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#73676757",
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    initialContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#317AAF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    initialText: {
        fontSize: 36,
        color: 'white',
        fontWeight: 'bold',
    },
    userInfo: {
        flexDirection: 'column',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    userEmail: {
        fontSize: 16,
        color: '#555',
    },
    logoutButton: {
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FF3B30',
        borderRadius: 5,
    },
    fabIcon: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    btnStyle: {
        padding: 10,
        backgroundColor: "#7A7",
        marginVertical: 10,
        borderRadius: 12,
        elevation: 2
    }
});
