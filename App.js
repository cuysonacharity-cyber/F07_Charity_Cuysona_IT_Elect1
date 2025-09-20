import React from 'react';
import { SafeAreaView } from 'react-native';
import MidtermAct01 from './MidtermAct01';
import ColorChangerApp from './ColorChangerApp';
import CounterApp from './CounterApp';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MidtermAct01/>
      <ColorChangerApp/>
      <CounterApp/>
    </SafeAreaView>
  );
}