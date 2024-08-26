import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, ActivityIndicator, Alert, Dimensions, Share, Button } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import ImageUploader from '../components/ImageUploader';
import PlantInfo from '../components/PlantInfo';
import { identifyPlant, translateText } from '../services/geminiService';

const { width } = Dimensions.get('window');

const HomeScreen = (navigation) => {
  const [plantInfo, setPlantInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isPlant, setIsPlant] = useState(true);

  const titleOpacity = useSharedValue(0);
  const imageUploaderScale = useSharedValue(0.8);

  useEffect(() => {
    // SplashScreen.hide();
    titleOpacity.value = withSpring(1);
    imageUploaderScale.value = withSpring(1);
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity: titleOpacity.value,
    };
  });

  const imageUploaderStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: imageUploaderScale.value }],
    };
  });

  const handleImageUpload = async (imageUri, imageBase64) => {
    setPlantInfo(null);
    setLoading(true);
    setImage(imageUri);
    setError(null);
    try {
      const info = await identifyPlant(imageBase64);
      if (info.error) {
        setError(info.rawResponse);
      } else {
        setPlantInfo(info);
        setIsPlant(info.isPlant);
      }
    } catch (error) {
      console.error('Error identifying image:', error);
      setError('Unable to identify the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTranslate = async () => {
    if (!plantInfo) return;

    setLoading(true);
    try {
      const translatedInfo = {};
      for (const [key, value] of Object.entries(plantInfo)) {
        translatedInfo[key] = await translateText(value, selectedLanguage);
      }
      setPlantInfo(translatedInfo);
    } catch (error) {
      console.error('Translation error:', error);
      Alert.alert('Error', 'Unable to translate. Please try again.');
    } finally {
      setLoading(false);
    }
  }; 

  const handleShare = async () => {
    if (!plantInfo) return;

    try {
      const result = await Share.share({
        message: `🌿Name: ${plantInfo.name}\n🍃Description: ${plantInfo.description}\n🌱Care Instructions: ${plantInfo.careInstructions}\n✨Benefits: ${plantInfo.benefits}`,//careInstructions
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      Alert.alert('Error', 'Unable to share. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        accessible={true}
        accessibilityLabel="Plant Identifier Scroll View"
      >
        <Animated.Text
          style={[styles.title, titleStyle]}
          accessibilityRole="header"
          accessibilityLabel="App Title"
        >
          🌿 Plant Identifier
        </Animated.Text>
        {/* <Animated.View style={imageUploaderStyle}> */}
          <ImageUploader onImageUpload={handleImageUpload} image={image} />
        {/* </Animated.View> */}
        {loading && (
          <View style={styles.loadingContainer} accessibilityLiveRegion="polite">
            <ActivityIndicator size="large" color="#4CAF50" />
            <Text style={styles.loadingText}>Processing...</Text>
          </View>
        )}
        {error && (
          <View
            style={styles.errorContainer}
            accessibilityLiveRegion="assertive"
            accessibilityLabel="Error Message"
          >
            <Text style={styles.errorText}>Error: {error}</Text>
          </View>
        )}
        {plantInfo && (
          <>
            <PlantInfo info={plantInfo} isPlant={isPlant} />
            <View style={styles.shareButtonContainer}>
              {/* <Button title="PlantCareScheduler" onPress={handlePlantCareScheduler} accessibilityLabel="PlantCareScheduler Button" /> */}
              <Button title="Share Results" onPress={handleShare} accessibilityLabel="Share Results Button" />

            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    backgroundColor: '#FFCCCB',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: width - 32,
  },
  errorText: {
    color: '#D8000C',
  },
  shareButtonContainer: {
    marginTop: 20,
    width: width - 32,
  },
});

export default HomeScreen;




