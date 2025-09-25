import React from 'react';
import { SafeAreaView } from 'react-native';
import CommentApp from './CommentApp';
import MessengerApp from './MessengerApp';
import ColorChangerApp from './ColorChangerApp';
import CounterApp from './CounterApp';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <CommentApp/>
      <MessengerApp/>
      <ColorChangerApp/>
      <CounterApp/>
    </SafeAreaView>
  );
}