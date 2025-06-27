import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LayoutDebugWrapper from '../LayoutDebugWrapper'; // ✅ Import the wrapper

const categories = ['All', 'Characters', 'Folders', 'Chats'];
const times = ['Anytime', 'Today', 'This Week', 'This Month'];

export default function Search() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTime, setSelectedTime] = useState('Anytime');
  const [filtersVisible, setFiltersVisible] = useState(false);

  return (
    <LayoutDebugWrapper debugId="search" style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#999"
        value={query}
        onChangeText={setQuery}
      />

      {/* Toggle Filters Button */}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setFiltersVisible(!filtersVisible)}
      >
        <Text style={styles.toggleButtonText}>
          {filtersVisible ? 'Hide Filters' : 'Show Filters'}
        </Text>
      </TouchableOpacity>

      {/* Conditionally Rendered Filters */}
      {filtersVisible && (
        <View style={styles.filtersContainer}>
          {/* Category Filter */}
          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Category:</Text>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.filterOption,
                  selectedCategory === cat && styles.activeFilter,
                ]}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text
                  style={[
                    styles.filterText,
                    selectedCategory === cat && styles.activeText,
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Time Filter */}
          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Time:</Text>
            {times.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.filterOption,
                  selectedTime === time && styles.activeFilter,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text
                  style={[
                    styles.filterText,
                    selectedTime === time && styles.activeText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Date Range Filter */}
          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Date Range:</Text>
            <TextInput style={styles.dateInput} placeholder="Start Date" />
            <Text style={{ marginHorizontal: 6 }}>–</Text>
            <TextInput style={styles.dateInput} placeholder="End Date" />
          </View>
        </View>
      )}
    </LayoutDebugWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000',
  },
  toggleButton: {
    marginTop: 10,
    marginBottom: 8,
    alignSelf: 'flex-end',
  },
  toggleButtonText: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 14,
  },
  filtersContainer: {
    marginTop: 8,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterLabel: {
    fontWeight: 'bold',
    marginRight: 8,
    color: '#333',
    minWidth: 75,
  },
  filterOption: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginTop: 6,
  },
  activeFilter: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    color: '#333',
    fontSize: 13,
  },
  activeText: {
    color: '#fff',
    fontWeight: '600',
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: Platform.OS === 'ios' ? 8 : 4,
    width: 100,
    fontSize: 13,
    backgroundColor: '#fff',
    color: '#000',
  },
});
