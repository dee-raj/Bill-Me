import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import MyButton from '../screens/business/MyButton';

const PanValidationForm = ({ showDatePicker, handleVerify }) => {
    const [orgType, setOrgType] = useState('Proprietorship');
    const [verified, setVerified] = useState(false);

    const validationSchema = Yup.object().shape({
        orgType: Yup.string().required("Organization Type is required."),
        panName: Yup.string().required("Name is required as in PAN."),
        panNumber: Yup.string().required("PAN Number is required."),
        date: Yup.date().required("Date as in PAN is required.")
    });
    const ProceedSaveHandler = () => {

    }

    const RequireStart = () => <Text style={styles.requireStar}>*</Text>;

    return (
        <Formik
            initialValues={{ orgType: '', panName: '', date: '', panNumber: '' }}
            validationSchema={validationSchema}
            onSubmit={ProceedSaveHandler}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <View style={styles.container}>
                    <Text style={styles.label}>Business / Organisation Type <RequireStart /></Text>
                    <Picker
                        selectedValue={values.orgType}
                        style={styles.picker}
                        onValueChange={(itemValue) => setOrgType(itemValue)}
                    >
                        <Picker.Item label="Proprietorship" value="Proprietorship" />
                        <Picker.Item label="Partnership ( LLP )" value="Partnership" />
                        <Picker.Item label="Private limited ( Pvt. Ltd. )" value="PrivateLimited" />
                    </Picker>
                    {errors.orgType && touched.orgType && <Text style={styles.errorText}>{errors.orgType}</Text>}

                    <Text style={styles.label}>Business PAN <RequireStart /></Text>
                    <TextInput
                        style={styles.input}
                        value={values.panNumber}
                        onChangeText={handleChange('panNumber')}
                        placeholder="Enter Business PAN"
                        onBlur={handleBlur('panNumber')}
                        inputMode='text'
                    />
                    {errors.panNumber && touched.panNumber && <Text style={styles.errorText}>{errors.panNumber}</Text>}

                    <Text style={styles.label}>Name (As in PAN) <RequireStart /></Text>
                    <TextInput
                        style={styles.input}
                        value={values.panName}
                        onChangeText={handleChange('panName')}
                        onBlur={handleBlur('panName')}
                        placeholder="Enter Name"
                        placeholderTextColor="#396C59"
                    />
                    {errors.panName && touched.panName && <Text style={styles.errorText}>{errors.panName}</Text>}

                    <Text style={styles.label}>Date (as in PAN) <RequireStart /></Text>
                    <TextInput
                        style={styles.input}
                        value={values.date}
                        placeholder="DD/MM/YYYY"
                        onFocus={showDatePicker}
                        onBlur={handleBlur('date')}
                        onChangeText={handleChange('date')}
                    />
                    {errors.date && touched.date && <Text style={styles.errorText}>{errors.date}</Text>}

                    {verified && (
                        <Text style={styles.successText}>Business PAN details verified successfully</Text>
                    )}

                    <View style={styles.buttonContainer}>
                        <MyButton handlePress={handleVerify} title={"SAVE"} bgColor={"#00AB11"} />
                        <MyButton handlePress={handleSubmit} />
                    </View>
                </View>
            )}
        </Formik>
    );
};

export default PanValidationForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        height: 45,
        borderColor: '#6c757d',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        backgroundColor: '#f8f9fa',
        marginBottom: 10
    },
    picker: {
        height: 50,
        width: '100%',
        borderColor: '#6c757d',
        borderWidth: 1,
        marginBottom: 8,
        backgroundColor: "#44433330",
        borderRadius: 5
    },
    successText: {
        color: 'green',
        fontSize: 16,
        marginVertical: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        fontSize: 14,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 20
    },
    requireStar: {
        color: 'red',
    },
});
