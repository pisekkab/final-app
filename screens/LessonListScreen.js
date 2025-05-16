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

const LessonListScreen = ({ navigation }) => {
  const lessons = [
    {
      id: '1',
      title: 'บทที่ 1: พื้นฐานการเขียนโปรแกรม',
      description: 'เรียนรู้พื้นฐานและแนวคิดในการเขียนโปรแกรม',
      duration: '30 นาที',
      level: 'เริ่มต้น',
      image: require('../assets/images/lesson1.png'),
    },
    {
      id: '2',
      title: 'บทที่ 2: ตัวแปรและประเภทข้อมูล',
      description: 'ทำความเข้าใจเกี่ยวกับตัวแปรและประเภทข้อมูลต่างๆ',
      duration: '45 นาที',
      level: 'เริ่มต้น',
      image: require('../assets/images/lesson2.png'),
    },
    {
      id: '3',
      title: 'บทที่ 3: โครงสร้างควบคุม',
      description: 'เรียนรู้เกี่ยวกับโครงสร้างควบคุมการทำงานในโปรแกรม',
      duration: '60 นาที',
      level: 'ปานกลาง',
      image: require('../assets/images/lesson3.png'),
    },
    {
      id: '4',
      title: 'บทที่ 4: ฟังก์ชันและโมดูล',
      description: 'เรียนรู้การสร้างและใช้งานฟังก์ชันและโมดูล',
      duration: '60 นาที',
      level: 'ปานกลาง',
      image: require('../assets/images/lesson4.png'),
    },
    {
      id: '5',
      title: 'บทที่ 5: การจัดการข้อมูล',
      description: 'เรียนรู้การจัดการข้อมูลและโครงสร้างข้อมูล',
      duration: '75 นาที',
      level: 'ก้าวหน้า',
      image: require('../assets/images/lesson5.png'),
    },
  ];

  const renderLessonItem = ({ item }) => (
    <TouchableOpacity
      style={styles.lessonCard}
      onPress={() =>
        navigation.navigate('LessonDetail', {
          id: item.id,
          title: item.title,
          lesson: item,
        })
      }
    >
      <Image source={item.image} style={styles.lessonImage} />
      <View style={styles.lessonContent}>
        <Text style={styles.lessonTitle}>{item.title}</Text>
        <Text style={styles.lessonDescription}>{item.description}</Text>
        <View style={styles.lessonMeta}>
          <View style={styles.metaItem}>
            <Text style={styles.metaText}>⏱ {item.duration}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text
              style={[
                styles.metaText,
                styles.levelText,
                item.level === 'เริ่มต้น'
                  ? styles.beginnerLevel
                  : item.level === 'ปานกลาง'
                  ? styles.intermediateLevel
                  : styles.advancedLevel,
              ]}
            >
              {item.level}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>📘 บทเรียนทั้งหมด</Text>
      <Text style={styles.subheaderText}>เลือกบทเรียนที่คุณต้องการเรียนรู้ 🎓</Text>

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
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    padding: 16,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 5,
  },
  subheaderText: {
    fontSize: 16,
    color: '#0277BD',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  lessonCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#90CAF9',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  lessonImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  lessonContent: {
    padding: 16,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 6,
  },
  lessonDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
    lineHeight: 20,
  },
  lessonMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 13,
    color: '#555',
  },
  levelText: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  beginnerLevel: {
    color: '#2E7D32',
    backgroundColor: '#E8F5E9',
  },
  intermediateLevel: {
    color: '#F57C00',
    backgroundColor: '#FFF3E0',
  },
  advancedLevel: {
    color: '#C62828',
    backgroundColor: '#FFEBEE',
  },
});

export default LessonListScreen;
