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
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addtion,subtraction } from "./src/store/actions";

const CounterApp = (props) => {


    const data = useSelector((state) => state.counter);
    const dispatch = useDispatch();


    return (
        <View style = {{flex:1, justifyContent:'center', alignItems: 'center'}}>
            <Button title="Add" onPress={() => dispatch(addtion())}>

            </Button>

            <Text style = {{fontSize:20, color:'black'}}>
                {data}
            </Text>
            <Button title="minus" onPress={() => dispatch(subtraction())}>

            </Button>
        </View>
    )
}

export default CounterApp;