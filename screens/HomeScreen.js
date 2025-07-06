import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen'; // Keep for consistency, though its direct use might change

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    // No longer explicitly hiding splash screen here, App.js manages preventAutoHideAsync
    // If the image itself is the splash screen, this component might load *after* it.
    // If it's the home screen, the splash screen should have already hidden.
    // For now, removing the direct hide here.
    // You might manage SplashScreen.hideAsync() in App.js or a loading component.
  }, []);

  const handleStartPress = () => {
    // Assuming 'Start!' button navigates to the main part of the app, e.g., LessonList
    navigation.navigate('LessonList');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require('../assets/images/image_8555a0.png')} // Using the provided image as the main visual
            style={styles.mainImage}
            resizeMode="contain"
          />
          {/* Based on the image, the text below the FluentUp logo */}
          <Text style={styles.appName}>
            (อีโมจิ) FluentUp (อีโมจิ)
          </Text>
          <Text style={styles.subtitle}>
            Foreign Language Department
          </Text>
          <Text style={styles.subtitle}>
            Chiangkhan School
          </Text>

          <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
            <Text style={styles.startButtonText}>Start!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background as per the image
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
    backgroundColor: '#FFFFFF', // White background
  },
  content: {
    alignItems: 'center', // Center items within this view
    padding: 20,
    width: '80%', // Adjust width as needed
  },
  mainImage: {
    width: Dimensions.get('window').width * 0.7, // Make it responsive
    height: Dimensions.get('window').width * 0.7, // Make it responsive, assuming square
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Black text
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555555', // Grey text
    textAlign: 'center',
    marginBottom: 2,
  },
  startButton: {
    backgroundColor: '#00008B', // Dark blue as seen in the image
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 40, // Space from text
  },
  startButtonText: {
    color: '#ffffff', // White text
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;