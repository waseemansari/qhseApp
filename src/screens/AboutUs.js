import React from 'react'
import Background from '../components/Background'
import Logo from '../components/HeaderLogo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import { View, Text, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function AboutUs({ navigation }) {
  return (
      
      <>
      <View style={{ backgroundColor: "#7cb48f", flex: 1 }} />
      <View style={{ backgroundColor: "#7CA1B4", flex: 3 }} />
    </>
  
    
  )
};
const styles = StyleSheet.create({
  container: {
   
    backgroundColor:'#7cb48f',
    flex: 1,
 
  },
  column: {
    flex: 1,
    width: '50%',
    backgroundColor: '#eee',
  },
 
});

