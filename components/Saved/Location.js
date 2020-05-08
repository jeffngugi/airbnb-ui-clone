import React from 'react';
import {Image, View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const Location = () => {
    return (
        <TouchableOpacity style={styles.itemSaved}>
        <View style={{flex:2}}>
            <Image source={require('../../assets/home.jpg')}  style={styles.itemImage} />
        </View>
        <View style={{flex:1, alignItems:'flex-start', justifyContent:'space-evenly', marginLeft:10}}>
            <Text style={{fontWeight:'700', color:'grey'}}>Anytime</Text>
            <Text style={{fontWeight:'bold', color:'black'}}>Kitengela</Text>
            <Text style={{fontWeight:'700', color:'grey'}}>1 stay</Text>
        </View>
    </TouchableOpacity>
    )
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    itemSaved:{
        marginVertical:10,
        marginTop:20,
        height: width-105,
        borderColor:'#dddddd', 
        borderWidth:0.5, 
        backgroundColor:'white', 
        borderRadius:25,
        elevation:7
    },
    itemImage:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'cover'
    }
})

export default Location
