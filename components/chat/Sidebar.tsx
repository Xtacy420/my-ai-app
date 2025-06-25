import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Characters from '../Sidebarmenu/Characters';
import ChatHistory from '../Sidebarmenu/ChatHistory';
import Divider from '../Sidebarmenu/Divider';
import Folders from '../Sidebarmenu/Folders';
import Search from '../Sidebarmenu/Search';

interface Chat {
  id: string;
  name: string;
}

interface SidebarProps {
  chats: Chat[];
  selectedChatId: string;
  onSelectChat: (id: string) => void;
  isDesktop: boolean;
}

export default function Sidebar({
  chats,
  selectedChatId,
  onSelectChat,
  isDesktop,
}: SidebarProps) {
  const router = useRouter();

  return (
    <View
      style={[
        styles.container,
        { width: 300 }, // ensure full width
        !isDesktop && styles.sidebarMobile,
      ]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scroll}
      >
        <Search />
        <Divider />

        <Characters />
        <Divider />

        <Folders />
        <Divider />

        <ChatHistory
          chats={chats}
          selectedChatId={selectedChatId}
          onSelectChat={onSelectChat}
        />
      </ScrollView>

      {/* Home button at the bottom */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => router.push('/profile')}
      >
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>
    </View>
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
