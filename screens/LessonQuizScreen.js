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
          question: "A:________? \nB: My name is Ben.",
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
          question: "A:________? \nB: I’m 13 years old.",
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

  const currentQuiz = quizData[lessonId];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Reset state when lessonId changes
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    navigation.setOptions({ title: `🧠 ${lessonTitle || 'Quiz Time'}` });
  }, [lessonId, lessonTitle, navigation]);

  if (!currentQuiz) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Quiz content not found for this lesson.</Text>
      </SafeAreaView>
    );
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === currentQuiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option for next question
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {!showResult ? (
          <View style={styles.quizContainer}>
            <Text style={styles.quizTitle}>{currentQuiz.title}</Text>
            <View style={styles.questionContainer}>
              <Text style={styles.questionNumber}>
                Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}
              </Text>
              <Text style={styles.questionText}>{currentQuestion.question}</Text>
            </View>

            <View style={styles.optionsContainer}>
              {currentQuestion.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedOption === option && styles.selectedOptionButton,
                  ]}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              disabled={selectedOption === null} // Disable if no option is selected
            >
              <Text style={styles.submitButtonText}>
                {currentQuestionIndex < currentQuiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Quiz Completed!</Text>
            <Text style={styles.scoreText}>
              Your Score: {score} / {currentQuiz.questions.length}
            </Text>
            <TouchableOpacity style={styles.restartButton} onPress={handleRestartQuiz}>
              <Text style={styles.restartButtonText}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backToLessonsButton}
              onPress={() => navigation.popToTop()} // Go back to the first screen (Home or LessonList)
            >
              <Text style={styles.backToLessonsButtonText}>Back to Lessons</Text>
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
    backgroundColor: '#F8F8FF', // Ghost White
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  quizContainer: {
    width: '100%',
    maxWidth: 600, // จำกัดความกว้างเพื่อให้อ่านง่าย
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 20, // โค้งมนมากขึ้น
    padding: 25,
    shadowColor: '#A0BBE2',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  quizTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6A5ACD', // Slate Blue
    marginBottom: 25,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 25,
    backgroundColor: '#E0EFFF', // Alice Blue
    borderRadius: 15,
    padding: 20,
  },
  questionNumber: {
    fontSize: 16,
    color: '#778899', // Light Slate Gray
    marginBottom: 10,
    fontWeight: '500',
  },
  questionText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#4A4A6A',
    lineHeight: 28,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#F0F8FF', // Alice Blue light
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#D3DDF4', // Lavender Blue
    flexDirection: 'row', // จัดเรียงข้อความ
    alignItems: 'center',
  },
  selectedOptionButton: {
    backgroundColor: '#D3DDF4', // Lavender Blue when selected
    borderColor: '#A0BBE2', // Periwinkle border when selected
  },
  optionText: {
    fontSize: 17,
    color: '#4A4A6A',
    flexShrink: 1,
  },
  submitButton: {
    backgroundColor: '#A0BBE2', // Periwinkle
    paddingVertical: 15,
    borderRadius: 15, // โค้งมน
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#A0BBE2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 7,
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 19,
    letterSpacing: 0.7,
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 50,
    padding: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '100%',
    maxWidth: 500,
    shadowColor: '#A0BBE2',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  resultText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6A5ACD',
    marginBottom: 15,
  },
  scoreText: {
    fontSize: 22,
    color: '#3CB371', // Medium Sea Green for score
    fontWeight: 'bold',
    marginBottom: 30,
  },
  restartButton: {
    backgroundColor: '#A0BBE2', // Periwinkle
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 10,
    shadowColor: '#A0BBE2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  restartButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },
  backToLessonsButton: {
    backgroundColor: '#D3DDF4', // Lavender Blue
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 15,
    shadowColor: '#D3DDF4',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  backToLessonsButtonText: {
    color: '#4A4A6A',
    fontWeight: 'bold',
    fontSize: 17,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#FF6347',
  },
});

export default LessonQuizScreen;