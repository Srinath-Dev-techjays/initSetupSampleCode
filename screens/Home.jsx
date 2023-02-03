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
import GlobalStyles from "./GlobalStyles";
import  {useSelector, useDispatch} from 'react-redux'
import { SetName,setAge } from "./src/redux/actions";
import React, {useContext} from 'react'
import { InitContext } from "./src/ContextProvider/ContextProvider";


export default function HomeApp({navigation}) {

    const { num,setNum} = useContext(InitContext);


    const press = () =>{
       setNum(num+1)
    }
    const nav = () =>{
        navigation.navigate("Profile");
    }

   
    return(
        <View style = {styles.body}>
            <Text style = {styles.text}>Home</Text>  

            <Text style = {[styles.text,GlobalStyles.customFont]}>
           {num}
            </Text>

            <Pressable style = {{backgroundColor:'red'} } onPress = {press} > 
            <Text style = {[styles.text,GlobalStyles.customFont]}>
           Increase
            </Text>
            </Pressable>

            <Pressable style = {{backgroundColor:'yellow', marginTop:20} } onPress = {nav} > 
            <Text style = {[styles.text,GlobalStyles.customFont]}>
           Click
            </Text>

            <Text style = {[styles.text,GlobalStyles.customFont]}>
            
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
        margin: 20,
       
    },

    textbg: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 15,
        fontStyle: 'bold',
        backgroundColor: 'yellow'
    },

    edtBox:{
        borderWidth:2,
        width:'40%',
        textAlign:"center"

    }

})

