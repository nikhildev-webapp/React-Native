import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';

const Form = () => {
    const [name, setName] = useState('');
  return (
    <View>
          <Text>Form</Text>
          <Text>TextInput in React Native</Text>
          <TextInput placeholder='Enter Name' value={name} onChangeText={setName} style={styles.input} />
          <Text>Hello{name}</Text>
          <Link href={'/'}>Home</Link>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius:10
    }
})