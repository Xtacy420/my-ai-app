//components/chat/ChatHeader.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ChatHeaderProps {
  toggleSidebar: () => void;
}

export default function ChatHeader({ toggleSidebar }: ChatHeaderProps) {
  return (
    <View style={styles.chatHeader}>
      <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>
      {/* Chat name removed as requested */}
    </View>
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
