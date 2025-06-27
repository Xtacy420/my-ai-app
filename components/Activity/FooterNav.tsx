// app/components/Activity/FooterNav.tsx
import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useLayoutDebugging } from '../../context/LayoutDebuggingContext';
import LayoutDebugWrapper from './../LayoutDebugWrapper'; // make sure path is correct

type AppRoute = '/chat' | '/activity' | '/calendar' | '/tasks' | '/notes' | '/profile';

const tabs: {
  label?: string;
  route: AppRoute;
  icon?: keyof typeof Ionicons.glyphMap;
  isChat?: boolean;
}[] = [
  { route: '/chat', icon: 'chatbubble-ellipses', isChat: true },
  { label: 'Activity', route: '/activity' },
  { label: 'Calendar', route: '/calendar' },
  { label: 'Tasks', route: '/tasks' },
  { label: 'Notes', route: '/notes' },
  { label: 'Profile', route: '/profile' },
];

const FooterNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { debugging, toggleDebugging } = useLayoutDebugging();

  return (
    <LayoutDebugWrapper debugId="footerNav" style={styles.container}>
      {tabs.map(({ label, route, icon, isChat }) => {
        const isActive = pathname.startsWith(route);

        if (isChat && pathname === '/chat') return null;

        if (isChat) {
          return (
            <TouchableOpacity
              key={route}
              onPress={() => router.push(route)}
              style={[styles.chatButton, isActive && styles.activeChatButton]}
            >
              <Ionicons name={icon} size={28} color={isActive ? '#fff' : '#007AFF'} />
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity key={route} onPress={() => router.push(route)} style={styles.tab}>
            <Text style={[styles.tabText, isActive && styles.activeText]}>{label}</Text>
          </TouchableOpacity>
        );
      })}

      {/* Debug Toggle Button */}
      <TouchableOpacity
        onPress={toggleDebugging}
        style={[styles.debugToggle, debugging && styles.debugToggleActive]}
      >
        <Ionicons name="bug" size={24} color={debugging ? '#fff' : '#007AFF'} />
      </TouchableOpacity>
    </LayoutDebugWrapper>
  );
};

export default FooterNav;

const screenWidth = Dimensions.get('window').width;
const isSmallScreen = screenWidth < 768;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: isSmallScreen ? 10 : 14,
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  tab: {
    paddingHorizontal: 10,
  },
  tabText: {
    fontSize: 14,
    color: '#888',
  },
  activeText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  chatButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: 55,
    height: 55,
    marginTop: -25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#007AFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  activeChatButton: {
    backgroundColor: '#007AFF',
  },

  debugToggle: {
    position: 'absolute',
    right: 16,
    top: -30,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
  },
  debugToggleActive: {
    backgroundColor: '#007AFF',
  },
});
