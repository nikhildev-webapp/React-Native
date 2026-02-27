import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }
    const reset = () => {
        setCount(0)
    }
  return (
    <View>
          <Text>counter</Text>
          <Text>Managing State using the UseState in React Native</Text>
          <Text>Count:{count}</Text>
          <Text>Click the Button Below to Change Count Value</Text>
          <Button title='Increment' onPress={increment}/>
          <Button title='Decrement' onPress={decrement}/>
          <Button title='Reset' onPress={reset} />
          <Link href={'/'}>Home</Link>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    Btn: {
        margin: 10,
        borderWidth:1
    }
})