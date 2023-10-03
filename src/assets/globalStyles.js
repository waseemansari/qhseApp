import { StyleSheet } from 'react-native';
import { theme } from '../core/theme'
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