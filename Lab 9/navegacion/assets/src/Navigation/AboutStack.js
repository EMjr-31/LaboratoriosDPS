import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
const Stack= createStackNavigator();
export default function HomeStack(){
return(
    <Stack.Navigator>
        <Stack.Screen name="about" component={Home}
        options={{title:'About'}}/>
    </Stack.Navigator>
);
}
