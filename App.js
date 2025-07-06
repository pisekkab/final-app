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
import LessonQuizScreen from './screens/LessonQuizScreen'; // เปลี่ยนชื่อให้ตรงตามไฟล์ LessonQuizScreen.js

// รักษา splash screen ไว้จนกว่าจะพร้อม
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

// 🎨 ธีมสีพาสเทลน่ารัก สไตล์มินิมอล
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F8F9FA',        // สีพื้นหลังทั่วไป (ขาวนวล)
    primary: '#A2D2FF',           // สีฟ้าอ่อนน่ารัก (ปุ่ม, แถบนำทาง)
    card: '#E0F7FA',              // พื้นหลังการ์ด (มิ้นท์อ่อน)
    text: '#4A4E69',              // สีกรมท่าอ่อนๆ สำหรับข้อความหลัก
    border: '#BDE0FE',            // สีฟ้าอ่อนสำหรับเส้นขอบ
    notification: '#FFC7B0',      // สีส้มอ่อนสำหรับแจ้งเตือน
    // เพิ่มสีเพิ่มเติมสำหรับการเน้น หรือ secondary actions
    accent: '#B0F2BC',            // สีเขียวมิ้นท์อ่อนๆ
    danger: '#FFADAD',            // สีแดงอ่อน
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
            backgroundColor: AppTheme.colors.primary, // ใช้สี primary จาก theme
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
          },
          headerTintColor: AppTheme.colors.text, // ใช้สี text จาก theme
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
            fontFamily: 'sans-serif',
          },
          cardStyle: {
            backgroundColor: AppTheme.colors.background, // ใช้สี background จาก theme
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '🏠 หน้าหลัก' }}
        />
        <Stack.Screen
          name="LessonList"
          component={LessonListScreen}
          options={{ title: '📚 บทเรียนทั้งหมด' }}
        />
        <Stack.Screen
          name="LessonDetail"
          component={LessonDetailScreen}
          options={({ route }) => ({
            title: `📝 ${route.params?.title || 'บทเรียน'}`,
          })}
        />
        <Stack.Screen
          name="LessonQuiz" // ใช้ชื่อ LessonQuiz ให้สอดคล้อง
          component={LessonQuizScreen}
          options={({ route }) => ({
            title: `🧠 ${route.params?.lessonTitle || 'แบบทดสอบ'}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;