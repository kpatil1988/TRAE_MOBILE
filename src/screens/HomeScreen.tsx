import React from 'react';
import { View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { StatusBar } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar 
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* Main content will go here */}
        </View>
        <View style={styles.bottomNavContainer}>
          <BottomNav />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 56 : 60,
    marginBottom: Platform.OS === 'android' ? 85 : 105,
    paddingHorizontal: 16,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 20 : 40,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    //borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: Platform.OS === 'android' ? 2 : 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderRadius: 20,
    marginHorizontal: 16,
  },
});

export default HomeScreen;