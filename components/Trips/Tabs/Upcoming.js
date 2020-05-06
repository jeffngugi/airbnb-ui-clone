import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import Btn from '../../reusables/Btn';
import NoTrips from '../NoTrips';


const Upcoming = () => {
    return (
       <NoTrips notripsinfo="When you are ready to plan your next trip, we're here to help"/>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'white',
        resizeMode:'cover'
    }
})

export default Upcoming
