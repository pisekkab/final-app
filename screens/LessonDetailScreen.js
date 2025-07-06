// screens/LessonDetailScreen.js
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
import { useTheme } from '@react-navigation/native'; // นำเข้า useTheme
import { Ionicons } from '@expo/vector-icons'; // สำหรับใช้ไอคอน

const LessonDetailScreen = ({ route, navigation }) => {
  const { lesson, lessonId, title } = route.params;
  const { colors } = useTheme(); // ดึงสีจาก theme

  // ข้อมูลเนื้อหาบทเรียนสำหรับแต่ละ ID
  const lessonContent = {
    '1': { // สำหรับ lessonId: '1' (New Friends)
      mainTitle: 'New Friends',
      sections: [
        {
          type: 'header',
          icon: require('../assets/images/new_friends.png'), // ใช้ไอคอนเฉพาะบทเรียน
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
          type: 'dialogue',
          title: 'Part 2: Dialogue',
          dialogues: [
            { speaker: 'A', text: 'Hi! My name is Lisa. Nice to meet you.', icon: require('../assets/images/person_icon_1.png') },
            { speaker: 'B', text: 'Hi Lisa! Nice to meet you too. I’m Ben.', icon: require('../assets/images/person_icon_2.png') },
            { speaker: 'A', text: 'Where are you from, Ben?', icon: require('../assets/images/person_icon_1.png') },
            { speaker: 'B', text: 'I’m from Thailand. How about you?', icon: require('../assets/images/person_icon_2.png') },
            { speaker: 'A', text: 'I’m from Japan. How old are you?', icon: require('../assets/images/person_icon_1.png') },
            { speaker: 'B', text: 'I’m 13 years old. And you?', icon: require('../assets/images/person_icon_2.png') },
            { speaker: 'A', text: 'I’m 14. What do you like to do in your free time?', icon: require('../assets/images/person_icon_1.png') },
            { speaker: 'B', text: 'I like playing football. Do you have any hobbies?', icon: require('../assets/images/person_icon_2.png') },
            { speaker: 'A', text: 'Yes, I like reading books.', icon: require('../assets/images/person_icon_1.png') },
          ],
        },
      ],
    },
    '2': {
      mainTitle: 'At School',
      sections: [
        {
          type: 'header',
          icon: require('../assets/images/icon_at_school.png'),
          title: 'Lesson: At School',
        },
        {
          type: 'vocabulary',
          title: 'Part 1: Vocabulary',
          data: [
            { english: 'school', thai: 'โรงเรียน' },
            { english: 'teacher', thai: 'ครู' },
            { english: 'student', thai: 'นักเรียน' },
            { english: 'classroom', thai: 'ห้องเรียน' },
            { english: 'book', thai: 'หนังสือ' },
            { english: 'pencil', thai: 'ดินสอ' },
            { english: 'desk', thai: 'โต๊ะ' },
            { english: 'chair', thai: 'เก้าอี้' },
            { english: 'study', thai: 'เรียน' },
            { english: 'learn', thai: 'เรียนรู้' },
          ],
        },
        {
          type: 'content',
          title: 'Part 2: Common Phrases',
          content: `
            Here are some common phrases you might use at school:
            - "Good morning, teacher!"
            - "Can I ask a question?"
            - "May I go to the restroom?"
            - "Please open your books to page 10."
            - "It's time for recess."
          `,
        },
      ],
    },
    '3': {
      mainTitle: 'At a Restaurant',
      sections: [
        {
          type: 'header',
          icon: require('../assets/images/at_restaurant.png'),
          title: 'Lesson: At a Restaurant',
        },
        {
          type: 'vocabulary',
          title: 'Part 1: Vocabulary',
          data: [
            { english: 'restaurant', thai: 'ร้านอาหาร' },
            { english: 'menu', thai: 'เมนู' },
            { english: 'waiter/waitress', thai: 'บริกร' },
            { english: 'order', thai: 'สั่ง' },
            { english: 'bill', thai: 'บิล/ใบเสร็จ' },
            { english: 'delicious', thai: 'อร่อย' },
            { english: 'table', thai: 'โต๊ะ' },
            { english: 'reservation', thai: 'การจอง' },
            { english: 'tip', thai: 'ทิป' },
            { english: 'dish', thai: 'จาน/อาหาร' },
          ],
        },
        {
          type: 'content',
          title: 'Part 2: Ordering Food',
          content: `
            When you're at a restaurant, you'll need to know how to order food.
            - "May I see the menu, please?"
            - "I would like to order..."
            - "What do you recommend?"
            - "Can I get the bill, please?"
            - "This is delicious!"
          `,
        },
      ],
    },
    '4': {
      mainTitle: 'Shopping',
      sections: [
        {
          type: 'header',
          icon: require('../assets/images/icon_shopping.png'),
          title: 'Lesson: Shopping',
        },
        {
          type: 'vocabulary',
          title: 'Part 1: Vocabulary',
          data: [
            { english: 'shop/store', thai: 'ร้านค้า' },
            { english: 'customer', thai: 'ลูกค้า' },
            { english: 'salesperson', thai: 'พนักงานขาย' },
            { english: 'price', thai: 'ราคา' },
            { english: 'discount', thai: 'ส่วนลด' },
            { english: 'receipt', thai: 'ใบเสร็จ' },
            { english: 'fitting room', thai: 'ห้องลองเสื้อ' },
            { english: 'cashier', thai: 'พนักงานเก็บเงิน' },
            { english: 'credit card', thai: 'บัตรเครดิต' },
            { english: 'size', thai: 'ขนาด' },
          ],
        },
        {
          type: 'content',
          title: 'Part 2: Asking about products',
          content: `
            Useful phrases when shopping:
            - "How much is this?"
            - "Do you have this in a different size/color?"
            - "Can I try this on?"
            - "Where is the fitting room?"
            - "I'll take this."
            - "Do you accept credit cards?"
          `,
        },
      ],
    },
    '5': {
      mainTitle: 'Job Interview',
      sections: [
        {
          type: 'header',
          icon: require('../assets/images/icon_job_interview.png'),
          title: 'Lesson: Job Interview',
        },
        {
          type: 'vocabulary',
          title: 'Part 1: Vocabulary',
          data: [
            { english: 'interview', thai: 'สัมภาษณ์' },
            { english: 'employer', thai: 'นายจ้าง' },
            { english: 'employee', thai: 'ลูกจ้าง' },
            { english: 'resume', thai: 'ประวัติย่อ' },
            { english: 'experience', thai: 'ประสบการณ์' },
            { english: 'skill', thai: 'ทักษะ' },
            { english: 'strength', thai: 'จุดแข็ง' },
            { english: 'weakness', thai: 'จุดอ่อน' },
            { english: 'salary', thai: 'เงินเดือน' },
            { english: 'position', thai: 'ตำแหน่ง' },
          ],
        },
        {
          type: 'content',
          title: 'Part 2: Common Interview Questions & Answers',
          content: `
            **1. Tell me about yourself.**
            - "My name is [Your Name]. I am [Your Age] years old. I just finished high school and am eager to start my career."

            **2. Why do you want this job?**
            - "I want to gain experience in this field and I believe this position aligns with my career goals."

            **3. What are your strengths?**
            - "I am hard-working, responsible, and eager to learn new things. I am also a good team player."

            **4. Why should we hire you?**
            - "I am a highly motivated individual with a strong desire to contribute to your company. I am confident that my skills and enthusiasm make me a good fit for this role."
          `,
        },
      ],
    },
  };

  const currentLessonContent = lessonContent[lessonId];

  if (!currentLessonContent) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
        <View style={styles.container}>
          <Text style={[styles.errorText, { color: colors.danger }]}>ไม่พบเนื้อหาสำหรับบทเรียนนี้</Text>
          <TouchableOpacity
            style={[styles.backButton, { backgroundColor: colors.primary }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>กลับไปยังรายการบทเรียน</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.lessonHeader, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Image source={currentLessonContent.sections[0].icon} style={styles.headerIcon} />
          <Text style={[styles.mainTitle, { color: colors.text }]}>{currentLessonContent.mainTitle}</Text>
          <Text style={[styles.description, { color: colors.text }]}>{lesson.description}</Text>
        </View>

        {currentLessonContent.sections.map((section, index) => (
          <View key={index} style={[styles.section, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>{section.title}</Text>
            {section.type === 'vocabulary' && (
              <View style={styles.tableContainer}>
                <View style={[styles.tableHeaderRow, { backgroundColor: colors.border }]}>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>English</Text>
                  <Text style={[styles.tableHeaderCell, { color: colors.text }]}>Thai</Text>
                </View>
                {section.data.map((item, i) => (
                  <View key={i} style={styles.tableRow}>
                    <Text style={[styles.tableCell, { color: colors.text }]}>{item.english}</Text>
                    <Text style={[styles.tableCell, { color: colors.text }]}>{item.thai}</Text>
                  </View>
                ))}
              </View>
            )}
            {section.type === 'dialogue' && (
              <View>
                {section.dialogues.map((line, i) => (
                  <View key={i} style={styles.dialogueLine}>
                    {line.icon && <Image source={line.icon} style={styles.dialogueIcon} />}
                    <Text style={[styles.dialogueText, { color: colors.text }]}>
                      <Text style={styles.dialogueSpeaker}>{line.speaker}: </Text>
                      {line.text}
                    </Text>
                  </View>
                ))}
              </View>
            )}
            {section.type === 'content' && (
              <Text style={[styles.sectionContent, { color: colors.text }]}>{section.content}</Text>
            )}
          </View>
        ))}

        <TouchableOpacity
          style={[styles.quizButton, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate('LessonQuiz', { lessonId: lesson.id, lessonTitle: lesson.title })}
        >
          <Text style={styles.quizButtonText}>ทำแบบทดสอบบทเรียนนี้ 🧠</Text>
        </TouchableOpacity>

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
    padding: 15,
    paddingVertical: 20,
    alignItems: 'center',
  },
  lessonHeader: {
    width: '100%',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  headerIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    whiteSpace: 'pre-wrap', // รักษารูปแบบขึ้นบรรทัดใหม่
  },
  tableContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeaderRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#D1D5DB',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  tableCell: {
    flex: 1,
    padding: 12,
    textAlign: 'center',
    fontSize: 15,
  },
  dialogueLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  dialogueIcon: {
    width: 32,
    height: 32,
    marginRight: 10,
    borderRadius: 16, // ทำให้เป็นวงกลม
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#B0F2BC', // สีขอบไอคอน
  },
  dialogueText: {
    fontSize: 16,
    lineHeight: 24,
    flexShrink: 1,
  },
  dialogueSpeaker: {
    fontWeight: 'bold',
  },
  quizButton: {
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quizButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  backButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LessonDetailScreen;