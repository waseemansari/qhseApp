import React from 'react'
import Logo from '../components/HeaderLogo'
import Header from '../components/Header'
import {ScrollView, View, Text, StyleSheet,TouchableOpacity,Linking  } from 'react-native';
import { theme } from '../core/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function ContactUs({ navigation }) {
  const handleWhatsAppPressUae = () => {
    const phoneNumber = '0553557473'; // Replace with the recipient's phone number
    const message = 'Hello, this is a test message.';
    const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    Linking.openURL(whatsappLink).catch(err => console.error('An error occurred', err));
  };
  const handlePhonePressUae = () => {
    const phoneNumber = '044431124'; // Replace with the phone number you want to dial
    const telLink = `tel:${phoneNumber}`;
    Linking.openURL(telLink).catch(err => console.error('An error occurred', err));
  };
  const handleEmailPressUae = () => {
    const emailAddress = 'info@qhseinternational.com'; // Replace with the recipient's email address
    const subject = 'Subject of the email'; // Replace with your subject
    const body = 'Body of the email'; // Replace with your email body
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    Linking.openURL(mailtoLink).catch(err => console.error('An error occurred', err));
  };
  const handleWhatsAppPressPhi = () => {
    const phoneNumber = '639696443444'; // Replace with the recipient's phone number
    const message = 'Hello, this is a test message.';
    const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    Linking.openURL(whatsappLink).catch(err => console.error('An error occurred', err));
  };
  const handlePhonePressPhi = () => {
    const phoneNumber = '639696443444'; // Replace with the phone number you want to dial
    const telLink = `tel:${phoneNumber}`;
    Linking.openURL(telLink).catch(err => console.error('An error occurred', err));
  };
  const handleEmailPressPhi = () => {
    const emailAddress = 'peterjj@qhseinternational.com'; // Replace with the recipient's email address
    const subject = 'Subject of the email'; // Replace with your subject
    const body = 'Body of the email'; // Replace with your email body
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    Linking.openURL(mailtoLink).catch(err => console.error('An error occurred', err));
  };
  const handleWhatsAppPressPk = () => {
    const phoneNumber = '923254847676'; // Replace with the recipient's phone number
    const message = 'Hello, this is a test message.';
    const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    Linking.openURL(whatsappLink).catch(err => console.error('An error occurred', err));
  };
  const handlePhonePressPk = () => {
    const phoneNumber = '924236524040'; // Replace with the phone number you want to dial
    const telLink = `tel:${phoneNumber}`;
    Linking.openURL(telLink).catch(err => console.error('An error occurred', err));
  };
  const handleEmailPressPk = () => {
    const emailAddress = 'kiran@qhseinternational.com'; // Replace with the recipient's email address
    const subject = 'Subject of the email'; // Replace with your subject
    const body = 'Body of the email'; // Replace with your email body
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    Linking.openURL(mailtoLink).catch(err => console.error('An error occurred', err));
  };
  return (
    <ScrollView >
      <View style={styles.container} >
        <Text style={styles.headerStyleLeft}>
           <Logo/>
        </Text>
        <Text style={styles.headerStyleRight}>Contact Us</Text>
       
            <Header style={styles.fullWidthMain}>UAE</Header>
            <Text style={styles.fullWidth}>Whatsapp :
                <TouchableOpacity onPress={handleWhatsAppPressUae} style={styles.button} >
                    <Text style={styles.link}> 0553557473</Text>
                </TouchableOpacity>
            </Text>
            <Text style={styles.fullWidth}>Phone :
                <TouchableOpacity onPress={handlePhonePressUae} style={styles.button} >
                    <Text style={styles.link}> 044431124</Text>
                </TouchableOpacity>
            </Text>
            <Text style={styles.fullWidth}>Email :
                <TouchableOpacity onPress={handleEmailPressUae} style={styles.button} >
                    <Text style={styles.link}>info@qhseinternational.com</Text>
                </TouchableOpacity>
            </Text>
            {/* phonehpine */}
            <Header style={styles.fullWidthMain}>Phlippines</Header>
            <Text style={styles.fullWidth}>Whatsapp  :
                <TouchableOpacity onPress={handleWhatsAppPressPhi} style={styles.button} >
                    <Text style={styles.link}>  +63 969 644 3444</Text>
                </TouchableOpacity>
                
            </Text>
            <Text style={styles.fullWidth}>Phone :
                <TouchableOpacity onPress={handlePhonePressPhi} style={styles.button} >
                    <Text style={styles.link}> +63 969 644 3444 </Text>
                </TouchableOpacity>
            </Text>
            <Text style={styles.fullWidth}>Email :
                <TouchableOpacity onPress={handleEmailPressPhi} style={styles.button} >
                    <Text style={styles.link}>peterjj@qhseinternational.com</Text>
                </TouchableOpacity>
            </Text>
            {/* pakistan */}
            <Header style={styles.fullWidthMain}>Pakistan</Header>
            <Text style={styles.fullWidth}>Whatsapp  :
                <TouchableOpacity onPress={handleWhatsAppPressPk} style={styles.button} >
                    <Text style={styles.link}>+92 325 4847676</Text>
                </TouchableOpacity>
                
            </Text>
            <Text style={styles.fullWidth}>Phone :
                <TouchableOpacity onPress={handlePhonePressPk} style={styles.button} >
                    <Text style={styles.link}> +92 4236524040</Text>
                </TouchableOpacity>
            </Text>
            <Text style={styles.fullWidth}>Email :
                <TouchableOpacity onPress={handleEmailPressPk} style={styles.button} >
                    <Text style={styles.link}>kiran@qhseinternational.com</Text>
                </TouchableOpacity>
            </Text>
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
  fullWidthMain: {
    width:'100%',
    height:50,
     color: theme.colors.white,
    fontSize:25,
    borderBottomColor: '#fff',
    borderBottomWidth: 3,
    
  },
  fullWidth: {
    width:'100%',
    height:50,
     color: theme.colors.white,
    fontSize:15,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    
  },
  text:{
    fontSize:15,
    paddingTop:8,
     color: theme.colors.white,
    paddingBottom:20,
    lineHeight: 24,
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

