import React from 'react';
import  { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <View style={style.container}>
        <Text style={style.title}>Hello GoStack</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  }
})