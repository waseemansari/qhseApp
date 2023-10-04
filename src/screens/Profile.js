import React from 'react'
import Logo from '../components/HeaderLogo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import {ScrollView, View, Text, StyleSheet } from 'react-native';
import { theme } from '../core/theme'

export default function Profile({ navigation }) {
  return (
    <ScrollView >
      <View style={styles.container} >
        <Text style={styles.headerStyleLeft}>
           <Logo/>
        </Text>
        <Text style={styles.headerStyleRight}>Profile</Text>
        <Header style={styles.fullWidth}>The Company</Header>
        <Paragraph style={styles.text}>
        QHSE International is a leading provider of quality, health, safety & environmental training and consultancy. The team aims to continuously improve internal processes to better protect the health and safety of its employees and sub-contractors, while also minimizing its impact on the environment and to deliver added value services to our clients. The company has a prime service through its highly regarded international trainers and consultants that offer innovative solutions and knowledge transfers. QHSE International commits to innovation, safety at work, ethics and customer-focused values. QHSE International is also certified with is certified according to ISO 9001:2015 and also awarded by NEBOSH as Gold Learning Partner.
        </Paragraph>
        <Header style={styles.fullWidth}>Mision Our Services</Header>
        <Paragraph style={styles.text}>
        Training​

        onsists of highly competent health and safety trainers and have deep and broad knowledge in the field of Occupational Health and Safety based from their experience is truly remarkable. Our Trainers are approved to deliver local and international courses such as:​

        NEBOSH International Diploma, NEBOSH International General Certificate, NEBOSH Technical Certificate in Oil and Gas…..​

        Consultancy
        </Paragraph>
      </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:theme.bgColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,    // Padding at the bottom
    paddingLeft: 20,
  },
  headerStyleLeft: {
    
     color: theme.colors.white,
    paddingTop:5,
    paddingLeft:20,
    // margin:8,
    width:'50%',
    height:170,
  
  },
  headerStyleRight: {
    fontSize:25,
     color: theme.colors.white,
    width:'50%',
    height:30,
    textAlign:'center',
    alignItems: 'center',
    flex: 1,
    
  },
  fullWidth: {
    width:'100%',
    height:50,
     color: theme.colors.white,
    fontSize:25,
    borderBottomColor: '#fff',
    borderBottomWidth: 3,
    
  },
  text:{
    fontSize:15,
    paddingTop:8,
     color: theme.colors.white,
    paddingBottom:20,
  }
 
});

