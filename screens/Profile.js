import React from 'react'
import { View, Text,StyleSheet, Image, Dimensions, Animated, ScrollView } from 'react-native';
import AccountSetting from '../components/Profile/AccountSetting';
import Hosting from '../components/Profile/Hosting';
import Support from '../components/Profile/Support';
import Legal from '../components/Profile/Legal';
// import {} from '../assets/user-icon.png';

const {width} = Dimensions.get('window');
const progressWidth = '75%';

const Verifications = ()=>(
    <View style={styles.verificaions}>
        <Text style={styles.progressText}>1 step Left</Text>
        <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#ffcc00", width: progressWidth}}/>
        </View>
        <Text style={styles.progressInfo}>
            We ask a few things from our users to make their listings convinience.
        </Text>
    </View>
)

const Profile = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <View style={styles.imageView}>
                    <Image source={require('../assets/user-icon.png')} style={styles.userIcon}/>
                </View>
                <View style={styles.headerLeft}>
                <Text style={styles.headerTitle}>Jeff</Text>
                 <Text style={styles.headerText}>View Profile</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Verifications />
                <AccountSetting />
                <Hosting />
                <Support />
                <Legal />
            </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        // paddingHorizontal:18,
        marginBottom:14,
        
    },
    header:{
        marginVertical:28,
        flexDirection:'row',
        borderBottomWidth:3,
        borderColor:'#999999',
        paddingHorizontal:10,
        paddingBottom:10,
        // elevation:1
        
    },
    headerTitle:{
        fontFamily:'Roboto',
        fontSize:35,
        fontWeight:'bold',
        color:'black'
    },
    headerText:{
        color:'#1a1aff',
        fontWeight:'800',
        fontSize:17
    },
    headerLeft:{
        marginLeft:10,
        marginVertical:10,
    },
    imageView:{
        width:width/4-1,
        height:width/4-1,
        marginRight:5
    },
    userIcon:{
       borderRadius:50,
       width:null,
       height:null,
       flex:1,
       resizeMode:'cover'
   },
   body:{
        marginHorizontal:20
   },
   progressText:{
    fontSize:17,
    fontWeight:'800'
   },
   progressBar: {
    flexDirection:'row',
    height: 38,
    width: '100%',
    backgroundColor: '#cccccc',
    borderColor: '#000',
    borderRadius: 0,
    marginTop:10
    
  },
  progressInfo:{
      marginTop:10,
      fontSize:16,
      color:'black'
  },

    
})

export default Profile
