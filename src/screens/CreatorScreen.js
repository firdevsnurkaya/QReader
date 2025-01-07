import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function CombinedScreen() {
  const [text, setText] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 'web1',
      label: 'Web Link',
      description: 'Creates website link',
      icon: require('../../assets/icons/globe.png'),
    },
    {
      id: 'email1',
      label: 'Email Address',
      description: 'Fields or pick address',
      icon: require('../../assets/icons/envelope.png'),
    },
    {
      id: 'web2',
      label: 'Web Link',
      description: 'Creates website link',
      icon: require('../../assets/icons/calendar-lines.png'),
    },
    {
      id: 'email2',
      label: 'Email Address',
      description: 'Fields or pick address',
      icon: require('../../assets/icons/invite-alt.png'),
    },
  ];

  const generateQRCode = () => {
    if (!text.trim()) {
      Alert.alert('Error', 'Please enter some text');
      return;
    }
    setQrValue(text);
    Alert.alert('Success', 'QR Code generated successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>QR Code Generator</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <View key={option.id} style={styles.optionContainer}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => setSelectedOption(option.id)}
            >
              <View style={styles.textContainer}>
                <Image source={option.icon} style={styles.icon} />
                <Text style={styles.label}>{option.label}</Text>
              </View>
              <View
                style={[
                  styles.circle,
                  selectedOption === option.id && styles.selectedCircle,
                ]}
              />
            </TouchableOpacity>
            <Text style={styles.description}>{option.description}</Text>
            {selectedOption === option.id && (
              <View style={styles.qrSection}>
                <TextInput
                  style={styles.input}
                  placeholder={`Create ${option.label.toLowerCase()}`}
                  value={text}
                  onChangeText={setText}
                  onSubmitEditing={generateQRCode}
                />
                <TouchableOpacity style={styles.button} onPress={generateQRCode}>
                  <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
                {qrValue ? (
                  <View style={styles.qrContainer}>
                    <QRCode value={qrValue} size={200} />
                  </View>
                ) : null}
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionsContainer: {
    width: '100%',
  },
  optionContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
    marginLeft: 10,
  },
  selectedCircle: {
    backgroundColor: '#000',
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
  qrSection: {
    marginTop: 10,
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  qrContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});