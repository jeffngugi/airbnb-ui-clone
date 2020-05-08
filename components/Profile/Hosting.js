import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SubComponent from './Sub';



const Hosting = () => {
    return (
    <View style={styles.subProfile}>
        <Text style={styles.subTitle}>HOSTING</Text>
        <View style={styles.subProfileBody}>
            <SubComponent icon='safari' text='Swith to hosting'/>
            <SubComponent icon='leaf' text='Host an experience'/>
           
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

export default Hosting
