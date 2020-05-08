import React from 'react';
import SubComponent from './Sub';
import {View, Text, StyleSheet} from 'react-native';


const AccountSetting = () => {
    return (
    <View style={styles.subProfile}>
        <Text style={styles.subTitle}>ACCOUNT SETTINGS</Text>
        <View style={styles.subProfileBody}>
            <SubComponent icon='user' text='Personal Information'/>
            <SubComponent icon='credit-card' text='Payments and payouts'/>
            <SubComponent icon='bell' text='Notifications'/>
            <SubComponent icon='hotel' text='Travel for work'/>

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

export default AccountSetting
