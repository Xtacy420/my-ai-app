// components/sidebar/BaseSidebar.tsx
import { useRouter } from 'expo-router';
import React, { ReactNode } from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ViewStyle
} from 'react-native';

import LayoutDebugWrapper from '../LayoutDebugWrapper'; // import here

interface BaseSidebarProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function BaseSidebar({ children, style }: BaseSidebarProps) {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <LayoutDebugWrapper
      debugId="sidebar"       // <---- REQUIRED debugId prop
      style={[
        styles.container,
        { width: 300 },
        !isDesktop && styles.sidebarMobile,
        style,
      ]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
        {children}
      </ScrollView>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => router.push('/activity')}
      >
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>
    </LayoutDebugWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    justifyContent: 'space-between',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  sidebarMobile: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  homeButton: {
    height: 48,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
  },
  homeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
