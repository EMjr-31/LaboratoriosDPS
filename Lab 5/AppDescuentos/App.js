import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Forms';
import { useState } from 'react';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Form></Form>
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
