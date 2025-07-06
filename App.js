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
import QuizScreen from './screens/LessonQuizScreen'; // <--- เพิ่มบรรทัดนี้

// รักษา splash screen ไว้จนกว่าจะพร้อม
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

// 🎨 ธีมน้ำเงินฟ้าน่ารัก
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#E6F2FF',        // ฟ้าอ่อน
    primary: '#4D9DE0',           // น้ำเงินสว่าง
    card: '#B3DAF1',              // พื้นหลังการ์ด
    text: '#2c3e50',              // น้ำเงินเข้ม
    border: '#A0C4FF',
    notification: '#4D9DE0',
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
            backgroundColor: '#4D9DE0', // น้ำเงินหลัก
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
            fontFamily: 'sans-serif',
          },
          cardStyle: {
            backgroundColor: '#E6F2FF',
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
        <Stack.Screen // <--- เพิ่ม Stack.Screen สำหรับ QuizScreen
          name="Quiz"
          component={QuizScreen}
          options={({ route }) => ({
            title: `🧠 ${route.params?.lessonTitle || 'แบบทดสอบ'}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;