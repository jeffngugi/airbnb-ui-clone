import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Platform, StatusBar, ScrollView, Image, Dimensions, Animated} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import Category from '../components/Explore/Category';
import Home from '../components/Explore/Home';
import Tag from '../components/Explore/Tag';
const Explore = () => {

    const [headerHeight, setheaderHeight] = useState(80)


    useEffect(() => {
         if(Platform.OS == "android"){
             setheaderHeight(120)
         }
    }, [])

    const {height, width} = Dimensions.get('window');
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex:1}}>
                <View style={{height:headerHeight, backgroundColor: 'white', borderBottomWidth:1,borderBottomColor:'#dddddd'}}>
                    <View style={{flexDirection:'row', padding:10, backgroundColor:'white', marginHorizontal:20, shadowOffset:{width:0, height:0}, shadowColor:'black', elevation:1, marginTop:15}}>
                        <Icon name='ios-search' size={20} style={{marginTop:13, marginRight:5}}/>
                        <TextInput 
                            placeholder='Try Nairobi'
                            placeholderTextColor='grey'
                        underlineColorAndroid='transparent'
                            style={{flex:1, fontWeight:'700', backgroundColor:'white', }}
                        />
                    </View>

                <Animated.View style={{flexDirection:'row', marginHorizontal:20, position:'relative',top:10}}>
                    <Tag name='Guest'/>
                    <Tag name='Dates' />
                </Animated.View>

                </View>
                <ScrollView
                   scrollEventThrottle={16} 
                //    onScroll={Animated.event(
                //        [
                //            {nativeEvent:{contentOffSet:{y:scrollY}}}
                //        ]
                //    )}
                >
                    <View style={{flex:1, backgroundColor:'white'}}>
                        <Text style={{fontSize:24, fontWeight:'700', paddingHorizontal:20}}>What can we help you find, Jeff?</Text>
                        <View style={{height:130, marginTop:20}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <Category name='Home' imageUri={require('../assets/home.jpg')}/>
                                <Category name='Experience' imageUri={require('../assets/experiences.jpg')}/>
                                <Category name='Restaraunt' imageUri={require('../assets/restaurant.jpg')}/>
                            </ScrollView>
                        </View>
                        <View style={{marginTop:40, paddingHorizontal:20}}>
                            <Text style={{fontSize:24, fontWeight:'700'}}>Introducing airbnb plus</Text>
                            <Text style={{marginTop:10, fontWeight:'100'}}>Introducing airbnb plus</Text>
                            <View style={{width: width -40, height:200, marginTop:20}}>
                                 <Image 
                                    style={{height:null, width:null, resizeMode:'cover', flex:1, borderRadius:5, borderWidth:1, borderColor:'#dddddd'}}
                                    source={require('../assets/home.jpg')} 
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:40}}>
                        <Text style={{fontWeight:'700', fontSize:24, paddingHorizontal:20}}>Homes around the world</Text>
                        <View style={{paddingHorizontal:20, marginTop:20, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                           <Home width={width} name='Kikuyu bedsitter' rating={3} location='Kikuyu' price='12' beds='1'/>
                           <Home width={width} name='Kikuyu bedsitter' rating={5} location='Nakuru' price='18' beds='2'/>
                           <Home width={width} name='Kikuyu bedsitter' rating={2} location='Kikuyu' price='32' beds='3'/>
                           <Home width={width} name='Kikuyu bedsitter' rating={3} location='Naivasha' price='22' beds='2'/>
                           <Home width={width} name='Kikuyu bedsitter' rating={1.5} location='Kilimani' price='10' beds='1'/>
                           <Home width={width} name='Kikuyu bedsitter' rating={4} location='Karen' price='48' beds='1'/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Explore
