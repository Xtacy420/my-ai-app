// app/chat.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import FooterNav from '../components/Activity/FooterNav';
import ChatArea from '../components/chat/ChatArea';
import BaseSidebar from '../components/sidebar/BaseSidebar';
import Characters from '../components/Sidebarmenu/Characters';
import ChatHistory from '../components/Sidebarmenu/ChatHistory';
import Divider from '../components/Sidebarmenu/Divider';
import Folders from '../components/Sidebarmenu/Folders';
import Search from '../components/Sidebarmenu/Search';

export default function ChatScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const [selectedChatId, setSelectedChatId] = useState<string>('1');
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

  const mockChats = [
    { id: '1', name: 'Xavier' },
    { id: '2', name: 'AI Assistant' },
  ];

  const selectedChat = mockChats.find((chat) => chat.id === selectedChatId)!;

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>💬 Chat</Text>
      </View>

      {/* Main content layout */}
      <View style={styles.content}>
        {/* Sidebar */}
        {sidebarVisible && (
          <BaseSidebar style={styles.sidebar}>
            <Search />
            <Divider />
            <Characters />
            <Divider />
            <Folders />
            <Divider />
            <ChatHistory
              chats={mockChats}
              selectedChatId={selectedChatId}
              onSelectChat={setSelectedChatId}
            />
          </BaseSidebar>
        )}

        {/* Chat area */}
        <View style={styles.main}>
          <ChatArea
            selectedChat={selectedChat}
            sidebarVisible={sidebarVisible}
            toggleSidebar={toggleSidebar}
            isDesktop={isDesktop}
          />
        </View>
      </View>

      {/* FooterNav always visible */}
      <FooterNav />
    </View>
  );
}

const FOOTER_HEIGHT = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  topBar: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  topBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: FOOTER_HEIGHT, // prevent overlap with footer
  },
  main: {
    flex: 1,
  },
  sidebar: {
    paddingBottom: FOOTER_HEIGHT, // prevent overlap with sidebar's bottom button
  },
}); 