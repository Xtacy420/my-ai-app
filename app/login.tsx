// app/login.tsx
import { setItem } from '@/utils/storage';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const colorScheme = useColorScheme();

  const handleLogin = async () => {
    if (email && password) {
      await setItem('userToken', 'mock-token');
      router.replace('/home');
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <View style={[styles.container, colorScheme === 'dark' && styles.darkContainer]}>
      <View style={[styles.card, colorScheme === 'dark' && styles.darkCard]}>
        <Text style={[styles.title, colorScheme === 'dark' && styles.darkText]}>
          Welcome Back
        </Text>
        <Text style={[styles.subtitle, colorScheme === 'dark' && styles.darkText]}>
          Log in to your account
        </Text>

        <TextInput
          style={[styles.input, colorScheme === 'dark' && styles.darkInput]}
          placeholder="Email"
          placeholderTextColor={colorScheme === 'dark' ? '#ccc' : '#888'}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password input with toggle */}
        <View
          style={[
            styles.input,
            colorScheme === 'dark' && styles.darkInput,
            styles.passwordContainer,
          ]}
        >
          <TextInput
            style={[styles.passwordInput, colorScheme === 'dark' && styles.darkText]}
            placeholder="Password"
            placeholderTextColor={colorScheme === 'dark' ? '#ccc' : '#888'}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <Pressable onPress={() => setShowPassword(!showPassword)} hitSlop={8}>
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={22}
              color={colorScheme === 'dark' ? '#ccc' : '#555'}
            />
          </Pressable>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={[styles.footerText, colorScheme === 'dark' && styles.darkText]}>
          Don’t have an account?{' '}
          <Text onPress={() => router.push('/signup')} style={styles.link}>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  darkCard: {
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: '#444',
  },
  darkText: {
    color: '#eee',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkInput: {
    backgroundColor: '#2c2c2c',
    borderColor: '#444',
    color: '#eee',
  },
  passwordContainer: {
    paddingRight: 12,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 16,
    color: '#666',
  },
  link: {
    color: '#007AFF',
    fontWeight: '500',
  },
});
