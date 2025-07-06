// screens/LessonQuizScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useTheme } from '@react-navigation/native'; // นำเข้า useTheme
import { Ionicons } from '@expo/vector-icons'; // สำหรับแสดงไอคอนถูก/ผิด

const LessonQuizScreen = ({ route, navigation }) => {
  const { lessonId, lessonTitle } = route.params;
  const { colors } = useTheme(); // ดึงสีจาก theme

  // ข้อมูลคำถามสำหรับแบบทดสอบ (อัปเดตตามคำถามชุดใหม่ที่คุณให้มา)
  const quizData = {
    '1': { // สำหรับ lessonId: '1' (New Friends)
      title: 'แบบทดสอบ: New Friends',
      questions: [
        {
          id: 'q1',
          question: "A: ________? \nB: My name is Ben.",
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
          question: "A: ________? \nB: I'm 13 years old.",
          options: ["A. What’s your name?", "B. How old are you?", "C. Where are you from?", "D. What’s your hobby?"],
          correctAnswer: "B. How old are you?",
        },
        {
          id: 'q4',
          question: "A: What do you like to do? \nB: ________",
          options: ["A. I like pizza.", "B. I like playing football.", "C. I like to sleep.", "D. I like to study."],
          correctAnswer: "B. I like playing football.",
        },
        {
          id: 'q5',
          question: "A: Where are you from? \nB: ________",
          options: ["A. I'm from school.", "B. I'm from home.", "C. I'm from Thailand.", "D. I'm from the shop."],
          correctAnswer: "C. I'm from Thailand.",
        },
      ],
    },
    '2': { // สำหรับ lessonId: '2' (At School)
      title: 'แบบทดสอบ: At School',
      questions: [
        {
          id: 'q1',
          question: "What do students use to write?",
          options: ['A. Book', 'B. Pencil', 'C. Desk', 'D. Chair'],
          correctAnswer: 'B. Pencil',
        },
        {
          id: 'q2',
          question: "Who teaches students at school?",
          options: ['A. Student', 'B. Teacher', 'C. Chef', 'D. Waiter'],
          correctAnswer: 'B. Teacher',
        },
        {
          id: 'q3',
          question: "Where do students study?",
          options: ['A. Restaurant', 'B. Shopping mall', 'C. Classroom', 'D. Park'],
          correctAnswer: 'C. Classroom',
        },
        {
          id: 'q4',
          question: "Which of these is a school supply?",
          options: ['A. Menu', 'B. Receipt', 'C. Notebook', 'D. Bill'],
          correctAnswer: 'C. Notebook',
        },
        {
          id: 'q5',
          question: "What do you sit on in a classroom?",
          options: ['A. Desk', 'B. Book', 'C. Chair', 'D. Pencil'],
          correctAnswer: 'C. Chair',
        },
      ],
    },
    '3': { // สำหรับ lessonId: '3' (At a Restaurant)
      title: 'แบบทดสอบ: At a Restaurant',
      questions: [
        {
          id: 'q1',
          question: "Who takes your food order at a restaurant?",
          options: ['A. Chef', 'B. Customer', 'C. Waiter/Waitress', 'D. Manager'],
          correctAnswer: 'C. Waiter/Waitress',
        },
        {
          id: 'q2',
          question: "What do you read to choose your food?",
          options: ['A. Bill', 'B. Menu', 'C. Receipt', 'D. Book'],
          correctAnswer: 'B. Menu',
        },
        {
          id: 'q3',
          question: "What do you ask for after you finish eating?",
          options: ['A. Menu', 'B. Order', 'C. Bill', 'D. Reservation'],
          correctAnswer: 'C. Bill',
        },
        {
          id: 'q4',
          question: "If the food is very good, you might say it's ________.",
          options: ['A. Bad', 'B. Cold', 'C. Delicious', 'D. Expensive'],
          correctAnswer: 'C. Delicious',
        },
        {
          id: 'q5',
          question: "You make a ________ to secure a table in advance.",
          options: ['A. Order', 'B. Payment', 'C. Reservation', 'D. Tip'],
          correctAnswer: 'C. Reservation',
        },
      ],
    },
    '4': { // สำหรับ lessonId: '4' (Shopping)
      title: 'แบบทดสอบ: Shopping',
      questions: [
        {
          id: 'q1',
          question: "What is the money you pay for an item called?",
          options: ['A. Discount', 'B. Price', 'C. Receipt', 'D. Tip'],
          correctAnswer: 'B. Price',
        },
        {
          id: 'q2',
          question: "Who helps you find clothes in a shop?",
          options: ['A. Customer', 'B. Cashier', 'C. Salesperson', 'D. Chef'],
          correctAnswer: 'C. Salesperson',
        },
        {
          id: 'q3',
          question: "Where do you go to see if clothes fit you?",
          options: ['A. Checkout', 'B. Fitting room', 'C. Restaurant', 'D. School'],
          correctAnswer: 'B. Fitting room',
        },
        {
          id: 'q4',
          question: "What do you get after you buy something, showing proof of purchase?",
          options: ['A. Menu', 'B. Bill', 'C. Receipt', 'D. Order'],
          correctAnswer: 'C. Receipt',
        },
        {
          id: 'q5',
          question: "When an item is cheaper, it has a ________.",
          options: ['A. Price', 'B. Size', 'C. Discount', 'D. Card'],
          correctAnswer: 'C. Discount',
        },
      ],
    },
    '5': { // สำหรับ lessonId: '5' (Job Interview) - อัปเดตข้อมูลใหม่
      title: 'แบบทดสอบ: Job Interview',
      questions: [
        {
          id: 'q1',
          question: "A: ________? \nB: I want to gain experience.",
          options: ["A. What do you like to eat?", "B. Why do you want this job?", "C. How much is your salary?", "D. Where do you live?"],
          correctAnswer: "B. Why do you want this job?",
        },
        {
          id: 'q2',
          question: "A: ________? \nB: My name is Tom. I’m 18 years old.",
          options: ["A. What’s your name?", "B. How old are you?", "C. Tell me about yourself.", "D. Where are you from?"],
          correctAnswer: "C. Tell me about yourself.",
        },
        {
          id: 'q3',
          question: "A: ________? \nB: I’m hard-working and friendly.",
          options: ["A. What’s your hobby?", "B. What is your strength?", "C. Where do you work?", "D. How do you travel?"],
          correctAnswer: "B. What is your strength?",
        },
        {
          id: 'q4',
          question: "A: Can you tell me about yourself? \nB: ________",
          options: ["A. I like pizza.", "B. I’m from Chiang Mai.", "C. I’m 18 and just finished high school.", "D. I don’t like interviews."],
          correctAnswer: "C. I’m 18 and just finished high school.",
        },
        {
          id: 'q5',
          question: "A: Why should we hire you? \nB: ________",
          options: ["A. Because I need a job.", "B. Because I’m responsible and eager to learn.", "C. Because my mom told me.", "D. Because it’s close to my house."],
          correctAnswer: "B. Because I’m responsible and eager to learn.",
        },
      ],
    },
  };

  const currentQuiz = quizData[lessonId];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionSubmitted, setIsOptionSubmitted] = useState(false); // สถานะเพื่อแสดงเฉลย
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Reset quiz state when lessonId changes
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsOptionSubmitted(false);
    setScore(0);
    setShowResult(false);
  }, [lessonId]);

  if (!currentQuiz) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
        <View style={styles.container}>
          <Text style={[styles.errorText, { color: colors.danger }]}>ไม่พบแบบทดสอบสำหรับบทเรียนนี้</Text>
          <TouchableOpacity
            style={[styles.retakeButton, { backgroundColor: colors.primary }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.retakeButtonText}>กลับไปยังบทเรียน</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const handleOptionPress = (option) => {
    if (!isOptionSubmitted) { // อนุญาตให้เลือกได้ถ้ายังไม่ได้กดส่ง
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      Alert.alert('กรุณาเลือกคำตอบ', 'โปรดเลือกหนึ่งตัวเลือกก่อนกดถัดไป');
      return;
    }

    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    if (!isOptionSubmitted) { // ถ้ายังไม่ได้กดส่ง แสดงเฉลยก่อน
      setIsOptionSubmitted(true);
      if (selectedOption === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
    } else { // ถ้ากดส่งแล้ว ไปคำถามถัดไป
      if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsOptionSubmitted(false); // Reset for next question
      } else {
        setShowResult(true);
      }
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsOptionSubmitted(false);
    setScore(0);
    setShowResult(false);
  };

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.container, { backgroundColor: colors.card }]}>
          <Text style={[styles.quizTitle, { color: colors.text }]}>{currentQuiz.title}</Text>

          {showResult ? (
            <View style={[styles.resultContainer, { backgroundColor: colors.background, borderColor: colors.primary }]}>
              <Text style={[styles.resultText, { color: colors.text }]}>แบบทดสอบเสร็จสมบูรณ์!</Text>
              <Text style={[styles.scoreText, { color: colors.primary }]}>คุณได้ {score} คะแนน จาก {currentQuiz.questions.length}</Text>
              <View style={styles.resultButtons}>
                <TouchableOpacity
                  style={[styles.retakeButton, { backgroundColor: colors.accent }]}
                  onPress={handleRetakeQuiz}
                >
                  <Text style={styles.retakeButtonText}>ทำแบบทดสอบอีกครั้ง</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.retakeButton, { backgroundColor: colors.border }]}
                  onPress={() => navigation.goBack()}
                >
                  <Text style={[styles.retakeButtonText, { color: colors.text }]}>กลับไปยังบทเรียน</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.questionContainer}>
              <Text style={[styles.questionNumber, { color: colors.text }]}>
                คำถามที่ {currentQuestionIndex + 1} จาก {currentQuiz.questions.length}
              </Text>
              <Text style={[styles.questionText, { color: colors.text }]}>
                {currentQuestion.question}
              </Text>
              <View style={styles.optionsContainer}>
                {currentQuestion.options.map((option, index) => {
                  const isCorrect = isOptionSubmitted && option === currentQuestion.correctAnswer;
                  const isWrong = isOptionSubmitted && selectedOption === option && option !== currentQuestion.correctAnswer;
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.optionButton,
                        { backgroundColor: colors.background, borderColor: colors.border },
                        selectedOption === option && styles.selectedOption,
                        isCorrect && styles.correctOption,
                        isWrong && styles.wrongOption,
                      ]}
                      onPress={() => handleOptionPress(option)}
                      disabled={isOptionSubmitted} // ปิดการเลือกหลังจากกดส่ง
                    >
                      <Text style={[styles.optionText, { color: colors.text }]}>{option}</Text>
                      {isCorrect && <Ionicons name="checkmark-circle" size={24} color="#28A745" style={styles.feedbackIcon} />}
                      {isWrong && <Ionicons name="close-circle" size={24} color="#DC3545" style={styles.feedbackIcon} />}
                    </TouchableOpacity>
                  );
                })}
              </View>
              <TouchableOpacity
                style={[
                  styles.submitButton,
                  { backgroundColor: selectedOption ? colors.primary : colors.border },
                ]}
                onPress={handleSubmit}
                disabled={selectedOption === null}
              >
                <Text style={styles.submitButtonText}>
                  {isOptionSubmitted
                    ? (currentQuestionIndex === currentQuiz.questions.length - 1 ? 'ดูผลลัพธ์' : 'คำถามถัดไป')
                    : 'ส่งคำตอบ'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    width: '90%',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1, // เพิ่ม border
  },
  quizTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  questionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  questionNumber: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    lineHeight: 26,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
  },
  optionButton: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  selectedOption: {
    backgroundColor: '#FFE5B4', // สีส้มนุ่มๆ เมื่อเลือก
    borderColor: '#FFBB70',
  },
  correctOption: {
    backgroundColor: '#D4EDDA', // สีเขียวอ่อนเมื่อถูก
    borderColor: '#28A745',
  },
  wrongOption: {
    backgroundColor: '#F8D7DA', // สีแดงอ่อนเมื่อผิด
    borderColor: '#DC3545',
  },
  optionText: {
    fontSize: 16,
    flexShrink: 1,
  },
  feedbackIcon: {
    marginLeft: 10,
  },
  submitButton: {
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  resultContainer: {
    alignItems: 'center',
    padding: 25,
    borderRadius: 20,
    width: '100%',
    borderWidth: 2, // เพิ่ม border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  resultButtons: {
    width: '100%',
    alignItems: 'center',
  },
  retakeButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  retakeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
  },
});

export default LessonQuizScreen;