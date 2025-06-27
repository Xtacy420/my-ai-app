// components/chat/ChatHeader.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LayoutDebugWrapper from '../LayoutDebugWrapper';

interface ChatHeaderProps {
  toggleSidebar: () => void;
}

export default function ChatHeader({ toggleSidebar }: ChatHeaderProps) {
  return (
    <LayoutDebugWrapper debugId="header" style={styles.chatHeader}>
      <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>
      {/* Chat name removed as requested */}
    </LayoutDebugWrapper>
  );
}

const styles = StyleSheet.create({
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    marginBottom: 12,
  },
  menuButton: {
    marginRight: 12,
    padding: 8,
  },
  menuButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});
