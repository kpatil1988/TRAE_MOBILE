import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface LoginResponse {
  sessionId: string;
  isEmailVerified: boolean;
  isOnboarded: boolean;
  isSubscribed: boolean;
  redirectUrl: string;
}

export const authService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await api.post('/users/login', {
        username: email, 
        password: password 
      });
      console.log('Auth Service Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Auth Service Error:', (error as any).response?.data || (error as Error).message);
      throw error;
    }
  },

  logout: async () => {
    try {
      await AsyncStorage.removeItem('sessionId');
    } catch (error) {
      throw error;
    }
  }
};