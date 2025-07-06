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
  const currentLessonContent = lessonContent[lesson.id] || { sections: [] };
  const displayTitle = currentLessonContent.mainTitle || lesson.title; // ใช้ mainTitle ถ้ามี มิฉะนั้นใช้ lesson.title

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* ส่วนหัวด้านบนสุดของหน้าจอ (New Friends / At School / At a Restaurant / Shopping / Job Interview) */}
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
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                  </View>
                  {section.dialogues.map((dialogue, conv_index) => (
                    <View key={conv_index} style={styles.dialogueLine}>
                      {/* ไอคอนผู้พูด (Placeholder) **คุณต้องมีไฟล์ภาพ speaker_icon.png ใน assets/images** */}
                      <Image source={require('../assets/images/speaker_icon.png')} style={styles.dialogueIcon} />
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