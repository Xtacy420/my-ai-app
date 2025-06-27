// app/activity.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FooterNav from '../components/Activity/FooterNav';

export default function ActivityScreen() {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Welcome section */}
        <Text style={styles.heading}>Welcome back, Xzavier 👋</Text>
        <Text style={styles.subheading}>Here's what's happening today:</Text>

        {/* Familiarity Tracker */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Familiarity</Text>
          <View style={styles.placeholderBox}>
            <Text style={styles.placeholderText}>[FamiliarityTracker Coming Soon]</Text>
          </View>
        </View>

        {/* Quick Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>🧠 Chatted with "AI Assistant"</Text>
            <Text style={styles.activityTime}>2 hours ago</Text>
          </View>
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>🗂 Created folder “Ideas”</Text>
            <Text style={styles.activityTime}>Yesterday</Text>
          </View>
        </View>

        {/* Calendar/Tasks */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Tasks</Text>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>📝 Review meeting notes</Text>
            <Text style={styles.taskTime}>Today at 5 PM</Text>
          </View>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>📅 Schedule planning session</Text>
            <Text style={styles.taskTime}>Tomorrow</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer navigation */}
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
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  placeholderBox: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  placeholderText: {
    color: '#999',
  },
  activityItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  activityText: {
    fontSize: 14,
    color: '#111',
  },
  activityTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  taskText: {
    fontSize: 14,
    color: '#111',
  },
  taskTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});
