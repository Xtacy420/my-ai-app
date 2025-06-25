import { Entypo, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Folders() {
  return (
    <View>
      <Text style={styles.sectionTitle}>Folders</Text>
      <View style={styles.folder}>
        <Ionicons name="folder-open-outline" size={18} color="#555" />
        <Text style={styles.folderName}>MyAi</Text>
        <Entypo name="chevron-down" size={16} color="#555" style={{ marginLeft: 'auto' }} />
      </View>
      <View style={styles.subFolder}>
        <Text style={styles.subText}>• Project Overview: Personal AI Mem...</Text>
        <Text style={styles.subText}>• Inside Out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 16,
    marginBottom: 4,
  },
  folder: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    gap: 10,
  },
  folderName: {
    fontSize: 15,
    color: '#333',
  },
  subFolder: {
    paddingLeft: 30,
    paddingTop: 4,
  },
  subText: {
    fontSize: 13,
    color: '#666',
    paddingVertical: 2,
  },
});
