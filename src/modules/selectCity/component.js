import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default (props) => (
  <View style={styles.container}>
    <Text>Hola</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center'
  }
})