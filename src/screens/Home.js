import React from 'react'
import Logo from '../components/HeaderLogo'
import {ScrollView, View, Text, StyleSheet,Image,TouchableOpacity,Linking } from 'react-native';
import { theme } from '../core/theme'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header'
import Button from '../components/Button'

export default function Home({ navigation }) {
  const videoLink = () => {
    const url = 'https://www.youtube.com/@qhseinternational8630/videos';
    Linking.openURL(url);
  };
  
  return (
    <ScrollView style={{backgroundColor:theme.bgColor}}>
      <View style={styles.container} >
        <Text style={styles.headerStyleLeft}>
           <Logo/>
        </Text>
        <Text style={styles.headerStyleRight}>
          <Image source={require('../assets/pic.jpeg')} style={styles.image} />
        </Text>
       
      </View>
      <Header style={styles.fullWidth}>Home</Header>
      <View style={styles.container} >
        <Text style={styles.contentRightSection}>
            <Icon name='laptop' size={60} color={theme.colors.primary} />
        </Text>
        <Text style={styles.contentLeftSection}>
          <Button
            style={styles.button}   
            onPress={() => navigation.navigate('Courses')}
          >
         <Text style={styles.text}>Courses</Text>
        </Button>
        </Text>

      </View>
      <View style={styles.container} >
        <Text style={styles.contentRightSection}>
            <Icon name='tasks' size={60} color={theme.colors.primary} />
        </Text>
        <Text style={styles.contentLeftSection}>
          <Button
            style={styles.button}   
            onPress={() => navigation.navigate('Consultanc')}
          >
         <Text style={styles.text}>Consultancy</Text>
        </Button>
        </Text>
      </View>
      <View style={styles.container} >
        <Text style={styles.contentRightSection}>
            <Icon name='credit-card' size={60} color={theme.colors.primary} />
        </Text>
        <Text style={styles.contentLeftSection}>
              <Button
                style={styles.button}   
                onPress={() => navigation.navigate('OfferAndPackage')}
              >
                <Text style={styles.text}>Packages​</Text>
              </Button>
        </Text>
      </View>
      <View style={styles.container} >
        <Text style={styles.contentRightSection}>
            <Icon name='camera' size={60} color={theme.colors.primary} />
        </Text>
        <Text style={styles.contentLeftSection}>
          <TouchableOpacity onPress={videoLink} style={styles.button} >
            <Text style={styles.buttonText}> Videos​</Text>
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
        // Padding at the bottom
    padding: 10,
    
  },
  fullWidth: {
    width:'100%',
    height:50,
     color: theme.colors.white,
    fontSize:25,
    borderBottomColor: '#fff',
    borderBottomWidth: 3,
    padding:10,
  },
  headerStyleLeft: {
    color: theme.colors.white,
    paddingTop:5,
    paddingLeft:20,
    width:'50%',
    height:170,
  },
  headerStyleRight: {
    color: theme.colors.white,
    width:'50%',
    height:100,
    textAlign:'center',
    alignItems: 'center',
    flex: 1,
    
  },
 
  image: {
    width: 70,
    height: 70,
  },
  contentLeftSection:{
    color: theme.colors.white,
    paddingTop:5,
    paddingLeft:1,
    width:'40%',
   
  },
  contentRightSection:{
   
    color: theme.colors.white,
    width:'60%',
    textAlign:'center',
    alignItems: 'center',
    
  },
  
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.white,
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

