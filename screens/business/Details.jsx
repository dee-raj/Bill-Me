import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const BusinessDetails = () => {
    const [businessName, setBusinessName] = useState('SHAILMI TECH');
    const [date, setDate] = useState(new Date(2023, 6, 7));

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

    const handleSave = () => {
        ToastAndroid.show("Saved!", ToastAndroid.SHORT);
    };

    const handleProceed = () => {
        ToastAndroid.show("Proceed to next step!!", ToastAndroid.SHORT);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Business Details</Text>
            <Text style={styles.subTitle}>Please ensure correct Business Name on GeM</Text>

            <Text style={styles.label}>Business / Organisation Name *</Text>
            <TextInput
                style={styles.input}
                value={businessName}
                onChangeText={setBusinessName}
                editable={false}
            />

            <Text style={styles.label}>Udyam Number</Text>
            <TextInput
                style={styles.input}
                value={businessName}
                onChangeText={setBusinessName}
                editable={false}
            />

            <Text style={styles.label}>Mobole Number</Text>
            <TextInput
                style={styles.input}
                value={''}
                placeholder="9799787687"
                editable={true}
                inputMode='numeric'
            />
            <Text style={styles.label}>Social Category</Text>
            <TextInput
                style={styles.input}
                value={''}
                placeholder="General"
                editable={true}
                inputMode='text'
            />
            <Text style={styles.label}>Enterprises Type</Text>
            <TextInput
                style={styles.input}
                value={''}
                placeholder="Micro"
                editable={true}
                inputMode='text'
            />
            <Text style={styles.label}>Date Of Incorporation *</Text>
            <TextInput
                style={styles.input}
                value={date.toLocaleDateString()}
                onFocus={showDatePicker}
                placeholder="DD/MM/YYYY"
                editable={false}
            />

            <Text style={styles.note}>Date of Incorporation is editable only once. Kindly ensure you enter correct date.</Text>
            <View style={styles.buttonContainer}>
                <Button title="SAVE" onPress={handleSave} />
                <Button title="PROCEED" onPress={handleProceed} />
            </View>
        </View>
    );
};

export default BusinessDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 20
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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#f0f0f0',
    },
    note: {
        fontSize: 12,
        color: '#555',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
