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
import { color, Value } from "react-native-reanimated";
import  {useSelector, useDispatch} from 'react-redux'
import { SetName,setAge } from "./src/redux/actions";


export default function LoginApp({navigation}) {

    // const {name, age} = useSelector(state => state.userReducer);
    // const dispatch = useDispatch();

    const press = () =>{

        try {

            // dispatch(SetName(name));
            // dispatch(setAge(age));

            navigation.navigate('Home');
        } catch (error) {
            
        }
   
    }

   
    return(
        <View style = {styles.body}>
            <Text style = {styles.text}>Login</Text>  
            <TextInput style = {[styles.edtBox, {marginTop:20, color:'white'}]} placeholder = "Enter name"
            placeholderTextColor='white' onChangeText={(values) => {
                // dispatch(setName(values));
            }}></TextInput>
            <TextInput style = {styles.edtBox} placeholder = "Age " placeholderTextColor='white' onChangeText={(txt) =>{
                // dispatch(SetAge(Value));
            }}></TextInput>
            <Pressable style = {{backgroundColor:'orange'} } onPress = {press} > 
            <Text style = {[styles.text, ]}>
             Login    
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
        backgroundColor: 'purple',
    },

    text: {
        fontSize: 20,
        color: 'white',
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
        textAlign:"center",
        borderRadius: 6,
        borderColor:'white',
        marginBottom:20,
        color:'white',
        

        

    }

})
