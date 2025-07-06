// screens/LessonListScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useTheme } from '@react-navigation/native'; // นำเข้า useTheme

const LessonListScreen = ({ navigation }) => {
  const { colors } = useTheme(); // ดึงสีจาก theme

  const lessons = [
    {
      id: '1',
      title: 'New Friends',
      description: 'เรียนรู้ประโยคและคำศัพท์ง่ายๆ ในการทำความรู้จักเพื่อนใหม่',
      image: require('../assets/images/new_friends.png'), // สมมติว่ามีภาพที่น่ารักสำหรับบทนี้
    },
    {
      id: '2',
      title: 'At School',
      description: 'คำศัพท์และประโยคที่ใช้บ่อยในโรงเรียนและห้องเรียน',
      image: require('../assets/images/at_school.png'),
    },
    {
      id: '3',
      title: 'At a Restaurant',
      description: 'สั่งอาหาร ถามราคา และสนทนาในร้านอาหาร',
      image: require('../assets/images/restaurant.png'),
    },
    {
      id: '4',
      title: 'Shopping',
      description: 'การซื้อของ ถามราคา และการต่อรอง',
      image: require('../assets/images/shopping.png'),
    },
    {
      id: '5',
      title: 'Job Interview',
      description: 'เตรียมพร้อมสำหรับการสัมภาษณ์งานด้วยประโยคสำคัญ',
      image: require('../assets/images/job_interview.png'),
    },
    // เพิ่มบทเรียนอื่นๆ ที่มี LessonQuiz ได้ที่นี่
  ];

  const renderLessonItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.lessonCard, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={() =>
        navigation.navigate('LessonDetail', {
          lesson: item, // ส่ง object lesson ทั้งหมดไป
          title: item.title,
          lessonId: item.id, // ส่ง lessonId ไปด้วย
        })
      }
    >
      <Image source={item.image} style={styles.lessonImage} />
      <View style={styles.lessonContent}>
        <Text style={[styles.lessonTitle, { color: colors.text }]}>{item.title}</Text>
        <Text style={[styles.lessonDescription, { color: colors.text }]}>{item.description}</Text>
        <TouchableOpacity
          style={[styles.quizButton, { backgroundColor: colors.accent }]}
          onPress={() => navigation.navigate('LessonQuiz', { lessonId: item.id, lessonTitle: item.title })}
        >
          <Text style={styles.quizButtonText}>ทำแบบทดสอบ 🧠</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <FlatList
        data={lessons}
        renderItem={renderLessonItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listContainer: {
    padding: 15,
    paddingTop: 10,
  },
  lessonCard: {
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  lessonImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  lessonContent: {
    padding: 15,
  },
  lessonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  lessonDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  quizButton: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  quizButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default LessonListScreen;