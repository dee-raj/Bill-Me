import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ToastAndroid, Pressable } from 'react-native';
import MyButton from './MyButton';

const RadioButton = ({ selected, onPress, label }) => {
    return (
        <Pressable onPress={onPress} style={styles.radioButtonContainer}>
            <View style={[styles.radioButtonCircle, selected && styles.radioButtonSelected]} />
            <Text style={styles.radioButtonLabel}>{label}</Text>
        </Pressable>
    );
};

const AdditionalDetails = ({ navigation }) => {
    const [isDpiitRegistered, setIsDpiitRegistered] = useState(false);
    const [participateInBid, setParticipateInBid] = useState(false);

    const handleSave = () => {
        ToastAndroid.show("Details Saved!", ToastAndroid.SHORT);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Additional Details</Text>
            <Text style={styles.subTitle}>Please select your preference</Text>

            <Text style={styles.label}>Are you registered with DPIIT as Startup?</Text>
            <View style={styles.radioGroup}>
                <RadioButton
                    selected={isDpiitRegistered}
                    onPress={() => setIsDpiitRegistered(true)}
                    label="Yes"
                />
                <RadioButton
                    selected={!isDpiitRegistered}
                    onPress={() => setIsDpiitRegistered(false)}
                    label="No"
                />
            </View>

            <Text style={styles.label}>Do you have Udyam Registration number certified by MSME?</Text>
            <Text style={styles.udyamText}>Yes</Text>

            <Text style={styles.label}>Do you want to participate in Bid?</Text>
            <View style={styles.radioGroup}>
                <RadioButton
                    selected={participateInBid}
                    onPress={() => setParticipateInBid(true)}
                    label="Yes"
                />
                <RadioButton
                    selected={!participateInBid}
                    onPress={() => setParticipateInBid(false)}
                    label="No"
                />
            </View>

            <View style={styles.buttonContainer}>
                <MyButton handlePress={handleSave} title={"SAVE"} />
            </View>
        </View>
    );
};

export default AdditionalDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 14,
        color: '#555',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    radioButtonCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#555',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonSelected: {
        backgroundColor: '#555',
    },
    radioButtonLabel: {
        fontSize: 16,
    },
    udyamText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 30,
        alignSelf: 'flex-start',
    },
});

