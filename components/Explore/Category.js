import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Category = ({name, imageUri}) => {
    return (
        <TouchableOpacity style={{height:130, width:130, marginLeft:20, borderWidth:0.5, borderColor:'#dddddd'}} >
                <View style={{flex:2}}>
                    <Image source={imageUri} style={{flex:1, width:null, height:null, resizeMode:'cover'}}/>
                </View>
                <View style={{flex:1, paddingTop:10, paddingLeft:10}}>
                    <Text>{name}</Text>
                </View>
            
        </TouchableOpacity>
    )
}

export default Category
