import React from "react";
import { Text, View, StatusBar, Image, TouchableWithoutFeedback } from "react-native";
import ComidasLista from "./ComidasLista";
import Header from "./Header";

const Main = () => {
    return (
        <View style={{ marginTop: StatusBar.currentHeight, flexGrow: 1 }}>
            <Header/>
            <ComidasLista />
        </View>
    );
}

export default Main;
