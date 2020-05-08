import React from 'react';
import Icon  from 'react-native-vector-icons/FontAwesome';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Sub = ({icon, text,information}) => {
    return(
        <TouchableOpacity>
        <View style={styles.subProfileComp}>
            <Text style={styles.profileText}>{text}</Text>
            <Icon name={icon} color='black' size={22} style={styles.icon} />  
            </View>
    <Text style={styles.subProfileInfo}>{information}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    subProfileComp:{
        flexDirection:'row',
        marginVertical:10,
        // backgroundColor:'red',
        paddingVertical:5,
        paddingHorizontal:3,
        justifyContent:'space-between',
        borderBottomWidth:3,
        borderColor:'#999999',
    },
    profileText:{
        fontSize:20,
        // marginRight:
    },
    icon:{
        alignItems:'flex-end',
        alignSelf:'flex-end',
        marginRight:10
        //flex-start,flex-end, center, stretch, baseline
    },
    subProfileInfo:{
        color:'#4d4d4d',
        marginTop:-6,
        fontSize:17
    }
})
export default Sub
