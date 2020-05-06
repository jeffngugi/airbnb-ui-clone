import React from 'react'
import {TouchableOpacity, Text} from 'react-native';

const Btn = ({title}) => {
    return (
        <TouchableOpacity
        style={{
            backgroundColor:'black',
            paddingHorizontal:15,
            paddingVertical:15,
            alignItems:'center',
            justifyContent:'center',
            marginHorizontal:5,
            borderRadius:10,
            marginBottom:10
        }}
    >
        <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>{title}</Text>
    </TouchableOpacity>
    
    )
}

export default Btn
