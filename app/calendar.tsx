// app/calendar.tsx
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import FooterNav from '../components/Activity/FooterNav';

export default function CalendarScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>📅 Calendar</Text>
      </View>

      <View style={styles.content}>
        {/* Sidebar */}
        {isDesktop && (
          <View style={styles.sidebar}>
            <Text style={styles.sidebarItem}>🗂 All Events</Text>
            <Text style={styles.sidebarItem}>🎯 Tasks</Text>
            <Text style={styles.sidebarItem}>📌 Reminders</Text>
          </View>
        )}

        {/* Calendar Main View */}
        <View style={styles.main}>
          <View style={styles.calendarPlaceholder}>
            <Text style={styles.placeholderText}>[Calendar View Coming Soon]</Text>
          </View>
        </View>
      </View>

      <FooterNav />
    </View>
  );
}

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
  },
  sidebar: {
    width: 200,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderColor: '#eee',
    padding: 16,
  },
  sidebarItem: {
    fontSize: 14,
    marginBottom: 12,
    color: '#333',
  },
  main: {
    flex: 1,
    padding: 20,
  },
  calendarPlaceholder: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#aaa',
  },
});
