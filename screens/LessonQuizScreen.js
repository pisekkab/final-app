// screens/LessonQuizScreen.js
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

const LessonQuizScreen = ({ route, navigation }) => {
  const { lessonId, lessonTitle } = route.params;

  // ข้อมูลคำถามสำหรับแบบทดสอบ (อัปเดตตามคำถามชุดใหม่ที่คุณให้มา)
  const quizData = {
    '1': { // สำหรับ lessonId: '1' (New Friends)
      title: 'แบบทดสอบ: New Friends',
      questions: [
        {
          id: 'q1',
          question: "A:\n________? \nB: My name is Ben.",
          options: ["A. Where are you from?", "B. How are you?", "C. What’s your name?", "D. How old are you?"],
          correctAnswer: "C. What’s your name?",
        },
        {
          id: 'q2',
          question: "A: Nice to meet you. \nB: ________",
          options: ["A. Me too.", "B. Thank you.", "C. Nice to meet you too.", "D. Goodbye."],
          correctAnswer: "C. Nice to meet you too.",
        },
        {
          id: 'q3',
          question: "A:\n________? \nB: I’m 13 years old.",
          options: ["A. How are you?", "B. Where are you from?", "C. What’s your name?", "D. How old are you?"],
          correctAnswer: "D. How old are you?",
        },
        {
          id: 'q4',
          question: "A: Where are you from? \nB: ________",
          options: ["A. I like badminton.", "B. I’m from Thailand.", "C. I’m 13.", "D. I’m fine."],
          correctAnswer: "B. I’m from Thailand.",
        },
        {
          id: 'q5',
          question: "A: What do you like to do? \nB: ________",
          options: ["A. I’m from Singapore.", "B. I like drawing.", "C. I’m 14.", "D. I’m a student."],
          correctAnswer: "B. I like drawing.",
        },
      ],
    },
    '2': { // สำหรับ lessonId: '2' (At School)
      title: 'แบบทดสอบ: At School',
      questions: [
        {
          id: 'q1',
          question: "A: Good morning, class! \nB: ________",
          options: ["A. Hello, friend!", "B. Good morning, teacher!", "C. I’m fine.", "D. What page?"],
          correctAnswer: "B. Good morning, teacher!",
        },
        {
          id: 'q2',
          question: "A: ________? \nB: English!",
          options: ["A. What subject do we have today?", "B. What food do you like?", "C. How are you today?", "D. Where is your bag?"],
          correctAnswer: "A. What subject do we have today?",
        },
        {
          id: 'q3',
          question: "A: Please open your books. \nB: ________",
          options: ["A. What page?", "B. I don’t want to.", "C. See you later.", "D. Thank you!"],
          correctAnswer: "A. What page?",
        },
        {
          id: 'q4',
          question: "A: Do we have homework today? \nB: ________",
          options: ["A. No class today.", "B. Yes, write five sentences in English.", "C. Go to page ten.", "D. Let’s take a break."],
          correctAnswer: "B. Yes, write five sentences in English.",
        },
        {
          id: 'q5',
          question: "A: What do we do now? \nB: ________",
          options: ["A. Close your eyes.", "B. Write sentences in English.", "C. Eat lunch.", "D. Clean the classroom."],
          correctAnswer: "B. Write sentences in English.",
        },
      ],
    },
    '3': { // สำหรับ lessonId: '3' (At a Restaurant)
      title: 'แบบทดสอบ: At a Restaurant',
      questions: [
        {
          id: 'q1',
          question: "A: ________? \nB: A table for two, please.",
          options: ["A. What would you like to order?", "B. Where are you from?", "C. How many people?", "D. What’s your favorite food?"],
          correctAnswer: "C. How many people?",
        },
        {
          id: 'q2',
          question: "A: What do you recommend? \nB: ________",
          options: ["A. I don’t like food.", "B. Our grilled chicken is very popular.", "C. I’m from Thailand.", "D. Just water, please."],
          correctAnswer: "B. Our grilled chicken is very popular.",
        },
        {
          id: 'q3',
          question: "A: ________? \nB: I’ll have the grilled chicken and a Coke.",
          options: ["A. What do you want to drink?", "B. What’s your name?", "C. Where do you live?", "D. Would you like to order now?"],
          correctAnswer: "D. Would you like to order now?",
        },
        {
          id: 'q4',
          question: "A: Would you like some dessert? \nB: ________",
          options: ["A. Yes, I am.", "B. No, thank you.", "C. I have a Coke.", "D. Chicken please."],
          correctAnswer: "B. No, thank you.",
        },
        {
          id: 'q5',
          question: "A: ________? \nB: Just the bill, please.",
          options: ["A. What’s your phone number?", "B. Would you like anything else?", "C. How was the food?", "D. What would you like to eat?"],
          correctAnswer: "B. Would you like anything else?",
        },
      ],
    },
    '4': { // สำหรับ lessonId: '4' (Shopping) - อัปเดตคำถามใหม่
      title: 'แบบทดสอบ: Shopping',
      questions: [
        {
          id: 'q1',
          question: "What does 'discount' mean?",
          options: ["A. เพิ่ม", "B. ลดราคา", "C. ขายหมด", "D. เปลี่ยนสินค้า"],
          correctAnswer: "B. ลดราคา",
        },
        {
          id: 'q2',
          question: "A:___________________?\nB: It’s 300 baht.",
          options: ["A. How old are you?", "B. How much is it?", "C. Do you like it?", "D. Where is it?"],
          correctAnswer: "B. How much is it?",
        },
        {
          id: 'q3',
          question: "A:___________________?\nB: Sure. The fitting room is over there.",
          options: ["A. Can I try it on", "B. Can I get a discount?", "C. How much is it?", "D. Where is it?"],
          correctAnswer: "A. Can I try it on",
        },
        {
          id: 'q4',
          question: "A: I can give you 10% off.\nB: _____________________.",
          options: ["A. It’s over there.", "B. Great! I’ll take it. Thank you.", "C. Sure.", "D. Your welcome"],
          correctAnswer: "B. Great! I’ll take it. Thank you.",
        },
        {
          id: 'q5',
          question: "A: _____________?\nB: I can give you 10% off.",
          options: ["A. I like it. Can I try it on?", "B. I like it. Can I get a discount?", "C. I like it. Can I buy it?", "D. I like it. Can I pay now?"],
          correctAnswer: "B. I like it. Can I get a discount?",
        },
      ],
    },
    '5': { // สำหรับ lessonId: '5' (Job Interview) - อัปเดตคำถามใหม่
      title: 'แบบทดสอบ: Job Interview',
      questions: [
        {
          id: 'q1',
          question: "A:___________________?\nB: I want to gain experience.",
          options: ["A. What do you like to eat?", "B. Why do you want this job?", "C. How much is your salary?", "D. Where do you live?"],
          correctAnswer: "B. Why do you want this job?",
        },
        {
          id: 'q2',
          question: "A:___________________?\nB: My name is Tom. I’m 18 years old.",
          options: ["A. What’s your name?", "B. How old are you?", "C. Tell me about yourself.", "D. Where are you from?"],
          correctAnswer: "C. Tell me about yourself.",
        },
        {
          id: 'q3',
          question: "A:___________________?\nB: I’m hard-working and friendly.",
          options: ["A. What’s your hobby?", "B. What is your strength?", "C. Where do you work?", "D. How do you travel?"],
          correctAnswer: "B. What is your strength?",
        },
        {
          id: 'q4',
          question: "A: Can you tell me about yourself?\nB: _____________________.",
          options: ["A. I like pizza.", "B. I’m from Chiang Mai.", "C. I’m 18 and just finished high school.", "D. I don’t like interviews."],
          correctAnswer: "C. I’m 18 and just finished high school.",
        },
        {
          id: 'q5',
          question: "A: A: Why should we hire you?\nB: _____________________.",
          options: ["A. Because I need a job.", "B. Because I’m responsible and eager to learn.", "C. Because my mom told me.", "D. Because it’s close to my house."],
          correctAnswer: "B. Because I’m responsible and eager to learn.",
        },
      ],
    },
    // คุณสามารถเพิ่ม quizData สำหรับ lessonId อื่นๆ ได้ที่นี่
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
    marginTop: 0,
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