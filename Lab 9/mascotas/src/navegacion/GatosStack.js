import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Gatos from '../pantallas/Gatos';
const Stack= createStackNavigator();
export default function HomeStack(){
return(
    <Stack.Navigator>
    <Stack.Screen name="Gatos" component={Gatos}
    options={{title:'Gatos'}}/>
    </Stack.Navigator>
);
}
