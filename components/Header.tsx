import { Ionicons } from '@expo/vector-icons';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { usePathname, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type HeaderProps = {
  title?: string;
};

export default function Header({ title = 'MyAi' }: HeaderProps) {
  const navigation = useNavigation<NavigationProp<any>>();
  const router = useRouter();
  const pathname = usePathname();

  // Debug logs to confirm state
  useEffect(() => {
    console.log('📌 Header mounted');
    console.log('🗺️ Pathname:', pathname);

    const drawerNavigation = navigation.getParent('drawer');
    if (drawerNavigation) {
      console.log('✅ Drawer navigator located');
      console.log('🧭 Drawer state:', drawerNavigation.getState());
    } else {
      console.log('❌ Drawer navigator not found in parent chain');
    }
  }, []);

  const showHamburger = pathname.endsWith('/chat');

  return (
    <View style={styles.container}>
      {/* Left: Hamburger for chat screen only */}
      {showHamburger ? (
        <TouchableOpacity
          onPress={() => {
            const drawerNavigation = navigation.getParent('drawer');
            if (drawerNavigation) {
              drawerNavigation.dispatch(DrawerActions.toggleDrawer());
            } else {
              console.warn('⚠️ Drawer not found, cannot toggle');
            }
          }}
          style={styles.iconButton}
        >
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}

      {/* Center: Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right: Back or fallback */}
      <TouchableOpacity
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            router.push('/(main)/(footer-tabs)/home');
          }
        }}
        style={styles.iconButton}
      >
        <Ionicons
          name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'}
          size={28}
          color="#000"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  iconButton: {
    width: 28,
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
});
