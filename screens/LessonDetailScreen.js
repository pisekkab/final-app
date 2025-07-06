import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image, // Still needed if you decide to add icons for conversation
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const LessonDetailScreen = ({ route, navigation }) => {
  const { lesson } = route.params;

  const lessonContent = {
    '1': { // Assuming 'New Friends' corresponds to id '1' from LessonListScreen
      mainTitle: 'New Friends', // Main title for the screen
      sections: [
        {
          type: 'header',
          icon: require('../assets/images/new_friends.png'), // Placeholder for conversation icon
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
    // Keep original structure for other lessons if they still exist or handle a default
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
    // ... add content for other lessons as needed
  };

  // Get content based on the lesson ID passed from LessonListScreen
  const currentLessonContent = lessonContent[lesson.id] || { sections: [] };
  const displayTitle = currentLessonContent.mainTitle || lesson.title; // Use mainTitle if available, else lesson.title

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Main Title at the very top, mimicking the image */}
        <View style={styles.topHeader}>
          <Image
            source={lesson.image} // Use the icon passed from LessonListScreen
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
                      {/* Assuming speaker icons will be here, using a generic one for now */}
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
              // Default rendering for other lesson types (e.g., from original code)
              return (
                <View key={index} style={styles.section}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                  <Text style={styles.sectionContent}>{section.content}</Text>
                </View>
              );
            }
          })}

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
    backgroundColor: '#E0F2FE', // Light blue background
  },
  container: {
    flex: 1,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 10,
    backgroundColor: '#E0F2FE', // Match safeArea background
    // No explicit border or shadow here, matching the image
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
    color: '#000000', // Black color for the text "New Friends"
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', // White background for the main content area
    // Remove specific border radiuses and shadows that are not in the new design
  },
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB', // Light grey line
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
    color: '#333333', // Dark grey for the header "Conversation Lesson: New Friends"
  },
  section: {
    marginBottom: 20,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  // Example for adding a bullet point (diamond in the image)
  sectionBullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00BFFF', // Light blue for the bullet/diamond
    marginRight: 8,
    transform: [{ rotate: '45deg' }], // Rotate to make it a diamond
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333', // Dark grey for section titles
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
    backgroundColor: '#F0F0F0', // Light grey header background
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
    marginTop: 2, // Align with text
    resizeMode: 'contain',
  },
  dialogueText: {
    fontSize: 16,
    color: '#333333',
    flexShrink: 1, // Allow text to wrap
  },
  dialogueSpeaker: {
    fontWeight: 'bold',
  },
  // Retaining existing test button styles, or adjust as needed
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
  // Removed other unused styles like lessonImage, metaContainer, description, divider, etc.
});

export default LessonDetailScreen;