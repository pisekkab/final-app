// screens/HomeScreen.js
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useTheme } from '@react-navigation/native'; // นำเข้า useTheme
import * as SplashScreen from 'expo-splash-screen';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme(); // ดึงสีจาก theme

  useEffect(() => {
    async function hideSplash() {
      await SplashScreen.hideAsync();
    }
    hideSplash();
  }, []);

  const handleLessonPress = () => {
    navigation.navigate('LessonList');
  };

  // อาจจะเพิ่มปุ่ม Login/Profile หากมีระบบผู้ใช้
  const handleLoginPress = () => {
    // navigation.navigate('Login'); // หรือหน้าโปรไฟล์
    alert('ฟีเจอร์ Login กำลังพัฒนา :)');
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/logo.png')} // ตรวจสอบเส้นทางของ logo ของคุณ
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={[styles.appName, { color: colors.text }]}>📘 ภาษาอังกฤษ</Text>
          <Text style={[styles.subtitle, { color: colors.text }]}>เรียนรู้ได้ทุกที่ทุกเวลา 💡</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={[styles.welcomeCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.welcomeTitle, { color: colors.text }]}>
              👋 ยินดีต้อนรับสู่แอปเรียนรู้ภาษาอังกฤษ!
            </Text>
            <Text style={[styles.welcomeText, { color: colors.text }]}>
              แอปพลิเคชันนี้จะช่วยให้คุณเข้าถึงบทเรียนได้ง่ายๆ เพียงปลายนิ้วสัมผัส {'\n'}เริ่มเรียนรู้ได้เลย!
            </Text>
            <TouchableOpacity
              style={[styles.lessonButton, { backgroundColor: colors.primary }]}
              onPress={handleLessonPress}
            >
              <Text style={styles.lessonButtonText}>🚀 เริ่มบทเรียน</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.sectionTitle, { color: colors.text }]}>✨ คุณสมบัติเด่น</Text>
          <View style={styles.featuresContainer}>
            <View style={[styles.featureCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Text style={[styles.featureIcon, { color: colors.accent }]}>📖</Text>
              <Text style={[styles.featureTitle, { color: colors.text }]}>บทเรียนหลากหลาย</Text>
              <Text style={[styles.featureDescription, { color: colors.text }]}>ครอบคลุมหัวข้อที่จำเป็นสำหรับการสนทนาในชีวิตประจำวัน</Text>
            </View>
            <View style={[styles.featureCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Text style={[styles.featureIcon, { color: colors.accent }]}>🧠</Text>
              <Text style={[styles.featureTitle, { color: colors.text }]}>แบบทดสอบสนุกๆ</Text>
              <Text style={[styles.featureDescription, { color: colors.text }]}>ทบทวนความรู้และทดสอบความเข้าใจหลังจากเรียน</Text>
            </View>
            <View style={[styles.featureCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Text style={[styles.featureIcon, { color: colors.accent }]}>📱</Text>
              <Text style={[styles.featureTitle, { color: colors.text }]}>เรียนรู้ทุกที่ทุกเวลา</Text>
              <Text style={[styles.featureDescription, { color: colors.text }]}>ออกแบบมาเพื่อการเรียนรู้บนมือถือโดยเฉพาะ</Text>
            </View>
          </View>

          {/* ปุ่มเสริมอื่นๆ เช่น เข้าสู่ระบบ */}
          <TouchableOpacity
            style={[styles.loginButton, { backgroundColor: colors.border }]}
            onPress={handleLoginPress}
          >
            <Text style={[styles.loginButtonText, { color: colors.text }]}>👤 เข้าสู่ระบบ / ลงทะเบียน</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    width: '90%',
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 10,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'sans-serif-light',
    textAlign: 'center',
    lineHeight: 22,
  },
  contentContainer: {
    width: '90%',
    alignItems: 'center',
  },
  welcomeCard: {
    width: '100%',
    borderRadius: 20,
    padding: 25,
    marginBottom: 30,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  lessonButton: {
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lessonButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 30,
    gap: 15, // ใช้ gap แทน marginBottom ในแต่ละ card
  },
  featureCard: {
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  loginButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;