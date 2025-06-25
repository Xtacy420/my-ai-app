import { Entypo, Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function DrawerContent({ navigation }: DrawerContentComponentProps) {
  const handleNavigate = (route: string) => {
    navigation.navigate(route);
    navigation.closeDrawer();
  };

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
      </View>

      {/* Primary Navigation */}
      <Text style={styles.sectionTitle}>Navigation</Text>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handleNavigate('(footer-tabs)/chat')}
      >
        <Ionicons name="chatbubble-ellipses-outline" size={20} color="#555" />
        <Text style={styles.navText}>Chat</Text>
      </TouchableOpacity>

      {/* Characters Section */}
      <Text style={styles.sectionTitle}>Characters</Text>
      {['Setsuna', 'Una', 'Loona'].map((name) => (
        <TouchableOpacity
          key={name}
          style={styles.characterItem}
          onPress={() => {
            // Replace this with your intended character screen route
            handleNavigate('(footer-tabs)/chat');
          }}
        >
          <Image
            source={{ uri: `https://api.dicebear.com/6.x/pixel-art/svg?seed=${name}` }}
            style={styles.avatar}
          />
          <Text style={styles.navText}>{name}</Text>
          <Entypo name="dots-three-vertical" size={14} color="#888" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
      ))}

      {/* Folders */}
      <Text style={styles.sectionTitle}>FOLDERS</Text>
      <View style={styles.folder}>
        <Ionicons name="folder-open-outline" size={18} color="#555" />
        <Text style={styles.navText}>MyAi</Text>
        <Entypo name="chevron-down" size={16} color="#555" style={{ marginLeft: 'auto' }} />
      </View>
      <View style={styles.subFolder}>
        <Text style={styles.subText}>• Project Overview: Personal AI Mem...</Text>
        <Text style={styles.subText}>• Inside Out</Text>
      </View>

      {/* Recent Chats */}
      <Text style={styles.sectionTitle}>CHATS</Text>
      <Text style={styles.subText}>• Morning brainstorm</Text>
      <Text style={styles.subText}>• UI thoughts</Text>

      {/* Profile */}
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=xzavier' }}
          style={styles.avatarLarge}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.navText}>Xzavier Mallard</Text>
          <Text style={{ color: '#aaa' }}>PRO • 1,256 Points</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fafafa',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 20,
    height: 36,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 16,
    marginBottom: 4,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    gap: 10,
  },
  navText: {
    fontSize: 15,
    color: '#333',
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
  avatarLarge: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  folder: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    gap: 10,
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
  profile: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
