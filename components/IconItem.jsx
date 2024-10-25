import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IconItem = ({ IconComponent, name, label, size }) => (
    <View style={styles.iconItem}>
        <IconComponent name={name} size={size ?? 24} color={"#E3A25C"} />
        {label ? <Text style={styles.iconLabel}>{label}</Text> : null}
    </View>
);

export default IconItem;

const styles = StyleSheet.create({
    iconItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    iconLabel: {
        marginTop: 5,
        fontSize: 10,
        color: '#333',
        textAlign: 'center'
    },
});
