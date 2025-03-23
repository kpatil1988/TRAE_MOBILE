import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Platform } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
  MoodCheckin: undefined;
  LiquidLove: undefined;
  DailyNurtures: undefined;
  Momentum: undefined;
};

const BottomNav = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigation = (screen: keyof RootStackParamList) => {
    const isLoggedIn = false; // Replace with actual auth check
    if (!isLoggedIn) {
      Alert.alert(
        'Login Required',
        'Please login to access this feature',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Login', onPress: () => navigation.navigate('Auth') }
        ]
      );
      return;
    }
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.tab}
        onPress={() => handleNavigation('MoodCheckin')}
      >
        <Icon name="mood" size={24} color="#000" />
        <Text style={styles.tabText}>Mood{'\n'}Checkin</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.tab}
        onPress={() => handleNavigation('LiquidLove')}
      >
        <Icon name="favorite" size={24} color="#000" />
        <Text style={styles.tabText}>Liquid{'\n'}Love</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.tab}
        onPress={() => handleNavigation('DailyNurtures')}
      >
        <Icon name="spa" size={24} color="#000" />
        <Text style={styles.tabText}>Daily{'\n'}Nurtures</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.tab}
        onPress={() => handleNavigation('Momentum')}
      >
        <Icon name="trending-up" size={24} color="#000" />
        <Text style={styles.tabText}>Momentum</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 70 : 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 999,
    elevation: Platform.OS === 'android' ? 8 : 0,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 11,
    textAlign: 'center',
    color: '#000',
    marginTop: 4,
  },
});

export default BottomNav;