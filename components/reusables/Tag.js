import React from 'react';
import {View, Text} from 'react-native';

const Tag = ({name, background, border, color}) => {
    color?color:'black'
    return (
        <View style={{minHeight:20, minWidth:40, padding:6, backgroundColor:background, borderColor:border, borderWidth:0.2, borderRadius:10, marginHorizontal:4}}>
            <Text style={{fontWeight:'700', fontSize:11, color}}>{name} </Text>
        </View>
    )
}

export default Tag
