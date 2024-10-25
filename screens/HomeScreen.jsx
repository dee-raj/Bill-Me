import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome5, MaterialIcons, Feather, AntDesign, Entypo } from '@expo/vector-icons';
import IconItem from '../components/IconItem';
import { FIREBASE_AUTH } from '../firebaseConfig';

const HomeScreen = ({ navigation }) => {
    const Auth = FIREBASE_AUTH;
    const [userInitial, setUserInitial] = useState('');
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        const user = Auth.currentUser;
        if (user) {
            const displayName = user.displayName || user.email;
            const initial = displayName.charAt(0).toUpperCase();

            setUserInitial(initial);
            if (user.photoURL) {
                setProfileImage(user.photoURL);
            }
        }
    }, [Auth]);

    const viewAllHandler = () => {
        console.log('viewAllHandler');
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.header}>
                <View style={styles.initialContainer}>
                    {profileImage ? (
                        <Image source={{ uri: profileImage }} style={styles.profileImage} />
                    ) : (
                        <Text style={styles.initialText}>{userInitial}</Text>
                    )}
                </View>
                <Text style={styles.headerTitle}>Home Page</Text>
                <FontAwesome5
                    name="sliders-h"
                    size={24} color="black"
                    style={styles.headerIcon}
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>

            <View style={styles.amountSummary}>
                <View style={styles.amountSection}>
                    <Text style={styles.amountLabel}>Total Receivable Amount</Text>
                    <Text style={styles.amountValue}>11,409.86</Text>
                </View>
                <View style={styles.amountSection}>
                    <Text style={styles.amountLabel}>Total Purchases</Text>
                    <Text style={styles.amountValue}>1000.88</Text>
                </View>
            </View>

            <View style={styles.iconRow}>
                <IconItem size={20} IconComponent={Entypo} name="open-book" label="E-Way Bill" />
                <IconItem size={20} IconComponent={FontAwesome5} name="wallet" label="Purchases" />
                <IconItem size={20} IconComponent={MaterialIcons} name="dashboard" label="Dashboard" />
                <IconItem size={20} IconComponent={Feather} name="file-text" label="Documents" />
                <IconItem size={20} IconComponent={AntDesign} name="bells" label="Payment Reminders" />
                <IconItem size={20} IconComponent={Entypo} name="mail" label="Email" />
            </View>


            <View style={styles.dateViewAll}>
                <Text style={styles.dateText}>Sep 2024</Text>
                <Pressable style={styles.viewAllBtn} onPress={() => viewAllHandler()}>
                    <Text style={styles.viewAllText}>visit all docs</Text>
                    <AntDesign size={15} name="down" color={"#0000ff"} />
                </Pressable>
            </View>

            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Click on + to get started</Text>
            </View>

            <Pressable style={styles.fab} onPress={() => navigation.navigate('Work')}>
                <Text style={styles.fabIcon}>+</Text>
            </Pressable>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 8,
        marginBottom: 1,
        backgroundColor: '#FEFEFE',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerIcon: {
        marginRight: 10,
    },
    amountSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        padding: 10,
        borderRadius: 14,
        backgroundColor: "#89FD89"
    },
    amountSection: {
        marginBottom: 10,
    },
    amountLabel: {
        fontSize: 12,
        color: '#777',
        fontWeight: '600'
    },
    amountValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: -10
    },
    dateViewAll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    dateText: {
        fontSize: 18,
    },
    viewAllText: {
        fontSize: 16,
        color: '#f0f0f0',
    },
    bottomTextContainer: {
        marginVertical: 20,
    },
    bottomText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#888',
    },
    fab: {
        backgroundColor: '#12991289',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    fabIcon: {
        color: 'white',
        fontSize: 45,
    },
    viewAllBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
        gap: 5,
        backgroundColor: "#888888",
        elevation: 2
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    initialContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#67677780',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    initialText: {
        fontSize: 28,
        color: '#EDEFED',
        fontWeight: 'bold',
    },
});
