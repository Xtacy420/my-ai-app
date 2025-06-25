import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const characters = ['Setsuna', 'Una', 'Loona'];

export default function Characters() {
  return (
    <View>
      <Text style={styles.sectionTitle}>Characters</Text>
      {characters.map((name) => (
        <TouchableOpacity key={name} style={styles.characterItem}>
          <Image
            source={{ uri: `https://api.dicebear.com/6.x/pixel-art/svg?seed=${name}` }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{name}</Text>
          <Entypo name="dots-three-vertical" size={14} color="#888" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  characterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    gap: 10,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 15,
    color: '#333',
  },
});
