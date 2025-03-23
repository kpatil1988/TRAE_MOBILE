import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { authService } from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
  Profile: undefined;
  EmailVerification: undefined;
};

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const sessionId = await AsyncStorage.getItem('sessionId');
    setIsLoggedIn(!!sessionId);
  };

  const handleMenuPress = async (option: string) => {
    setMenuVisible(false);
    switch (option) {
      case 'login':
        navigation.navigate('Auth');
        break;
      case 'logout':
        try {
          await authService.logout();
          // Refresh the screen or navigate as needed
        } catch (error) {
          Alert.alert('Logout Failed', 'Please try again');
        }
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Left Section - Menu */}
      <TouchableOpacity style={styles.leftSection}>
        <Icon name="menu" size={24} color="#000" />
      </TouchableOpacity>

      {/* Center Section - Logo and App Name */}
      <View style={styles.centerSection}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>GoldenMinds</Text>
      </View>

      {/* Right Section - User Menu */}
      <View style={styles.rightSection}>
        <TouchableOpacity
          onPress={() => setMenuVisible(true)}
          style={styles.userIcon}
        >
          <Icon name="person" size={24} color="#000" />
        </TouchableOpacity>

        <Modal
          visible={menuVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setMenuVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setMenuVisible(false)}
            activeOpacity={1}
          >
            <View style={styles.menuContainer}>
              {!isLoggedIn ? (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuPress('login')}
                >
                  <Text style={styles.menuText}>Login</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuPress('logout')}
                >
                  <Text style={styles.menuText}>Logout</Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'android' ? 56 : 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 8 : 0,
    elevation: Platform.OS === 'android' ? 4 : 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  leftSection: {
    width: 40,
    height: '100%',
    justifyContent: 'center',
  },
  centerSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  rightSection: {
    width: 40,
    height: '100%',
    justifyContent: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  userIcon: {
    padding: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 60 : 80,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 150,
  },
  menuItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Header;