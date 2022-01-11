import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, Platform, StatusBar } from 'react-native';

/* SafeAreaView keeps the app inside te correct boundaries. Only for IOS version 11*/
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'red',
    flex: 0.1,
  },
  contentContainer: {
    backgroundColor: 'blue',
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
