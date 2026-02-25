import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
          <Text>About Page</Text>
          <Link href='/'>GoBack</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:50,
    }})