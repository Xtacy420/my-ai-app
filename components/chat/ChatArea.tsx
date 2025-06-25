import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

import ChatHeader from '../../components/chat/ChatHeader';
import InputArea from '../../components/chat/InputArea';

interface Chat {
  id: string;
  name: string;
}

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

interface ChatAreaProps {
  selectedChat: Chat;
  sidebarVisible: boolean;
  toggleSidebar: () => void;
  isDesktop: boolean;
}

export default function ChatArea({
  selectedChat,
  sidebarVisible,
  toggleSidebar,
  isDesktop,
}: ChatAreaProps) {
  const [message, setMessage] = useState('');
  const [messagesByChat, setMessagesByChat] = useState<{ [chatId: string]: Message[] }>({});

  // Ensure messages exist for this chat
  useEffect(() => {
    if (!messagesByChat[selectedChat.id]) {
      setMessagesByChat((prev) => ({
        ...prev,
        [selectedChat.id]: [],
      }));
    }
  }, [selectedChat.id]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = { text: message, sender: 'user' };
      setMessagesByChat((prev) => ({
        ...prev,
        [selectedChat.id]: [...(prev[selectedChat.id] || []), newMessage],
      }));
      setMessage('');
    }
  };

  const currentMessages = messagesByChat[selectedChat.id] || [];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[
        styles.chatArea,
        !isDesktop && styles.chatAreaMobile,
        !sidebarVisible && !isDesktop && { flex: 1 },
      ]}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <ChatHeader toggleSidebar={toggleSidebar} />

      <ScrollView style={styles.messageList}>
        {currentMessages.length === 0 ? (
          <Text style={styles.messageText}>Start chatting with {selectedChat.name}</Text>
        ) : (
          currentMessages.map((msg, idx) => (
            <Text
              key={idx}
              style={[
                styles.messageText,
                msg.sender === 'user' ? styles.userMessage : styles.aiMessage,
              ]}
            >
              {msg.sender === 'user' ? 'You: ' : 'AI: '}
              {msg.text}
            </Text>
          ))
        )}
      </ScrollView>

      <InputArea
        message={message}
        setMessage={setMessage}
        onSend={handleSend}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  chatArea: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#000',
    justifyContent: 'flex-start',
  },
  chatAreaMobile: {
    paddingVertical: 0,
  },
  messageList: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  messageText: {
    color: '#ddd',
    marginBottom: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    color: '#0af',
  },
  aiMessage: {
    alignSelf: 'flex-start',
    color: '#0f0',
  },
});
