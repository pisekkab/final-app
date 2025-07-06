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
import * as SplashScreen from 'expo-splash-screen';

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
    navigation.navigate('LessonList');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require('../assets/images/logo.png')} // Using the provided image as the main visual
            style={styles.container} // ใช้ mainImage style แทน container
            resizeMode="contain"
          />
          <Text style={styles.appName}>
            ✨ FluentUp ✨
          </Text>
          <Text style={styles.subtitle}>
            Foreign Language Department Chiangkhan School

          </Text>
          <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
            <Text style={styles.startButtonText}>Start Learning!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8FF', // Ghost White
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8FF', // Ghost White
  },
  content: {
    alignItems: 'center',
    padding: 20,
    width: '90%', // ปรับความกว้างให้พอดีกับหน้าจอมากขึ้น
  },
  mainImage: {
    width: width * 0.75, // ขนาดใหญ่ขึ้นเล็กน้อย
    height: width * 0.75,
    marginBottom: 30, // เพิ่มระยะห่าง
  },
  appName: {
    fontSize: 28, // ขนาดฟอนต์ใหญ่ขึ้น
    fontWeight: '700', // เน้นตัวหนาขึ้น
    color: '#4A4A6A', // Dark Slate Blue
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#778899', // Light Slate Gray
    textAlign: 'center',
    marginBottom: 40, // เพิ่มระยะห่างจากปุ่ม
    lineHeight: 25, // เพิ่มระยะห่างระหว่างบรรทัด
  },
  startButton: {
    backgroundColor: '#A0BBE2', // Periwinkle
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30, // กลมมนมากขึ้น
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#A0BBE2', // เงาให้เข้ากับสีปุ่ม
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  startButtonText: {
    color: '#FFFFFF', // ข้อความเป็นสีขาว
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 0.8,
  },
});

export default HomeScreen;