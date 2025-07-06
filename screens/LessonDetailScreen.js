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

  // ข้อมูลเนื้อหาบทเรียนสำหรับแต่ละ ID
  // คุณสามารถเพิ่มข้อมูลสำหรับบทเรียนอื่นๆ ได้ที่นี่
  const lessonContent = {
    '1': { // สำหรับ lessonId: '1' (New Friends)
      mainTitle: 'New Friends', // ชื่อหลักสำหรับหน้าจอ
      sections: [
        {
          type: 'header',
          icon: require('../assets/images/new_friends.png'), // Placeholder for conversation icon. **คุณต้องมีไฟล์ภาพนี้ใน assets/images**
          title: 'Conversation Lesson: New Friends',
        },
        {
          type: 'vocabulary',
          title: 'Part 1: Vocabulary',
          data: [
            { english: 'friend', thai: 'เพื่อน' },
            { english: 'name', thai: 'ชื่อ' },
            { english: 'age', thai: 'อายุ' },
            { english: 'hobby', thai: 'งานอดิเรก' },
            { english: 'favorite', thai: 'ชื่นชอบ' },
            { english: 'country', thai: 'ประเทศ' },
            { english: 'nice to meet you', thai: 'ยินดีที่ได้รู้จัก' },
            { english: 'how old', thai: 'อายุเท่าไร' },
            { english: 'free time', thai: 'เวลาว่าง' },
            { english: 'from', thai: 'มาจาก' },
          ],
        },
        {
          type: 'conversation',
          title: 'Part 2: Conversation Practice',
          dialogues: [
            { speaker: 'A', text: "Hi! I'm Anna. What's your name?" },
            { speaker: 'B', text: "I'm Ben. Nice to meet you!" },
            { speaker: 'A', text: "Nice to meet you too. How old are you?" },
            { speaker: 'B', text: "I'm 13. And you?" },
            { speaker: 'A', text: "I'm 14. Where are you from?" },
            { speaker: 'B', text: "I'm from Thailand. You?" },
            { speaker: 'A', text: "I'm from Singapore." },
            { speaker: 'B', text: "What do you like to do?" },
            { speaker: 'A', text: "I like playing badminton. What about you?" },
            { speaker: 'B', text: "Cool! I like drawing." },
          ],
        },
      ],
    },
    // ตัวอย่างสำหรับบทเรียนอื่นๆ ที่ไม่ได้เป็น "New Friends"
    // คุณสามารถปรับแต่งเนื้อหาเหล่านี้ให้เข้ากับแต่ละบทเรียนได้
    '2': {
      mainTitle: 'At School',
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
      mainTitle: 'At a Restaurant',
      sections: [
        {
          title: 'คำสั่งเงื่อนไข',
          content:
            'คำสั่งเงื่อนไขใช้ในการตัดสินใจว่าจะทำงานส่วนใดของโปรแกรม เช่น if-else, switch-case โดยขึ้นอยู่กับเงื่อนไขที่กำหนด',
        },
      ],
    },
    '4': {
      mainTitle: 'Shopping',
      sections: [
        {
          title: 'ฟังก์ชันคืออะไร',
          content:
            'ฟังก์ชันคือกลุ่มคำสั่งที่รวมกันเพื่อทำงานอย่างใดอย่างหนึ่ง ช่วยให้โค้ดเป็นระเบียบและนำกลับมาใช้ใหม่ได้',
        },
      ],
    },
    '5': {
      mainTitle: 'Job Interview',
      sections: [
        {
          title: 'โครงสร้างข้อมูล',
          content:
            'โครงสร้างข้อมูลคือวิธีการจัดเก็บและจัดการข้อมูลในรูปแบบต่างๆ เช่น อาร์เรย์ ลิงค์ลิสต์ สแตก คิว',
        },
      ],
    },
  };

  // ดึงเนื้อหาตาม ID ของบทเรียนที่ส่งมา
  const currentLessonContent = lessonContent[lesson.id] || { sections: [] };
  const displayTitle = currentLessonContent.mainTitle || lesson.title; // ใช้ mainTitle ถ้ามี มิฉะนั้นใช้ lesson.title

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* ส่วนหัวด้านบนสุดของหน้าจอ (New Friends) */}
        <View style={styles.topHeader}>
          <Image
            source={lesson.image} // ใช้ไอคอนที่ส่งมาจาก LessonListScreen
            style={styles.topHeaderIcon}
          />
          <Text style={styles.topHeaderText}>{displayTitle}</Text>
        </View>

        <View style={styles.contentContainer}>
          {currentLessonContent.sections.map((section, index) => {
            if (section.type === 'header') {
              return (
                <View key={index} style={styles.lessonHeader}>
                  <Image source={section.icon} style={styles.lessonHeaderIcon} />
                  <Text style={styles.lessonHeaderText}>{section.title}</Text>
                </View>
              );
            } else if (section.type === 'vocabulary') {
              return (
                <View key={index} style={styles.section}>
                  <View style={styles.sectionTitleRow}>
                    {/* คุณสามารถเพิ่มไอคอนหรือสัญลักษณ์เพชรตรงนี้ได้ถ้าต้องการ */}
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                  </View>
                  <View style={styles.vocabularyTable}>
                    <View style={styles.tableHeaderRow}>
                      <Text style={styles.tableHeaderCell}>English</Text>
                      <Text style={styles.tableHeaderCell}>Thai</Text>
                    </View>
                    {section.data.map((item, voc_index) => (
                      <View key={voc_index} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{item.english}</Text>
                        <Text style={styles.tableCell}>{item.thai}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              );
            } else if (section.type === 'conversation') {
              return (
                <View key={index} style={styles.section}>
                   <View style={styles.sectionTitleRow}>
                    {/* คุณสามารถเพิ่มไอคอนหรือสัญลักษณ์เพชรตรงนี้ได้ถ้าต้องการ */}
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                  </View>
                  {section.dialogues.map((dialogue, conv_index) => (
                    <View key={conv_index} style={styles.dialogueLine}>
                      {/* ไอคอนผู้พูด (Placeholder) **คุณต้องมีไฟล์ภาพนี้ใน assets/images** */}
                      <Image source={require('../assets/images/new_friends.png')} style={styles.dialogueIcon} />
                      <Text style={styles.dialogueText}>
                        <Text style={styles.dialogueSpeaker}>{dialogue.speaker}: </Text>
                        {dialogue.text}
                      </Text>
                    </View>
                  ))}
                </View>
              );
            } else {
              // การแสดงผลเริ่มต้นสำหรับบทเรียนประเภทอื่นๆ (หากไม่ได้กำหนด type)
              return (
                <View key={index} style={styles.section}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                  <Text style={styles.sectionContent}>{section.content}</Text>
                </View>
              );
            }
          })}

          {/* ปุ่มทำแบบทดสอบ */}
          <TouchableOpacity
            style={styles.testButton}
            onPress={() =>
              navigation.navigate('Quiz', {
                lessonId: lesson.id,
                lessonTitle: lesson.title, // ส่ง title ไปแสดงบน header ของ QuizScreen
              })
            }
          >
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
    backgroundColor: '#E0F2FE', // สีฟ้าอ่อนสำหรับพื้นหลัง
  },
  container: {
    flex: 1,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 10,
    backgroundColor: '#E0F2FE', // สีเดียวกับ safeArea
  },
  topHeaderIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: 'contain',
  },
  topHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000', // สีดำสำหรับข้อความ "New Friends"
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', // พื้นหลังสีขาวสำหรับพื้นที่เนื้อหาหลัก
  },
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB', // เส้นสีเทาอ่อน
  },
  lessonHeaderIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },
  lessonHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333', // สีเทาเข้มสำหรับหัวข้อ "Conversation Lesson: New Friends"
  },
  section: {
    marginBottom: 20,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333', // สีเทาเข้มสำหรับหัวข้อส่วนต่างๆ
  },
  vocabularyTable: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 10,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0', // พื้นหลังส่วนหัวตารางสีเทาอ่อน
    borderBottomWidth: 1,
    borderColor: '#D1D5DB',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    color: '#555555',
  },
  dialogueLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  dialogueIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    marginTop: 2, // จัดตำแหน่งให้ตรงกับข้อความ
    resizeMode: 'contain',
  },
  dialogueText: {
    fontSize: 16,
    color: '#333333',
    flexShrink: 1, // อนุญาตให้ข้อความขึ้นบรรทัดใหม่
  },
  dialogueSpeaker: {
    fontWeight: 'bold',
  },
  sectionContent: { // สำหรับเนื้อหาบทเรียนอื่นๆ ที่ไม่ใช่ New Friends
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