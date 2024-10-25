import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

const ErrorModal = ({ modalVisible, setModalVisible, errorMessage, title }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{title}</Text>
                    <Text style={styles.errorModalMessage}>{errorMessage}</Text>
                    <Pressable
                        style={styles.buttonClose}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Try Again !</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default ErrorModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FE2415',
    },
    errorModalMessage: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
        color: '#AC4732',
    },
    buttonClose: {
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#78FE44',
    },
    textStyle: {
        color: '#666',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
});
