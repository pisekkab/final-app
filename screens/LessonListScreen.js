import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

const LessonListScreen = ({ navigation }) => {
  // Updated lessons array to match the image content
  const lessons = [
    {
      id: '1',
      title: 'New Friends',
      image: require('../assets/images/new_friends.png'), // Placeholder, replace with actual path
      // Removed description, duration, level as they are not in the image
    },
    {
      id: '2',
      title: 'At School',
      image: require('../assets/images/at_school.png'), // Placeholder, replace with actual path
    },
    {
      id: '3',
      title: 'At a Restaurant',
      image: require('../assets/images/at_restaurant.png'), // Placeholder, replace with actual path
    },
    {
      id: '4',
      title: 'Shopping',
      image: require('../assets/images/shopping.png'), // Placeholder, replace with actual path
    },
    {
      id: '5',
      title: 'Job Interview',
      image: require('../assets/images/job_interview.png'), // Placeholder, replace with actual path
    },
  ];

  const renderLessonItem = ({ item }) => (
    <TouchableOpacity
      style={styles.lessonCard}
      onPress={() =>
        navigation.navigate('LessonDetail', {
          id: item.id,
          title: item.title,
          lesson: item, // Pass the whole item for detail screen
        })
      }
    >
      <Image source={item.image} style={styles.lessonIcon} />
      <Text style={styles.lessonTitle}>{item.title}</Text>
      {/* Removed description, duration, and level display */}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Removed header and subheader text */}

      <FlatList
        data={lessons}
        renderItem={renderLessonItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Changed to white background based on the image
    padding: 16,
  },
  // Removed headerText and subheaderText styles as they are no longer used

  listContainer: {
    paddingBottom: 20,
    paddingTop: 10, // Added some top padding to separate from top edge
  },
  lessonCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10, // Slightly rounded corners
    marginBottom: 15, // Space between cards
    padding: 15,
    flexDirection: 'row', // Arrange icon and text in a row
    alignItems: 'center', // Center items vertically
    borderColor: '#ADD8E6', // Light blue border color from the image
    borderWidth: 2, // Border width
    // Removed shadow/elevation to match the flat design in the image
  },
  lessonIcon: {
    width: 40,  // Icon size
    height: 40, // Icon size
    marginRight: 15, // Space between icon and text
    resizeMode: 'contain', // Ensure the icon fits
  },
  lessonTitle: {
    fontSize: 18,
    color: '#000000', // Black text color
    fontWeight: 'normal', // Normal font weight as in the image
    flex: 1, // Allow text to take up remaining space
  },
  // Removed lessonImage, lessonContent, lessonDescription, lessonMeta, metaItem, metaText,
  // levelText, beginnerLevel, intermediateLevel, advancedLevel as they are not relevant to the new design
});

export default LessonListScreen;