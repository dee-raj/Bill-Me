import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconItem from '../components/IconItem'
import { Feather } from '@expo/vector-icons'

const WorkFieldTasksScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
                <IconItem IconComponent={Feather} name={'skip-back'} size={28} color={'black'} />
                <Text style={{ fontSize: 16, color: '#DEDEDF' }}>Go Back</Text>
            </Pressable>
        </View>
    )
}

export default WorkFieldTasksScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 34,
        padding: 10,
    },
    backBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#657fea75',
        borderRadius: 5,
        paddingVertical: 10,
        width: 140,
        paddingLeft: 15
    }
})