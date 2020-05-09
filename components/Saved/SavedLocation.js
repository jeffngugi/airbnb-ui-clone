import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Tag from '../reusables/Tag';
import SingleSaved from './SingleLocation';


const SavedLocation = ({navigation}) => {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Kikuyu, Kiambu County, Kenya</Text>
        </View>
        <View style={{flexDirection:'row', marginHorizontal:20, position:'relative',top:10}}>
                    <Tag name='Select dates' background='white' border='#4d4d4d'/>
                    <Tag name='1 guest' background='skyblue' border='#dddddd' color='white'/>
          </View>
        <Text style={styles.subHeader}>2 available stays</Text>
        <SingleSaved name='Entire Appartment' cost={4} location='Ngong View Appartment' rating={3} navigation={navigation}/>
        <SingleSaved name='Entire Condor' cost={4} location='Karen Ridge Road' rating={2} navigation={navigation}/>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20,
    marginTop:15,
  },
  header:{
    marginBottom:3
  },
  headerText:{
    fontSize:32,
    fontWeight:'bold',
    color:'#4d4d4d'
  },
  subHeader:{
    fontSize:26,
    color:'#4d4d4d',
    fontWeight:'bold',
    marginVertical:24
  },
  
})

export default SavedLocation
