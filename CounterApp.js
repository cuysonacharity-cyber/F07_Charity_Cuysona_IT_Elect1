import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterApp() {
  // State hook: count starts at 0
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.counter}>{count}</Text>

      <View style={{ marginVertical: 5 }}>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
      </View>
      <View style={{ marginVertical: 5 }}>
        <Button title="Decrease" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  counter: { fontSize: 40, marginBottom: 20 ,},
});