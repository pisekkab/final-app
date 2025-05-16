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
import * as SplashScreen from 'expo-splash-screen';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    async function hideSplash() {
      await SplashScreen.hideAsync();
    }
    hideSplash();
  }, []);

  const handleLessonPress = () => {
    navigation.navigate('LessonList');
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>📘 โรงเรียนภูกระดึงวิทยาคม</Text>
          <Text style={styles.subtitle}>แอปเพื่อการเรียนรู้ เรียนรู้ได้ทุกที่ทุกเวลา 💡</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeTitle}>
              🏞 เมืองแห่งทะเลภูเขา สุดหนาวในสยาม
            </Text>
            <Text style={styles.welcomeText}>
              แอปพลิเคชันนี้จะช่วยให้คุณเข้าถึงบทเรียนได้ง่ายๆ เพียงปลายนิ้ว
              สามารถเรียนรู้ได้ทุกที่ทุกเวลาตามที่คุณต้องการ
            </Text>

            <TouchableOpacity style={styles.lessonButton} onPress={handleLessonPress}>
              <Text style={styles.lessonButtonText}>🎓 เข้าสู่บทเรียน</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
              <Text style={styles.loginButtonText}>🔐 การล็อกอิน</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>✨ ฟีเจอร์เด่น</Text>
          <View style={styles.featuresContainer}>
            <View style={styles.featureCard}>
              <Image
                source={require('../assets/images/feature1.png')}
                style={styles.featureIcon}
              />
              <Text style={styles.featureTitle}>📘 เนื้อหาที่เข้าใจง่าย</Text>
              <Text style={styles.featureText}>
                ออกแบบมาให้เข้าใจง่ายสำหรับผู้เรียนทุกระดับ
              </Text>
            </View>
            <View style={styles.featureCard}>
              <Image
                source={require('../assets/images/feature2.png')}
                style={styles.featureIcon}
              />
              <Text style={styles.featureTitle}>🧠 แบบทดสอบโต้ตอบ</Text>
              <Text style={styles.featureText}>
                ทดสอบความเข้าใจด้วยแบบทดสอบแบบโต้ตอบ
              </Text>
            </View>
            <View style={styles.featureCard}>
              <Image
                source={require('../assets/images/feature3.png')}
                style={styles.featureIcon}
              />
              <Text style={styles.featureTitle}>📈 ติดตามความก้าวหน้า</Text>
              <Text style={styles.featureText}>
                ดูความก้าวหน้าและผลการเรียนของคุณได้ตลอดเวลา
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E6F2FF', // ฟ้าอ่อน
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4D9DE0', // น้ำเงินสดใส
    padding: 24,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#dceeff',
  },
  contentContainer: {
    padding: 16,
  },
  welcomeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginVertical: 16,
    elevation: 5,
    shadowColor: '#4D9DE0',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#256D85',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: '#444',
    lineHeight: 26,
    marginBottom: 20,
  },
  lessonButton: {
    backgroundColor: '#4D9DE0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  lessonButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#B3DAF1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#256D85',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#256D85',
    marginTop: 10,
    marginBottom: 15,
  },
  featuresContainer: {
    flexDirection: 'column',
    gap: 16,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#B3DAF1',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    alignItems: 'center',
  },
  featureIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#256D85',
    marginBottom: 6,
    textAlign: 'center',
  },
  featureText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default HomeScreen;
