// components/Footer.tsx

import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function Footer() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            height: 70,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          android: {
            height: 70,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="(footer-tabs)/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(footer-tabs)/activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="clock.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(footer-tabs)/chat"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="plus.message.fill" color="#fff" />,
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="(footer-tabs)/model"
        options={{
          title: 'Model',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cpu.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(footer-tabs)/settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
