import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const GreetingCard = ({ocassion,name,quote}) => {
  return (
      <View>
          <Text>Passing a Props In ReactNative</Text>
          <Text>By building A Greeting Card</Text>
          <View style={styles.container}>
              <Text style={{ textAlign: 'center',color:'white' }}>{ocassion}</Text>
              <Text style={{ color:'white'}}>Dear:{name}</Text>
              <Text style={{color:'white'}}>{quote}</Text>
          </View>
          <Link href={'/'}>Home</Link>
    </View>
  )
}

export default GreetingCard

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'red',
        boxShadow: '10px 10px 10px 10px',
        margin: 10,
        borderColor:'none'
    }
    
})