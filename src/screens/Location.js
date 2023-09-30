import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function Location({ navigation }) {
  return (
    <Background>
      
    
      <Header>WELCOME</Header>
      
     
    </Background>
  )
}
