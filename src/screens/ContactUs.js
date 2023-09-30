import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'

export default function ContactUs({ navigation }) {
  return (
    <Background>
     
      <Header>Let’s start</Header>
      <Paragraph style={{ color:'#ffffff'}}>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
    
    </Background>
  )
}
