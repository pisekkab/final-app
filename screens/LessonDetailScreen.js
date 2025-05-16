import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const LessonDetailScreen = ({ route, navigation }) => {
  const { lesson } = route.params;

  const lessonContent = {
    '1': {
      sections: [
        {
          title: 'บทนำ',
          content:
            'การเขียนโปรแกรมคือกระบวนการในการสร้างชุดคำสั่งที่คอมพิวเตอร์สามารถเข้าใจและทำงานตามได้ ในบทนี้เราจะเรียนรู้เกี่ยวกับหลักการพื้นฐานของการเขียนโปรแกรม แนวคิด และวิธีการคิดอย่างเป็นระบบ',
        },
        {
          title: 'แนวคิดพื้นฐาน',
          content:
            'แนวคิดพื้นฐานในการเขียนโปรแกรมประกอบด้วยตัวแปร การประมวลผล และการควบคุมการทำงาน ซึ่งเป็นพื้นฐานสำหรับการสร้างโปรแกรมทุกประเภท ไม่ว่าจะเป็นภาษาโปรแกรมใดก็ตาม',
        },
        {
          title: 'เครื่องมือที่ใช้',
          content:
            'เครื่องมือที่ใช้ในการเขียนโปรแกรมมีหลากหลาย เช่น Text Editor, IDE และ Compiler หรือ Interpreter ซึ่งแต่ละเครื่องมือมีข้อดีและข้อจำกัดที่แตกต่างกัน',
        },
      ],
    },
    '2': {
      sections: [
        {
          title: 'ตัวแปรคืออะไร',
          content:
            'ตัวแปรคือชื่อที่ใช้เก็บค่าข้อมูลในหน่วยความจำของคอมพิวเตอร์ ซึ่งเราสามารถเรียกใช้และเปลี่ยนแปลงค่าได้ตลอดการทำงานของโปรแกรม',
        },
        {
          title: 'ประเภทข้อมูล',
          content:
            'ประเภทข้อมูลบอกถึงชนิดของข้อมูลที่เก็บในตัวแปร เช่น ตัวเลขจำนวนเต็ม (Integer), จำนวนจริง (Float), ข้อความ (String), และค่าความจริง (Boolean)',
        },
      ],
    },
    '3': {
      sections: [
        {
          title: 'คำสั่งเงื่อนไข',
          content:
            'คำสั่งเงื่อนไขใช้ในการตัดสินใจว่าจะทำงานส่วนใดของโปรแกรม เช่น if-else, switch-case โดยขึ้นอยู่กับเงื่อนไขที่กำหนด',
        },
      ],
    },
    '4': {
      sections: [
        {
          title: 'ฟังก์ชันคืออะไร',
          content:
            'ฟังก์ชันคือกลุ่มคำสั่งที่รวมกันเพื่อทำงานอย่างใดอย่างหนึ่ง ช่วยให้โค้ดเป็นระเบียบและนำกลับมาใช้ใหม่ได้',
        },
      ],
    },
    '5': {
      sections: [
        {
          title: 'โครงสร้างข้อมูล',
          content:
            'โครงสร้างข้อมูลคือวิธีการจัดเก็บและจัดการข้อมูลในรูปแบบต่างๆ เช่น อาร์เรย์ ลิงค์ลิสต์ สแตก คิว',
        },
      ],
    },
  };

  const currentContent = lessonContent[lesson.id] || {
    sections: [{ title: 'ไม่พบเนื้อหา', content: 'ไม่พบเนื้อหาสำหรับบทเรียนนี้' }],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Image source={lesson.image} style={styles.lessonImage} />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{lesson.title}</Text>

          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>ระยะเวลา:</Text>
              <Text style={styles.metaValue}>{lesson.duration}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>ระดับ:</Text>
              <Text
                style={[
                  styles.metaValue,
                  lesson.level === 'เริ่มต้น'
                    ? styles.beginnerLevel
                    : lesson.level === 'ปานกลาง'
                    ? styles.intermediateLevel
                    : styles.advancedLevel,
                ]}
              >
                {lesson.level}
              </Text>
            </View>
          </View>

          <Text style={styles.description}>{lesson.description}</Text>

          <View style={styles.divider} />

          {currentContent.sections.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionContent}>{section.content}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.testButton}>
            <Text style={styles.testButtonText}>ทำแบบทดสอบ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E0F2FE', // ฟ้าอ่อน
  },
  container: {
    flex: 1,
  },
  lessonImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 12,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
  },
  metaLabel: {
    fontSize: 14,
    color: '#64748B',
    marginRight: 4,
  },
  metaValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  beginnerLevel: {
    color: '#10B981',
  },
  intermediateLevel: {
    color: '#F59E0B',
  },
  advancedLevel: {
    color: '#EF4444',
  },
  description: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#D1D5DB',
    marginVertical: 20,
  },
  section: {
    backgroundColor: '#F0F9FF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#60A5FA',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  testButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    shadowColor: '#1D4ED8',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  testButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LessonDetailScreen;
