import {
    Button,
    FlatList,
    Pressable,
    RefreshControl,
    ScrollView,
    SectionList,
    StyleSheet,
    Text,
    TextInput, ToastAndroid,
    View,
} from "react-native";
import  {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { InitContext } from "./src/ContextProvider/ContextProvider";
import React, {useContext} from 'react'



export default function ProfileApp({navigation}) {

    const { num,setNum} = useContext(InitContext);

    const press = () =>{
        navigation.goBack();
    }

   
    return(
        <View style = {styles.body}>
            <Text style = {styles.text}>Profile</Text>  
            <Pressable style = {{backgroundColor:'green'} } onPress = {press} > 
            <Text style = {styles.text}>
              {num}     
            </Text>
            </Pressable>  
           
              
        </View>
        

    )

}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    text: {
        fontSize: 20,
        color: 'black',
        margin: 20
    },

    textbg: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 15,
        backgroundColor: 'yellow'
    },

    edtBox:{
        borderWidth:2,
        width:'40%',
        textAlign:"center"

    }

})
