import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './src/routes/AppStack';

export default function App() {
  return (
    <View flex={1}>
      <AppStack />
      <StatusBar style='auto' />
    </View>
  );
}


