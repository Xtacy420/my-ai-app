// app/tasks.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FooterNav from '../components/Activity/FooterNav';

export default function TasksScreen() {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>✅ Tasks</Text>
        <Text style={styles.placeholder}>
          Plan your tasks, track progress, and integrate to-dos with your chat assistant and notes.
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
    paddingBottom: 100,
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
