import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ImageUploader = ({ onImageUpload, image }) => {
  const handleImageSelection = (response) => {
    if (response.didCancel) {
      return;
    }
    if (response.error) {
      console.error('ImagePicker Error: ', response.error);
      return;
    }
    if (response.assets && response.assets[0]) {
      onImageUpload(response.assets[0].uri, response.assets[0].base64);
    }
  };

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', includeBase64: true }, handleImageSelection);
  };

  const takePhoto = () => {
    launchCamera({ mediaType: 'photo', includeBase64: true }, handleImageSelection);
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderEmoji}>🖼️</Text>
          <Text style={styles.placeholderText}>{"No image selected\n\n(Note:- Select lanuage and plant image to get results)"}</Text>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>📁 Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.buttonText}>📷 Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholderContainer: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  placeholderEmoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  placeholderText: {
    color: '#888',
    fontSize: 14,
    textAlign:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default ImageUploader;