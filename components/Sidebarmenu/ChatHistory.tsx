import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Chat {
  id: string;
  name: string;
}

interface ChatHistoryProps {
  chats: Chat[];
  selectedChatId: string;
  onSelectChat: (id: string) => void;
}

export default function ChatHistory({ chats, selectedChatId, onSelectChat }: ChatHistoryProps) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chats</Text>
      {chats.map((chat) => (
        <TouchableOpacity
          key={chat.id}
          onPress={() => onSelectChat(chat.id)}
          style={[
            styles.chatItem,
            chat.id === selectedChatId && styles.chatItemSelected,
          ]}
        >
          <Text
            style={[
              styles.chatName,
              chat.id === selectedChatId && styles.chatNameSelected,
            ]}
          >
            {chat.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
    color: '#000',
  },
  chatItem: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 6,
  },
  chatItemSelected: {
    backgroundColor: '#007AFF',
  },
  chatName: {
    color: '#000',
  },
  chatNameSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
