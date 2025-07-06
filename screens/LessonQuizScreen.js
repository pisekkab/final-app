// screens/QuizScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert, // สำหรับแสดงผลลัพธ์
} from 'react-native';

const QuizScreen = ({ route, navigation }) => {
  const { lessonId, lessonTitle } = route.params;

  // ข้อมูลคำถามสำหรับแบบทดสอบ (ตัวอย่างสำหรับบทเรียน 'New Friends')
  // คุณสามารถขยายโครงสร้างนี้เพื่อดึงข้อมูลจาก API หรือไฟล์ JSON ได้
  const quizData = {
    '1': { // สำหรับ lessonId: '1' (New Friends)
      title: 'แบบทดสอบ: New Friends',
      questions: [
        {
          id: 'q1',
          question: 'คำว่า "friend" ในภาษาไทยหมายถึงอะไร?',
          options: ['เพื่อน', 'ครู', 'นักเรียน', 'ครอบครัว'],
          correctAnswer: 'เพื่อน',
        },
        {
          id: 'q2',
          question: 'ถ้าคุณต้องการถามชื่ออีกฝ่าย คุณจะพูดว่าอะไรในภาษาอังกฤษ?',
          options: ["How are you?", "What's your name?", "Where are you from?", "Nice to meet you!"],
          correctAnswer: "What's your name?",
        },
        {
          id: 'q3',
          question: 'ข้อใดคือคำทักทายเมื่อพบกันครั้งแรก?',
          options: ["Goodbye!", "See you later!", "Nice to meet you!", "How old are you?"],
          correctAnswer: "Nice to meet you!",
        },
        {
          id: 'q4',
          question: 'คำว่า "hobby" หมายถึงอะไรในภาษาไทย?',
          options: ['เพื่อน', 'งานอดิเรก', 'โรงเรียน', 'บ้าน'],
          correctAnswer: 'งานอดิเรก',
        },
      ],
    },
    // คุณสามารถเพิ่ม quizData สำหรับ lessonId อื่นๆ ได้ที่นี่
    '2': { // ตัวอย่างสำหรับบทเรียนอื่นๆ
      title: 'แบบทดสอบ: ตัวแปรและประเภทข้อมูล',
      questions: [
        {
          id: 'q1',
          question: 'ข้อใดคือประเภทข้อมูลที่เก็บค่าเป็นตัวเลขจำนวนเต็ม?',
          options: ['String', 'Boolean', 'Integer', 'Float'],
          correctAnswer: 'Integer',
        },
        // ... เพิ่มคำถามอื่น ๆ
      ],
    },
  };

  const currentQuiz = quizData[lessonId] || { title: 'ไม่พบแบบทดสอบ', questions: [] };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // ตรวจสอบคำตอบเมื่อไปยังคำถามถัดไป
    if (selectedOption === currentQuiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // ล้างตัวเลือกที่เลือกไว้สำหรับคำถามถัดไป
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
  };

  if (!currentQuiz.questions || currentQuiz.questions.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.noQuizText}>ขออภัย ไม่พบแบบทดสอบสำหรับบทเรียนนี้</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>ย้อนกลับ</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.quizTitle}>{currentQuiz.title}</Text>

        {quizCompleted ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>แบบทดสอบเสร็จสิ้น!</Text>
            <Text style={styles.scoreText}>คุณได้คะแนน: {score} / {currentQuiz.questions.length}</Text>
            <TouchableOpacity style={styles.retakeButton} onPress={handleRetakeQuiz}>
              <Text style={styles.retakeButtonText}>ทำแบบทดสอบใหม่</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.backButtonText}>กลับสู่บทเรียน</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.questionContainer}>
            <Text style={styles.questionNumber}>คำถามที่ {currentQuestionIndex + 1} / {currentQuiz.questions.length}</Text>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>

            <View style={styles.optionsContainer}>
              {currentQuestion.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedOption === option && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleNextQuestion}
              disabled={selectedOption === null} // ปุ่มจะกดไม่ได้ถ้ายังไม่เลือกตัวเลือก
            >
              <Text style={styles.submitButtonText}>
                {currentQuestionIndex === currentQuiz.questions.length - 1 ? 'ส่งคำตอบ' : 'คำถามถัดไป'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E0F2FE', // Background similar to LessonDetailScreen
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background for the main content
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 0, // Adjust as needed if there's a header above
    paddingTop: 30,
  },
  quizTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 20,
    textAlign: 'center',
  },
  noQuizText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 50,
  },
  questionContainer: {
    width: '100%',
    backgroundColor: '#F0F9FF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#60A5FA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  questionNumber: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 10,
    textAlign: 'right',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 20,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#E6F2FF', // Light blue for options
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#B3DAF1', // Slightly darker blue border
  },
  selectedOption: {
    backgroundColor: '#B3DAF1', // Darker blue when selected
    borderColor: '#4D9DE0',
  },
  optionText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  submitButton: {
    backgroundColor: '#4D9DE0', // Primary blue button
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#F0F9FF',
    borderRadius: 15,
    width: '100%',
    shadowColor: '#60A5FA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 20,
    color: '#28A745', // Green for score
    fontWeight: 'bold',
    marginBottom: 30,
  },
  retakeButton: {
    backgroundColor: '#28A745', // Green for retake
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  retakeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#6C757D', // Grey for back button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LessonQuizScreen;