import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Purchases = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Here All your Purchases Will Be Displayed.</Text>
    </View>
  )
}

export default Purchases

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#73676757"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    color: "#4E6AE1"
  },
});
