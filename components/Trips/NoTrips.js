import React from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';
import Btn from '../reusables/Btn';

const {width} = Dimensions.get('window');

const NoTrips = ({notripsinfo}) =>(
    <View style={styles.container}>
        <Text style={{fontSize:17, fontWeight:'600', color:'#4d4d4d'}}>
             {notripsinfo}
        </Text>
        <View style={{width:width, height:width-20, marginTop:10}}>
            <Image source={require('../../assets/notrip.png')} style={{width:null, height:null, resizeMode:'cover', flex:1}}/>
        </View>
       <Btn title='Learn More'/>
       <View
        style={{
            borderBottomColor: '#808080',
            borderBottomWidth: 1.5,
            marginVertical:5,
            marginHorizontal:20
        }}
        />
        <Text
            style={{fontSize:15, fontWeight:'600', fontFamily:'Roboto', marginBottom:15}}
        >
            Can't find your reservation here? Visit the Help Center. 
            
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'white',
        resizeMode:'cover'
    }
})
export default NoTrips
