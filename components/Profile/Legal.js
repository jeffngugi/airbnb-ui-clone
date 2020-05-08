import React from 'react';
import SubComponent from './Sub';
import {View, Text, StyleSheet} from 'react-native';


const Legal = () => {
    return (
    <View style={styles.subProfile}>
        <Text style={styles.subTitle}>LEGAL</Text>
        <View style={styles.subProfileBody}>
            <SubComponent icon='safari' text='Swith to hosting'/>
            <SubComponent  text='Logout'/>
            <SubComponent icon='leaf' text='Switch account'/>
           
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

export default Legal
