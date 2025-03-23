import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

const MoodCheckinScreen = () => {
  React.useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = false; // Replace with actual auth check
    if (!isLoggedIn) {
      Alert.alert('Login Required', 'Please login to access this feature');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mood Checkin</Text>
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

export default MoodCheckinScreen;