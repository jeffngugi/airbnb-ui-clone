import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

const {width} = Dimensions.get('window');

const SingleLocation = ({size, name, cost, rating, navigation}) => {
    return (
        <TouchableOpacity 
            style={styles.savedLcation}
            onPress={() => {
                navigation.navigate('SavedHome');
              }}
        >
          <View style={{flex:2}}><Image source={require('../../assets/home.jpg')} style={styles.itemImage}/></View>
          <View style={{flex:0.8, marginTop:4, alignItems:'flex-start'}}>
            <Text style={{color:'blue', fontWeight:'bold', marginVertical:2}}>{size}</Text>
    <Text style={{color:'#4d4d4d', fontWeight:'bold', marginVertical:2}}>{name}</Text>
            <Text style={{color:'#4d4d4d', fontWeight:'800', marginVertical:2}}>${cost}/night</Text>
            <StarRating
                    disable={true}
                    maxStars={5}
                    rating={rating}
                    starSize={10}
                />
          </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    savedLcation:{
        marginVertical:10,
        marginTop:20,
        height: width-105,
        borderColor:'#dddddd', 
        borderWidth:0.5, 
        backgroundColor:'white', 
      },
      itemImage:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'cover'
    }
})

export default SingleLocation
