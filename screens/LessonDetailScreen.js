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
            { english: 'school', thai: 'โรงเรียน' },
            { english: 'teacher', thai: 'ครู' },
            { english: 'student', thai: 'นักเรียน' },
            { english: 'classroom', thai: 'ห้องเรียน' },
            { english: 'book', thai: 'หนังสือ' },
            { english: 'desk', thai: 'โต๊ะ' },
            { english: 'chair', thai: 'เก้าอี้' },
            { english: 'pencil', thai: 'ดินสอ' },
            { english: 'pen', thai: 'ปากกา' },
            { english: 'notebook', thai: 'สมุด' },
          ],
        },
        {
          type: 'conversation',
          title: 'Part 2: Conversation Practice',
          dialogues: [
            { speaker: 'A', text: "Good morning, Ben!" },
            { speaker: 'B', text: "Good morning, Anna!" },
            { speaker: 'A', text: "Are you ready for school today?" },
            { speaker: 'B', text: "Yes, I am! I have my books and pencils." },
            { speaker: 'A', text: "What's your favorite subject?" },
            { speaker: 'B', text: "I like English. How about you?" },
            { speaker: 'A', text: "I like Math. Let's go to class." },
            { speaker: 'B', text: "Ok!" },
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
            { english: 'restaurant', thai: 'ร้านอาหาร' },
            { english: 'waiter/waitress', thai: 'บริกร' },
            { english: 'menu', thai: 'เมนูอาหาร' },
            { english: 'order', thai: 'สั่ง' },
            { english: 'delicious', thai: 'อร่อย' },
            { english: 'bill', thai: 'บิล/ใบเสร็จ' },
            { english: 'table', thai: 'โต๊ะ' },
            { english: 'chef', thai: 'พ่อครัว' },
            { english: 'reservation', thai: 'การจอง' },
            { english: 'tip', thai: 'ทิป' },
          ],
        },
        {
          type: 'conversation',
          title: 'Part 2: Conversation Practice',
          dialogues: [
            { speaker: 'A', text: "Welcome! Do you have a reservation?" },
            { speaker: 'B', text: "No, we don't. A table for two, please." },
            { speaker: 'A', text: "Right this way. Here are your menus." },
            { speaker: 'B', text: "Thank you. What do you recommend?" },
            { speaker: 'A', text: "The grilled fish is very popular." },
            { speaker: 'B', text: "Okay, I'll have the grilled fish and a glass of water." },
            { speaker: 'A', text: "And for you?" },
            { speaker: 'C', text: "I'll have the pasta." },
            { speaker: 'A', text: "Excellent choice!" },
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
            { english: 'shop/store', thai: 'ร้านค้า' },
            { english: 'customer', thai: 'ลูกค้า' },
            { english: 'salesperson', thai: 'พนักงานขาย' },
            { english: 'price', thai: 'ราคา' },
            { english: 'discount', thai: 'ส่วนลด' },
            { english: 'cashier', thai: 'แคชเชียร์' },
            { english: 'receipt', thai: 'ใบเสร็จ' },
            { english: 'try on', thai: 'ลองสวม' },
            { english: 'size', thai: 'ขนาด' },
            { english: 'credit card', thai: 'บัตรเครดิต' },
          ],
        },
        {
          type: 'conversation',
          title: 'Part 2: Conversation Practice',
          dialogues: [
            { speaker: 'A', text: "Can I help you?" },
            { speaker: 'B', text: "Yes, please. I'm looking for a new shirt." },
            { speaker: 'A', text: "What size are you?" },
            { speaker: 'B', text: "Medium. Do you have this in blue?" },
            { speaker: 'A', text: "Let me check. Yes, here you go." },
            { speaker: 'B', text: "Thanks. Can I try it on?" },
            { speaker: 'A', text: "The fitting rooms are over there." },
            { speaker: 'B', text: "It fits perfectly! How much is it?" },
            { speaker: 'A', text: "That's $25." },
            { speaker: 'B', text: "I'll take it." },
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
            { english: 'interview', thai: 'สัมภาษณ์' },
            { english: 'employer', thai: 'นายจ้าง' },
            { english: 'applicant', thai: 'ผู้สมัคร' },
            { english: 'resume', thai: 'เรซูเม่' },
            { english: 'experience', thai: 'ประสบการณ์' },
            { english: 'skills', thai: 'ทักษะ' },
            { english: 'qualifications', thai: 'คุณสมบัติ' },
            { english: 'strength', thai: 'จุดแข็ง' },
            { english: 'weakness', thai: 'จุดอ่อน' },
            { english: 'salary', thai: 'เงินเดือน' },
          ],
        },
        {
          type: 'conversation',
          title: 'Part 2: Conversation Practice',
          dialogues: [
            { speaker: 'Interviewer', text: "Good morning, please have a seat." },
            { speaker: 'Applicant', text: "Thank you. Good morning." },
            { speaker: 'Interviewer', text: "Tell me about yourself." },
            { speaker: 'Applicant', text: "I'm a recent graduate with a degree in Marketing. I'm highly motivated and eager to learn." },
            { speaker: 'Interviewer', text: "Why are you interested in this position?" },
            { speaker: 'Applicant', text: "I'm impressed by your company's innovative approach and I believe my skills align well with the job requirements." },
            { speaker: 'Interviewer', text: "What are your strengths?" },
            { speaker: 'Applicant', text: "I'm a good communicator and a quick learner. I'm also very organized." },
            { speaker: 'Interviewer', text: "Do you have any questions for me?" },
            { speaker: 'Applicant', text: "Yes, what are the opportunities for growth within the company?" },
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
      case 'dialogue':
        return (
          <View key={index} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.data.map((line, i) => (
              <View key={i} style={styles.dialogueLine}>
                {/* สามารถเพิ่มรูปโปรไฟล์หรือไอคอนเล็กๆ ได้ที่นี่ หากมี */}
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