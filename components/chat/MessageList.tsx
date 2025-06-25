import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
};

type Props = {
  messages: Message[];
};

export default function MessageList({ messages }: Props) {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View
          style={[
            styles.messageBubble,
            item.sender === 'user' ? styles.userBubble : styles.aiBubble,
          ]}
        >
          <Text
            style={[
              styles.messageText,
              item.sender === 'user' ? styles.userText : styles.aiText,
            ]}
          >
            {item.text}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 12,
    marginVertical: 6,
  },
  userBubble: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
  },
  aiBubble: {
    backgroundColor: '#333',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  userText: {
    color: '#fff',
  },
  aiText: {
    color: '#eee',
  },
});
