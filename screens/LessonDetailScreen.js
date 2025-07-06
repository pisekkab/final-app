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
    '2': { // สำหรับ lessonId: '2' (At School)
      mainTitle: 'At School',
      sections: [
        {
          type: 'header',
          icon: require('../assets/images/at_school.png'), // ใช้ไอคอนโรงเรียน
          title: 'Conversation Lesson: At School',
        },
        {
          type: 'vocabulary',
          title: 'Part 1: Vocabulary',
          data: [
            { "english": "classroom", "thai": "ห้องเรียน" },
            { "english": "teacher", "thai": "ครู" },
            { "english": "student", "thai": "นักเรียน" },
            { "english": "subject", "thai": "วิชา" },
            { "english": "homework", "thai": "การบ้าน" },
            { "english": "break time", "thai": "เวลาพัก" },
            { "english": "blackboard", "thai": "กระดานดำ" },
            { "english": "desk", "thai": "โต๊ะ" },
            { "english": "chair", "thai": "เก้าอี้" },
            { "english": "study", "thai": "เรียน" }
          ],
        },
        {
          type: 'conversation',
          title: 'Part 2: Conversation Practice',
          dialogues: [
            { "speaker": "Teacher", "text": "Good morning, class!" },
            { "speaker": "Students", "text": "Good morning, teacher!" },
            { "speaker": "Teacher", "text": "What subject do we have today?" },
            { "speaker": "Student", "text": "English!" },
            { "speaker": "Teacher", "text": "That's right. Please open your books to page ten." },
            { "speaker": "Student", "text": "Do we have homework today?" },
            { "speaker": "Teacher", "text": "Yes, please write five sentences in English." }
          ],
        },
      ],
    },
    '3': { // สำหรับ lessonId: '3' (At a Restaurant)
      mainTitle: 'At a Restaurant',
      sections: [
        {
          type: 'header',
          icon: require('../assets/images/at_restaurant.png'), // ใช้ไอคอนร้านอาหาร
          title: 'Conversation Lesson: At a Restaurant',
        },
        {
          type: 'vocabulary',
          title: 'Part 1: Vocabulary',
          data: [
            { "english": "waiter / waitress", "thai": "พนักงานเสิร์ฟ" },
            { "english": "menu", "thai": "เมนูอาหาร" },
            { "english": "order", "thai": "สั่งอาหาร" },
            { "english": "bill / check", "thai": "ใบเสร็จ / บิล" },
            { "english": "delicious", "thai": "อร่อย" },
            { "english": "recommend", "thai": "แนะนำ (อาหาร)" },
            { "english": "main course", "thai": "อาหารจานหลัก" },
            { "english": "dessert", "thai": "ของหวาน" },
            { "english": "drink", "thai": "เครื่องดื่ม" },
            { "english": "table for two", "thai": "โต๊ะสำหรับสองคน" }
          ],
        },
        {
          type: 'conversation',
          title: 'Part 2: Conversation Practice',
          dialogues: [
            { "speaker": "Waiter", "text": "Good evening! Welcome to Sunny Café." },
            { "speaker": "Customer", "text": "Good evening. A table for two, please." },
            { "speaker": "Waiter", "text": "Right this way. Here's the menu." },
            { "speaker": "Customer", "text": "Thank you. Hmm... What do you recommend?" },
            { "speaker": "Waiter", "text": "Our grilled chicken and spaghetti are very popular." },
            { "speaker": "Customer", "text": "OK. I'll have the grilled chicken and a Coke." },
            { "speaker": "Waiter", "text": "Great. Would you like anything else?" },
            { "speaker": "Customer", "text": "No, thank you. Just the bill, please." },
            { "speaker": "Waiter", "text": "Sure. I'll be right back." }
          ],
        },
      ],
    },
    '4': { // สำหรับ lessonId: '4' (Shopping)
      mainTitle: 'Shopping',
      sections: [
        {
          type: 'header',
          icon: require('../assets/images/shopping.png'), // ใช้ไอคอนการช้อปปิ้ง
          title: 'Conversation Lesson: Shopping',
        },
        {
          type: 'vocabulary',
          title: 'Part 1: Vocabulary',
          data: [
            { "english": "shop", "thai": "ร้านค้า" },
            { "english": "buy", "thai": "ซื้อ" },
            { "english": "price", "thai": "ราคา" },
            { "english": "expensive", "thai": "แพง" },
            { "english": "cheap", "thai": "ถูก" },
            { "english": "try on", "thai": "ลอง (เสื้อผ้า)" },
            { "english": "How much?", "thai": "ราคาเท่าไหร่" },
            { "english": "discount", "thai": "ส่วนลด" },
            { "english": "cashier", "thai": "แคชเชียร์" },
            { "english": "receipt", "thai": "ใบเสร็จ" }
          ],
        },
        {
          type: 'conversation',
          title: 'Part 2: Conversation Practice',
          dialogues: [
            { "speaker": "Customer", "text": "Hello. How much is this shirt?" },
            { "speaker": "Shop assistant", "text": "It's 300 baht." },
            { "speaker": "Customer", "text": "Can I try it on?" },
            { "speaker": "Shop assistant", "text": "Sure. The fitting room is over there." },
            { "speaker": "Customer", "text": "I like it. Can I get a discount?" },
            { "speaker": "Shop assistant", "text": "I can give you 10% off." },
            { "speaker": "Customer", "text": "Great! I'll take it. Thank you." }
          ],
        },
      ],
    },
    '5': { // สำหรับ lessonId: '5' (Job Interview) - เพิ่มโค้ดใหม่
      mainTitle: 'Job Interview',
      sections: [
        {
          type: 'header',
          icon: require('../assets/images/job_interview.png'), // ใช้ไอคอนการสัมภาษณ์งาน
          title: 'Conversation Lesson: Job Interview',
        },
        {
          type: 'vocabulary',
          title: 'Part 1: Vocabulary',
          data: [
            { "english": "interview", "thai": "การสัมภาษณ์" },
            { "english": "job", "thai": "งาน" },
            { "english": "experience", "thai": "ประสบการณ์" },
            { "english": "strength", "thai": "จุดแข็ง" },
            { "english": "weakness", "thai": "จุดอ่อน" },
            { "english": "position", "thai": "ตำแหน่งงาน" },
            { "english": "apply", "thai": "สมัคร" },
            { "english": "skill", "thai": "ทักษะ" },
            { "english": "hire", "thai": "จ้าง" },
            { "english": "confident", "thai": "มั่นใจ" }
          ],
        },
        {
          type: 'conversation',
          title: 'Part 2: Conversation Practice',
          dialogues: [
            { "speaker": "Interviewer", "text": "Good morning. Please have a seat." },
            { "speaker": "Applicant", "text": "Good morning. Thank you." },
            { "speaker": "Interviewer", "text": "Can you tell me about yourself?" },
            { "speaker": "Applicant", "text": "My name is Tom. I'm 18 years old. I just finished high school." },
            { "speaker": "Interviewer", "text": "Why do you want this job?" },
            { "speaker": "Applicant", "text": "I want to gain experience and I'm interested in this position." },
            { "speaker": "Interviewer", "text": "What is your strength?" },
            { "speaker": "Applicant", "text": "I'm hard-working and friendly." }
          ],
        },
      ],
    },
  };

  // ดึงเนื้อหาตาม ID ของบทเรียนที่ส่งมา
  const currentLessonContent = lessonContent[lesson.id];

  if (!currentLessonContent) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Lesson content not found.</Text>
      </SafeAreaView>
    );
  }

  const renderSection = (section, index) => {
    switch (section.type) {
      case 'header':
        return (
          <View key={index} style={styles.headerSection}>
            {section.icon && <Image source={section.icon} style={styles.headerIcon} />}
            <Text style={styles.mainLessonTitle}>{section.title}</Text>
          </View>
        );
      case 'vocabulary':
        return (
          <View key={index} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.table}>
              <View style={styles.tableHeaderRow}>
                <Text style={styles.tableHeaderCell}>English</Text>
                <Text style={styles.tableHeaderCell}>Thai</Text>
              </View>
              {section.data.map((item, i) => (
                <View key={i} style={styles.tableRow}>
                  <Text style={styles.tableCell}>{item.english}</Text>
                  <Text style={styles.tableCell}>{item.thai}</Text>
                </View>
              ))}
            </View>
          </View>
        );
      case 'conversation': // New case for 'conversation' type
        return (
          <View key={index} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.dialogues.map((line, i) => (
              <View key={i} style={styles.dialogueLine}>
                <Text style={styles.dialogueText}>
                  <Text style={styles.dialogueSpeaker}>{line.speaker}:</Text> {line.text}
                </Text>
              </View>
            ))}
          </View>
        );
      case 'explanation':
        return (
          <View key={index} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionContent}>{section.text}</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {currentLessonContent.sections.map(renderSection)}
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() =>
            navigation.navigate('Quiz', {
              lessonId: lesson.id,
              lessonTitle: lesson.title,
            })
          }
        >
          <Text style={styles.quizButtonText}>Take Quiz</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8FF', // Ghost White
  },
  scrollViewContent: {
    padding: 15,
    paddingBottom: 30,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 25,
    paddingVertical: 15,
    backgroundColor: '#E0EFFF', // Alice Blue
    borderRadius: 15,
    shadowColor: '#A0BBE2',
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
  mainLessonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A6A',
    textAlign: 'center',
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF', // White background for sections
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#D3DDF4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6A5ACD', // Slate Blue
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F8FF', // Alice Blue light border
    paddingBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#5F6B7F', // Darker gray for content
    lineHeight: 24,
  },
  table: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#D3DDF4', // Lavender Blue
    borderRadius: 10,
    overflow: 'hidden', // Ensures inner borders are within radius
  },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#D3DDF4', // Lavender Blue for header
    borderBottomWidth: 1,
    borderColor: '#C0CCE8',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4A4A6A',
    fontSize: 16,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#EFF3F8', // Lighter border for rows
  },
  tableCell: {
    flex: 1,
    padding: 12,
    textAlign: 'center',
    color: '#5F6B7F',
    fontSize: 15,
  },
  dialogueLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10, // เพิ่มระยะห่างระหว่างบรรทัดสนทนา
    paddingVertical: 5,
  },
  dialogueIcon: {
    width: 28,
    height: 28,
    marginRight: 10,
    marginTop: 2,
    resizeMode: 'contain',
  },
  dialogueText: {
    fontSize: 17, // ขนาดฟอนต์ใหญ่ขึ้น
    color: '#4A4A6A',
    flexShrink: 1,
    lineHeight: 26,
  },
  dialogueSpeaker: {
    fontWeight: 'bold',
    color: '#6A5ACD', // Slate Blue for speaker
  },
  quizButton: {
    backgroundColor: '#A0BBE2', // Periwinkle
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#A0BBE2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 7,
  },
  quizButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.6,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#FF6347', // Tomato
  },
});

export default LessonDetailScreen;