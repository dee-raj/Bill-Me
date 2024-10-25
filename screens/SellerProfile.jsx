import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image, ToastAndroid } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { FontAwesome } from '@expo/vector-icons';

const SellerProfile = ({ navigation }) => {
    const [bgColors, setBgColors] = useState({});
    const [geMSellerId, setGeMSellerId] = useState('27-9076-45654');
    const Auth = FIREBASE_AUTH;
    const [userInitial, setUserInitial] = useState('');
    const [userName, setUserName] = useState('');
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        const user = Auth.currentUser;
        if (user) {
            const displayName = user.displayName || user.email;
            const initial = displayName.charAt(0).toUpperCase();
            let firstName = user.email.split('@')[0];
            let lastName = user.email.substring(user.email.indexOf('@') + 1, user.email.indexOf('.'));

            setUserInitial(initial);
            setUserName(firstName + " " + lastName);

            if (user.photoURL) {
                setProfileImage(user.photoURL);
            }
        }
    }, [Auth]);

    const profileSections = [
        { name: 'Business PAN Validation', status: 'completed' },
        { name: 'Business Details', status: 'completed' },
        { name: 'Additional Details', status: 'in-progress' },
        { name: 'Office Locations', status: 'not-completed' },
        { name: 'Bank Accounts', status: 'not-completed' },
        { name: 'e-Invoicing', status: 'in-progress' },
        { name: 'Beneficial Ownership Compliance', status: 'not-completed' },
    ];

    const completionPercentage = 76;

    const CircularProgress = ({ percentage }) => {
        const radius = 28;
        const strokeWidth = 5;
        const circumference = 2 * Math.PI * radius;
        const progress = (percentage / 100) * circumference;

        return (
            <Svg width={80} height={80}>
                <Circle
                    cx="45"
                    cy="40"
                    r={radius}
                    stroke="#EFEFEF"
                    strokeWidth={strokeWidth}
                    fill={completionPercentage == 100 ? '#98DB89' : 'none'}
                />
                <Circle
                    cx="45"
                    cy="40"
                    r={radius}
                    stroke={completionPercentage == 100 ? "green" : "#3498db"}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - progress}
                    fill="none"
                />
            </Svg>
        );
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return '#4CAF50';
            case 'in-progress':
                return '#FFEB3B';
            case 'not-completed':
                return '#A52A2A';
            default:
                return '#e6e6e6';
        }
    };

    const businessProfileBtnHandler = ({ name }) => {
        console.log(`Going to ${name}`);
        navigation.navigate('Business', {
            screen: name,
        });
    };
    const handlePressIn = (item) => {
        setBgColors((prevColors) => ({
            ...prevColors,
            [item.name]: '#dcdcdc',
        }));
    };

    const handlePressOut = (item) => {
        setBgColors((prevColors) => ({
            ...prevColors,
            [item.name]: '#66989010',
        }));
    };
    const redirectToYoutube = () => {
        console.log('Redirecting to YouTube...');
    };

    const handleProfilePress = () => {
        ToastAndroid.show("You can edit you profile here.", ToastAndroid.SHORT);
        navigation.navigate('UserDetails');
    };

    const renderItem = ({ item }) => (
        <Pressable
            style={[
                styles.listItem,
                { backgroundColor: bgColors[item.name] || '#66989010' },
            ]}
            onPress={() => businessProfileBtnHandler(item)}
            onPressIn={() => handlePressIn(item)}
            onPressOut={() => handlePressOut(item)}
        >
            <View style={styles.progressBarContainer}>
                <View
                    style={[styles.progressBar, { backgroundColor: getStatusColor(item.status) }]}
                />
            </View>
            <Text style={styles.listItemText}>{item.name}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Pressable style={styles.initialContainer} onPress={handleProfilePress}>
                    {profileImage ? (
                        <Image source={{ uri: profileImage }} style={styles.profileImage} />
                    ) : (
                        <Text style={styles.initialText}>{userInitial}</Text>
                    )}
                </Pressable>
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>My Profile</Text>
                    <Pressable style={styles.helpBtn} onPress={() => redirectToYoutube()}>
                        <Text style={styles.helpText}>Need help with Profile completion?</Text>
                        <FontAwesome name="youtube-play" size={20} color="red" style={styles.icon} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.header}>
                <View style={styles.businessName}>
                    <Text style={styles.sellerName}>{userName}</Text>
                    <Text style={styles.sellerId}>GST ID:
                        <Text style={{ fontWeight: '900', color: "#564654" }}> {geMSellerId} </Text>
                    </Text>
                </View>
                <View style={styles.progressContainer}>
                    <CircularProgress percentage={completionPercentage} />
                    <Text style={styles.percentageText}>{completionPercentage}%</Text>
                </View>
            </View>

            <View style={styles.profileSections}>
                <Text style={styles.sectionHeader}>Business Profile</Text>
                <FlatList
                    data={profileSections}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </View>
    );
};

export default SellerProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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
    userInfo: {
        flexDirection: 'column',
        paddingTop: 5
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    helpBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: '#F1F1F1',
        borderRadius: 5,
        marginTop: 5,
    },
    helpText: {
        fontSize: 12,
        color: '#333',
        marginRight: 8,
    },
    icon: {
        marginLeft: 5,
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: "#88888835",
        marginBottom: 5,
        borderRadius: 5,
    },
    businessName: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    sellerName: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    sellerId: {
        fontSize: 14,
        color: '#888',
    },
    progressContainer: {
        alignItems: 'center',
    },
    percentageText: {
        position: 'absolute',
        top: '33%',
        left: '30%',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3498db',
    },
    profileSections: {
        flex: 1,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#6A93E1"
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
        marginTop: 8,
        borderRadius: 10,
        paddingLeft: 10,
    },
    progressBarContainer: {
        width: 5,
        marginRight: 10,
    },
    progressBar: {
        width: 5,
        height: 30,
        borderRadius: 2,
    },
    listItemText: {
        fontSize: 16,
    },
});
