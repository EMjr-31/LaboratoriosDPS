import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GatosStack from './GatosStack';
import PerrosStack from './PerrosStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab=createBottomTabNavigator();
export default function Navigation(){
return(
<Tab.Navigator>
    <Tab.Screen name="Perros" component={PerrosStack} options={{title:'Perros'}}/>
    <Tab.Screen name="Gatos" component={GatosStack} options={{title:'Gatos'}}/>
</Tab.Navigator>
);
}
