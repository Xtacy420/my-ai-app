import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';

export default function Index() {
  useEffect(() => {
    const checkAuth = async () => {
      // Wait for layout to mount
      requestAnimationFrame(async () => {
        const token =
          Platform.OS === 'web'
            ? localStorage.getItem('userToken')
            : await SecureStore.getItemAsync('userToken');

        // Redirect to /profile if authenticated, otherwise /login
        router.replace(token ? '/profile' : '/login');
      });
    };

    checkAuth();
  }, []);

  // Fallback loading view to avoid flashing blank screen
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
}
