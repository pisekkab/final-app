// App.js
import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

// หน้าจอ
import HomeScreen from './screens/HomeScreen';
import LessonListScreen from './screens/LessonListScreen';
import LessonDetailScreen from './screens/LessonDetailScreen';
import QuizScreen from './screens/LessonQuizScreen';

// รักษา splash screen ไว้จนกว่าจะพร้อม
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

// 🎨 ธีมสีใหม่: สวย น่ารัก มินิมอล
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F8F8FF', // Ghost White - พื้นหลังโดยรวม
    primary: '#A0BBE2',    // Periwinkle - สีหลัก
    card: '#E0EFFF',       // Alice Blue - พื้นหลังการ์ด/Element
    text: '#4A4A6A',       // Dark Slate Blue - สีข้อความเข้ม
    border: '#D3DDF4',     // Lavender Blue - สีเส้นขอบ
    notification: '#A0BBE2', // Periwinkle
  },
};

const App = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: AppTheme.colors.primary, // ใช้สี primary
            borderBottomLeftRadius: 25, // เพิ่มความโค้งมน
            borderBottomRightRadius: 25, // เพิ่มความโค้งมน
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 }, // เงาที่ดูนุ่มนวลขึ้น
            shadowOpacity: 0.15, // ลดความทึบของเงา
            shadowRadius: 8,     // รัศมีเงาที่กว้างขึ้น
            elevation: 6,        // เงาสำหรับ Android
          },
          headerTintColor: '#FFFFFF', // ข้อความใน header เป็นสีขาว
          headerTitleStyle: {
            fontWeight: '600', // ปรับความหนาของฟอนต์
            fontSize: 20,
            fontFamily: 'sans-serif',
            letterSpacing: 0.5, // เพิ่มระยะห่างตัวอักษรเล็กน้อย
          },
          cardStyle: {
            backgroundColor: AppTheme.colors.background, // พื้นหลังของหน้าจอ
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '👋 Welcome' }} // เปลี่ยนข้อความให้เป็นมิตรขึ้น
        />
        <Stack.Screen
          name="LessonList"
          component={LessonListScreen}
          options={{ title: '📚 All Lessons' }}
        />
        <Stack.Screen
          name="LessonDetail"
          component={LessonDetailScreen}
          options={({ route }) => ({
            title: `📝 ${route.params?.title || 'Lesson Details'}`,
          })}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={({ route }) => ({
            title: `🧠 ${route.params?.lessonTitle || 'Quiz Time'}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;