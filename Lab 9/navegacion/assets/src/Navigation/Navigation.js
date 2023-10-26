import React from 'react';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ContactStack from './ConstactStack';
import AboutStactk from './AboutStack';

const Tab=createBottomTabNavigator();
export default function Navigation(){
return(
    <Tab.Navigator>
        <Tab.Screen name="home" component={Home} options={{title:'Home'}}/>
        <Tab.Screen name="contact" component={Contact} options={{title:'Contact'}}/>
        <Tab.Screen name="about" component={About} options={{title:'About'}}/>
    </Tab.Navigator>
);
}
