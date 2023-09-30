import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  AboutUs,
  ContactUs,
  Location,
  OurBrochure
} from './src/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BottomNav"
          screenOptions={{
            headerShown: false,
          }}
        >
          
          <Stack.Screen name="bottom" 
          screenOptions={{
            headerShown: false,
          }} component={BottomNav} />

          <Stack.Screen screenOptions={{
            headerShown: false,
          }}
          name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
function BottomNav(){

const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'rocket'; // Icon name for Screen1
        }
         else if (route.name === 'About Us') {
          iconName = 'users'; // Icon name for Screen2
        }
        else if (route.name === 'Our Brochure') {
          iconName = 'book'; // Icon name for Screen2
        }
        else if (route.name === 'Contact Us') {
          iconName = 'phone'; // Icon name for Screen2
        }
        else if (route.name === 'Location') {
          iconName = 'map-marker'; // Icon name for Screen2
        }
        // Add more conditions for additional screens and icons

        return <Icon name={iconName} size={size} color='yellow' />;
      },
    })}
  >
       <Tab.Screen
          options={{ headerShown: false }}
          name="Home" component={StartScreen}
       />
       <Tab.Screen
          options={{ headerShown: false }}
          name="About Us" component={AboutUs}
       />
       <Tab.Screen
          options={{ headerShown: false }}
          name="Our Brochure" component={OurBrochure}
       />
       <Tab.Screen
          options={{ headerShown: false }}
          name="Contact Us" component={ContactUs}
       />
       <Tab.Screen
        options={{ headerShown: false }}
         name="Location" component={Location}
       />
   
    </Tab.Navigator>
  );
}
