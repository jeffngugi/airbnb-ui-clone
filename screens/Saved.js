import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import Locations from '../components/Saved/Locations';
import {createStackNavigator} from '@react-navigation/stack';
import SavedLocation from '../components/Saved/SavedLocation';
import SavedHome from '../components/Saved/SavedHome';

const Stack = createStackNavigator();

const Saved = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Saved</Text>
            </View>
        <Locations navigation={navigation}/>
        <Locations navigation={navigation}/>
        <Locations navigation={navigation}/>
           
        </ScrollView>
        
    )
}


const SavedStack = ()=>{
    return(
        <Stack.Navigator>
          <Stack.Screen name='Saved' component={Saved} />
          <Stack.Screen name='SavedLocation' component={SavedLocation} />
          <Stack.Screen name='SavedHome' component={SavedHome} /> 
        </Stack.Navigator>

    )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:25,
        marginBottom:14
    },
    header:{
        marginTop:25
    },
    headerText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000d00'
    },
    

})

export default SavedStack;
