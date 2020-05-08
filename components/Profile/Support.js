import React from 'react';
import SubComponent from './Sub';
import {View, Text, StyleSheet} from 'react-native';


const Support = () => {
    return (
    <View style={styles.subProfile}>
        <Text style={styles.subTitle}>SUPPORT</Text>
        <View style={styles.subProfileBody}>
            <SubComponent icon='plus-circle' text='Safety Center' information='Get the support, tools, and information you need to be safe'/>
            <SubComponent icon='arrow-circle-down' text='Contact Neighbourhood Sup..' information='Let our team know about concerns related to home sharing activity in your area'/>
            <SubComponent icon='arrow-circle-down' text='Get Help'/>
            <SubComponent icon='envelope' text='Give us feedback'/>

        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    subProfile:{
        marginTop:20
    },
    subTitle:{
        fontSize:20,
        color:'gray'
    },

})

export default Support
