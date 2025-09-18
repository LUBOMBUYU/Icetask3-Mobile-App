import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type AgeValidationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AgeValidation'>;

const AgeValidationScreen = () => {
  const [age, setAge] = useState('');
  const navigation = useNavigation<AgeValidationScreenNavigationProp>();

  const handleSubmit = () => {
    const ageNum = parseInt(age);
    if (isNaN(ageNum)) {
      Alert.alert('Invalid Input', 'Please enter a valid number for your age.');
      return;
    }
    if (ageNum < 18) {
      Alert.alert('Access Denied', 'You must be at least 18 years old to use this app.');
      return;
    }
    if (ageNum >= 21) {
      navigation.navigate('MovieSelection');
    } else {
      Alert.alert('Access Denied', 'You must be 21 or older to access movie selection.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Age Validation</Text>
      <Text style={styles.subtitle}>Please enter your age to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
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
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
  input: {
    borderWidth: 2,
    borderColor: '#4a90e2',
    padding: 15,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AgeValidationScreen;
