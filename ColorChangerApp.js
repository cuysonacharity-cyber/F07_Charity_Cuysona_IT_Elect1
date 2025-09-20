import React, { useState } from 'react';
import { View, Button,Text, StyleSheet } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState("white"); // default background color

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
          <Text style={styles.title}>Color Changer App</Text>
      <Button title="White" onPress={() => setBgColor('white')} />
      <View style={{ height: 10 }} />  
      <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
      <View style={{ height: 10 }} /> 
      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // vertical center
    alignItems: 'center',      // horizontal center
    padding: 20,
  },
  title: { fontSize: 24, marginBottom: 20 },
});