import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

const {width} = Dimensions.get('window');

const Inbox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Inbox</Text>
            <Text style={styles.headerinfo}>Messages from your host will appear here</Text>
            <View style={styles.img}>
                <Image source={require('../assets/chat.png')} style={{width:null, height:null, resizeMode:'cover', flex:1}}/>
            </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        paddingHorizontal:25,
        marginBottom:14
    },
    header:{
        marginVertical:22
    },
    headerText:{
        fontFamily:'Roboto',
        fontSize:30,
        fontWeight:'bold',
        color:'#4d4d4d'
    },
    headerinfo:{
        fontFamily:'Roboto',
        fontSize:20,
        fontWeight:'800',
        color:'#4d4d4d',
        marginTop:10
    },
    img:{
        width:width-50,
        height:width,
        marginTop:15,
        elevation:2
    }
})

export default Inbox
