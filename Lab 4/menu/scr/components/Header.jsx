import React from "react";
import { View, Text } from "react-native";
const Header=()=>{
    return(
        <View style={{ paddingVertical: 10, paddingHorizontal: 20, }}>
            <Text style={{  fontSize: 24, fontWeight: "bold", textAlign: "center"}}>Comidas Tipicas</Text>
        </View>
    );
}
export default Header;