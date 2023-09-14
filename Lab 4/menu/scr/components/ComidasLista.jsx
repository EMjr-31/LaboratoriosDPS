import React from "react";
import { View, Text,Image , FlatList} from "react-native";
import comidasTipicas from "./data/comidasTipicas.js";

const ComidasLista = () => {
    return (
        <FlatList 
            data={comidasTipicas}
            ItemSeparatorComponent={()=> <Text></Text>}
            renderItem={({item: comida})=>(
                <View key={comida.id}  style={{padding:5, paddingBottom:5 , paddingTop:5, flexDirection: "row",justifyContent: "space-between",alignItems: "center",borderRadius: 20, backgroundColor:'white',height:140, overflow:"hidden", shadowOffset: { width: 6,  height: 6,}, shadowOpacity: 0.5, shadowRadius: 8,elevation: 16, }}>
                    <Image 
                        source={{uri: comida.img}}
                        style={{ width: 120, height: 120 , borderRadius:100}}
                    />
                    <View style={{ flex: 1, padding: 20}}>
                        <Text style={{ fontWeight: "bold",fontSize: 20, marginBottom:5}}>{comida.nombre}</Text>
                        <Text>{comida.descripcion}</Text>
                    </View>
                </View>
            )}
        >

        </FlatList>
    );
}

export default ComidasLista;