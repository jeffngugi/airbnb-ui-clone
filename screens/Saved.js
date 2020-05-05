import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Location from '../components/Saved/Location';
const Saved = () => {
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Saved</Text>
            </View>
        <Location />
        <Location />
        <Location />
           
        </ScrollView>
        
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

export default Saved
