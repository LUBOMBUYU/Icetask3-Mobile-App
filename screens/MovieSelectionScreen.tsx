import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Forrest Gump"
];

const MovieSelectionScreen = () => {
  const [selection, setSelection] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  const handleSelect = () => {
    const num = parseInt(selection);
    if (isNaN(num) || num < 1 || num > 5) {
      Alert.alert('Invalid Selection', 'Please enter a number between 1 and 5.');
      return;
    }
    setSelectedMovie(movies[num - 1]);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Select a Movie</Text>
        <Text style={styles.subtitle}>Choose your favorite from the list below</Text>
        <View style={styles.movieList}>
          {movies.map((movie, index) => (
            <Text key={index} style={styles.movie}>{index + 1}. {movie}</Text>
          ))}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter number (1-5)"
          keyboardType="numeric"
          value={selection}
          onChangeText={setSelection}
        />
        <TouchableOpacity style={styles.button} onPress={handleSelect}>
          <Text style={styles.buttonText}>Select Movie</Text>
        </TouchableOpacity>
        {selectedMovie ? (
          <View style={styles.selectedContainer}>
            <Text style={styles.selectedLabel}>You selected:</Text>
            <Text style={styles.selectedMovie}>{selectedMovie}</Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fffacd',
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  movieList: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  movie: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ff6347',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedContainer: {
    alignItems: 'center',
    backgroundColor: '#d4edda',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c3e6cb',
  },
  selectedLabel: {
    fontSize: 16,
    color: '#155724',
    marginBottom: 5,
  },
  selectedMovie: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#155724',
  },
});

export default MovieSelectionScreen;
