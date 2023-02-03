import {
    Button,
    FlatList,
    RefreshControl,
    ScrollView,
    SectionList,
    StyleSheet,
    Text,
    TextInput, ToastAndroid,
    View,
} from "react-native";

import React, {useContext} from 'react'

import { ColorButton } from "./CustomButton";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import HomeApp, { Home } from "./screens/Home";
import ProfileApp, { Profile } from "./screens/Profile";
import { HomeScreen } from "./HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import LoginApp from "./screens/Login";
import CounterApp from "./screens/CounterApp";
import { Provider } from 'react-redux';
import { store } from "./screens/src/store/store";
import { InitProvider, InitContext } from "./screens/src/ContextProvider/ContextProvider";


const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

const Tab = createMaterialBottomTabNavigator();


const App = () => {
 

    return (
       <InitProvider>
         <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" >

                    <Stack.Screen name="Home" component={HomeApp} options={
                        {
                            header: () => null
                        }
                    } />

                    <Stack.Screen name="Profile" component={ProfileApp} />

                
                </Stack.Navigator>
            </NavigationContainer>
       </InitProvider>
           
    

    )

}

export default App


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

    edtBox: {
        borderWidth: 2,
        width: '40%',
        textAlign: "center"

    }

})
{/* <Provider  store = {store}>

    </Provider> */}
{/* <Tab.Navigator
screenOptions={({route}) => ({
    tabBarIcon : ({focused, size, color}) =>{
        let iconName;
        if(route.name === 'Home'){
            iconName = 'autoprefixer';
            size = focused ? 30 : 20;
            color = focused ? 'brown' : 'black';
        } else if(route.name === 'Profile') {
            iconName = 'btc';
            size = focused ? 30 : 20;
            color = focused ? 'brown' : 'black';
        }
        return(<FontAwesome5 name = {iconName} size = {size} color = {color}/>)
    }
})}

>
    <Tab.Screen name="Home" component={HomeApp} options = {{ tabBarBadge:2}}/>
    <Tab.Screen name="Profile" component={ProfileApp} />
</Tab.Navigator> */}

{/* <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeApp}   options = {
    {
        header: () => null
    }
}/>
<Stack.Screen name="Profile" component={ProfileApp}  
/>
</Stack.Navigator>

</NavigationContainer> */}

// const [item, setItem] = useState([
//     { key: '1', name: 'item 1' },
//     { key: '2', name: 'item 2' },
//     { key: '3', name: 'item 3' },
//     { key: '4', name: 'item 4' },
//     { key: '5', name: 'item 5' },
//     { key: '6', name: 'item 6' },
//     { key: '7', name: 'item 7' },
//     { key: '8', name: 'item 8' },
//     { key: '9', name: 'item 9' },
//     { key: '10', name: 'item 10' },
// ])

// const sectionListData = [
//     {
//         title: 'Title 1',
//         data: ['item1', 'item2', 'item3']
//     },
//     {
//         title: 'Title 2',
//         data: ['item1', 'item2', 'item3']
//     },
//     {
//         title: 'Title 3',
//         data: ['item1', 'item2', 'item3']
//     }
// ]




// const onRefreshing = () => {
//     ToastAndroid.show("working",1000)
//     setRefresh(true);
//     setItem([...item, { key: 90, name: 'item 90' }]);
//     setRefresh(false);

// }

// const [edtName,setEdtname] = useState('')

// const [isRefresh, setRefresh] = useState(false)


/*<View style={styles.body}>


  <TextInput
style={styles.edtBox}
placeholder= 'Enter text'
onChangeText={(value) => setEdtname(value)}
keyboardType= 'phone-pad' />



  <Text>{edtName}</Text>

<ColorButton onPressFunction = {onRefreshing}
             title = {"srinath dev"}
/>

<ColorButton onPressFunction = { () => {

}
}
             title = {"srinath dev"} style = {{margin:70}}
/>

</View>*/

/*<SectionList
keyExtractor={(item, index) => index.toString()}
sections={sectionListData}
renderItem={
({ item }) => (

  <Text style={styles.text}>{item}</Text>

)
}

renderSectionHeader={({ section }) => (
  <View style={styles.textbg}>
    <Text style={styles.text}>{section.title}</Text>
  </View>
)}
/>*/


// <FlatList
// keyExtractor={(item, index) => index.toString()}  //generate key automatically
// data={item}
// renderItem= {
//     ({item}) => (
//     <View style={styles.textbg}>
//         <Text style={styles.text}>{item.name}</Text>
//     </View>
//     )
// }
// />



/* <ScrollView
refreshControl={<RefreshControl
refreshing = {isRefresh}
onRefresh={onRefreshing}
/>}
>

{
    item.map((item) => {
    return(
        <View style={styles.textbg} key={item.key}>
        <Text style={styles.text}>{item.name}</Text>
</View>
        )
    })
}

</ScrollView> */
