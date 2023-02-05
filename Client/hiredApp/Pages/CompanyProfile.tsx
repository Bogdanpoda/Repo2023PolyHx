import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet,FlatList} from 'react-native';
import StarRating from 'react-native-star-rating';

const jobData = [
    { id: '1', title: 'Software Engineer', company: 'Google' },
    { id: '2', title: 'Product Manager', company: 'Facebook' },
    { id: '3', title: 'Data Scientist', company: 'Apple' },
    { id: '4', title: 'UX Designer', company: 'Amazon' },
    { id: '5', title: 'DevOps Engineer', company: 'Microsoft' },
    { id: '6', title: 'Full Stack Developer', company: 'Uber' },
    { id: '7', title: 'AI Engineer', company: 'Tesla' },
    { id: '8', title: 'Data Analyst', company: 'Netflix' },
    { id: '9', title: 'Mobile Developer', company: 'Dropbox' },
    { id: '10', title: 'Cloud Engineer', company: 'Airbnb' },
  ];

export default function CompanyProfile(){

    return(
        <View style={styles.container}>
        <FlatList
          data={jobData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.suggestionContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.company}>{item.company}</Text>
            </View>
          )}
        />
      </View>
    )



}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    suggestionContainer: {
      marginBottom: 16,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    company: {
      color: 'gray',
      fontSize: 14,
    },
  });