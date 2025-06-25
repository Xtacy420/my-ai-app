//app/chat.tsx
import React, { useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

import ChatArea from '../components/chat/ChatArea';
import Sidebar from '../components/chat/Sidebar';

// Temporary mock data (can be replaced with real chat data)
const mockChats = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
];

export default function ChatScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const [selectedChatId, setSelectedChatId] = useState(mockChats[0].id);
  const [sidebarVisible, setSidebarVisible] = useState(isDesktop);

  const selectedChat = mockChats.find(chat => chat.id === selectedChatId)!;

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.container}>
      {sidebarVisible && (
        <Sidebar
          chats={mockChats}
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
          isDesktop={isDesktop}
        />
      )}
      <ChatArea
        selectedChat={selectedChat}
        sidebarVisible={sidebarVisible}
        toggleSidebar={toggleSidebar}
        isDesktop={isDesktop}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
  },
});
