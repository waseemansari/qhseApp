import React from 'react'
import Logo from '../components/HeaderLogo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import {ScrollView, View, Text, StyleSheet,TouchableOpacity,Linking } from 'react-native';
import { theme } from '../core/theme'

export default function Location({ navigation }) {
  const uaeGoogleLocation = () => {
    const latitude = '25.189250'; // Replace with the desired latitude
    const longitude = '55.271310'; // Replace with the desired longitude
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(mapsLink).catch(err => console.error('An error occurred', err));
  };
  const phGoogleLocation = () => {
    const latitude = '14.587558'; // Replace with the desired latitude
    const longitude = '121.109261'; // Replace with the desired longitude
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(mapsLink).catch(err => console.error('An error occurred', err));
  };
  const pkGoogleLocation = () => {
    const latitude = '31.561920'; // Replace with the desired latitude
    const longitude = '74.348080'; // Replace with the desired longitude
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(mapsLink).catch(err => console.error('An error occurred', err));
  };
  return (
    <ScrollView >
      <View style={styles.container} >
        <Text style={styles.headerStyleLeft}>
           <Logo/>
        </Text>
        <Text style={styles.headerStyleRight}>Location</Text>

        <Header style={styles.fullWidth}>UAE</Header>
        <Paragraph style={styles.text}>
           UAE: 1805 Opal Tower, Burj Khalifa St.​ Business bay, Dubai, UAE
        </Paragraph>
        <TouchableOpacity onPress={uaeGoogleLocation} style={styles.button} >
            <Text style={styles.link}> Google Map</Text>
        </TouchableOpacity>
        
        <Header style={styles.fullWidth}>Philippines</Header>
        <Paragraph style={styles.text}>
             Robinsons Cyberscape Gamma, Ruby and Topaz Rd, Ortigas Center, Pasig City   
        </Paragraph>
        <TouchableOpacity onPress={phGoogleLocation} style={styles.button} >
            <Text style={styles.link}> Google Map</Text>
        </TouchableOpacity>
        
        <Header style={styles.fullWidth}>Pakistan</Header>
        <Paragraph style={styles.text}>
            House# 35S17 Hanif Park, Harbanspura Lahore, Pakistan.
        </Paragraph>
        <TouchableOpacity onPress={pkGoogleLocation} style={styles.button} >
            <Text style={styles.link}> Google Map</Text>
        </TouchableOpacity>
        
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
  },
  link:{
    fontSize:15,
    paddingTop:8,
    color: 'blue',
    paddingBottom:5,
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  }
 
});

