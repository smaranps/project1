import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [random,setRandom]=useState(0)

  
  function generateRandom(){

   const randomNunber = Math.round(Math.random()*10);
   
   setRandom(randomNunber)

  }


  return (
    <View style={styles.container}>
      <Button title="Generate" onPress={generateRandom}></Button>
      
      <Text>{random}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
