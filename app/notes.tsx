// app/notes.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FooterNav from '../components/Activity/FooterNav';

export default function NotesScreen() {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>📝 Notes</Text>
        <Text style={styles.placeholder}>
          This is where you’ll manage your notes. Create quick ideas, organize thoughts, and link them to chats in the future.
        </Text>
      </ScrollView>

      <FooterNav />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  container: {
    padding: 20,
    paddingBottom: 100, // leave space for footer
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  placeholder: {
    fontSize: 16,
    color: '#666',
  },
});
