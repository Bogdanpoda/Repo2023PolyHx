import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet, ActivityIndicatorComponent} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Pages/Home';
import CompanyProfile from '../Pages/CompanyProfile';
import Suggestion from '../Pages/Suggestion';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserProfile from '../Pages/UserProfile';

const Tab = createBottomTabNavigator();


export default function NavBar({route}:{route:any}){

    const SuggestionScreen = ()=>{


        return <Suggestion></Suggestion>
    }


    const ProfileScreen = () => {
        return <CompanyProfile></CompanyProfile>;
      };
    
      const HomeScreen = () => {
        return <HomePage></HomePage>;
      };

    return(
        <Tab.Navigator screenOptions={({ route }) => ({
        tabBarLabel:() => {return null},
            
          
          tabBarIcon: ({ focused, color}) => {
            let iconName;
    
            if (route.name === 'HomeScreen') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            } else if (route.name === 'Inbox') {
              iconName = focused ? 'folder' : 'folder-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
    
            // You can return any component that you like here!
            return <Ionicons size={30} name={iconName} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          
          tabBarStyle: {
            backgroundColor: "white",
        }
        })}>
          
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
            <Tab.Screen name="Messages" component={ProfileScreen} options={{headerShown:false}}/>
            <Tab.Screen name="Inbox" component={UserProfile} options={{headerShown:false}}/>
          </Tab.Navigator>
    )
}