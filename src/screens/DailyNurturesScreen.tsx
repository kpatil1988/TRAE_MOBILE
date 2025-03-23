import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

const DailyNurturesScreen = () => {
  React.useEffect(() => {
    const isLoggedIn = false; // Replace with actual auth check
    if (!isLoggedIn) {
      Alert.alert('Login Required', 'Please login to access this feature');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Daily Nurtures</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DailyNurturesScreen;