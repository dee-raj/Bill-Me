import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import PanValidationForm from '../../components/PanValidationForm';

const BusinessPanValidation = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [verified, setVerified] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        setDate(selectedDate || date);
    };

    const showDatePicker = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange: onChangeDate,
            mode: 'date',
            is24Hour: true,
        });
    };

    const handleVerify = () => {
        setVerified(true);
        console.log(date);
        console.log(date);
        console.log(date);
        navigation.goBack();
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Business PAN Validation</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../../assets/pan/new.jpeg')} style={styles.image} />
                <Text style={{ alignSelf: 'center' }}>OR</Text>
                <Image source={require('../../assets/pan/old.jpeg')} style={styles.image} />
                <PanValidationForm showDatePicker={showDatePicker} handleVerify={handleVerify} />
            </ScrollView>
        </View>
    );
};

export default BusinessPanValidation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: 130,
        objectFit: 'cover'
    }
});

