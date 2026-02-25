import {FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const FruitList = () => {
    const fruit = [
        { id: 1,name: 'apple' },
        { id: 2, name: "banana" },
        { id: 3, name: 'mango' },
        
    ]
  return (
    <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>FruitList</Text>
          <Text>Display the Fruit List Using the React Native FlatList Method</Text>
         <FlatList data={fruit} keyExtractor={(item)=>item.id} renderItem={({item})=><Text>{item.name}</Text>}/>
    </View>
  )
}

export default FruitList

const styles = StyleSheet.create({})