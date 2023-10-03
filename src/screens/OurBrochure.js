import React from 'react'
import Logo from '../components/HeaderLogo'
import Header from '../components/Header'
import { View, Text, StyleSheet,TouchableOpacity,Linking  } from 'react-native';
import { theme } from '../core/theme'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator(); 
const handleLinkPress = () => {
  const url = 'https://www.qhseinternational.com/qhse-international-brochures/';
  Linking.openURL(url);
};

export default function OurBrochure({ navigation }) {
  return (
  
      <View style={styles.container} >
        <Text style={styles.headerStyleLeft}>
           <Logo/>
        </Text>
        <Text style={styles.headerStyleRight}>Our Brochure</Text>
        <Header style={styles.fullWidth}>Our Brochure</Header>
          <TouchableOpacity onPress={handleLinkPress} style={styles.button} >
            <Text style={styles.text}>Open Brochures</Text>
          </TouchableOpacity>
      </View>
   
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
    textAlign:'center',
    marginTop:'20%',
    borderBottomColor: theme.colors.white, 
    borderBottomWidth: 3,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  
 
});

