import React from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Upcoming from '../components/Trips/Tabs/Upcoming';
import Past from '../components/Trips/Tabs/Past';

const TopTab = createMaterialTopTabNavigator();
const {width} = Dimensions.get('window');
const Tabs = () =>{
    return(
        <TopTab.Navigator
        tabBarOptions={{
            labelStyle: { fontSize: 12, },
            tabStyle: { width: 100 },
            style: { backgroundColor: 'white',elevation: 0 },
            
          }}
          initialLayout={{
              width: width -40
          }}
         
        >
            <TopTab.Screen name='Upcoming' component={Upcoming} />
            <TopTab.Screen name='Past' component={Past} />
        </TopTab.Navigator>
    )
}


const Trips = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.headerTitle }>
              <Text style={styles.headerText}>Trips</Text>
            </View>
            <View style={styles.tab}>
                <Tabs />
            </View>
        </View>
        
        </ScrollView>
        
        
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:18,
        marginTop:20,
        backgroundColor:'white'

    },
    headerTitle:{
        marginBottom:20,
        marginTop:20
    },  
    headerText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000d00'
    },
    tab:{

    }
})

export default Trips
