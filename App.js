import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View, Text} from 'react-native'
import Saved from './screens/Saved';
import Inbox from './screens/Inbox';
import Trips from './screens/Trips';
import Explore from './screens/Explore';
import Profile from './screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  useEffect(() => {
    //write Code to Perform async here...
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer style={styles.conntainer}>
      <Tab.Navigator
        initialRouteName={Explore }
        tabBarOptions={{
          activeTintColor:'red',
          inactiveTintColor:'grey',
          style:{
            backgroundColor:'white',
            borderTopWidth:0,
            shadowColor:'black',
            shadowOpacity:0.5,
            elevation:5,
            shadowOffset:{width:5, height:3}
          }
        }}
      >
      <Tab.Screen name="Explore" component={Explore} 
         options={{
          tabBarLabel: 'EXPLORE',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size}/>
          ),
        }}
      />
        <Tab.Screen name="Saved" component={Saved} 
             options={{
            tabBarLabel: 'SAVED',
            tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size}/>
          ),
        }}
        />
        <Tab.Screen name="Trips" component={Trips} 
          options={{
          tabBarLabel: 'TRIPS',
          tabBarIcon: ({ color, size }) => (
            <Icon name="car" color={color} size={size}/>
          ),
        }}
        />
        <Tab.Screen name="Inbox" component={Inbox} 
         options={{
          tabBarLabel: 'INBOX',
          tabBarIcon: ({ color, size }) => (
            <Icon name="inbox" color={color} size={size}/>
          ),
        }}
        />
        <Tab.Screen name="Profile" component={Profile} 
         options={{
          tabBarLabel: 'PROFILES',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size}/>
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  conntainer:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})
export default App
