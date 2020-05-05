import React from 'react';
import {View, Image, Text} from 'react-native';
import StarRating from 'react-native-star-rating';

const Home = ({width, rating, price, name, location, beds}) => {

    return (
         <View style={{width:width/2 -30, height:width/2 -30, borderColor:'#dddddd', borderWidth:0.5, backgroundColor:'white', marginTop:3}}>
            <View style={{flex:1}}>
                <Image 
                style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                source={require('../../assets/home.jpg')}
                />
            </View>
            <View style={{flex:1, alignItems:'flex-start', justifyContent:'space-evenly', paddingLeft:10}}>
                <Text style={{fontSize:10, color:'#b63838'}}>{name} - {beds} Beds</Text>
                <Text style={{fontSize:12, fontWeight:'bold'}}>{location}</Text>
                <Text style={{fontSize:10, fontWeight:'bold'}}>${price}</Text>
                <StarRating
                    disable={true}
                    maxStars={5}
                    rating={rating}
                    starSize={10}
                />
            </View>
        </View>
    )
}

export default Home
