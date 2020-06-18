import React, { Fragment } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import iconoOk from "../../../assets/check.png";

const styles= StyleSheet.create({
    container:{
        flex:4,
        alignItems:"center",
    },
    div:{
        alignItems:"center",
        justifyContent:"center",
        margin:10,

    },
    imagen:{
        width:180,
        height:180,
        borderRadius:100,
        overflow:"hidden",
        resizeMode:"cover",
        opacity:1,
    },
    text:{
        fontSize:25,
        color:"rgba(1,116,223,1)"
    }
});


const ListaFiltros = ({filtros, Seleccionar }) => {
    renderItem = filtro =>  (
        <TouchableOpacity
        onPress={() => Seleccionar(filtro)}
        style={styles.div}>
            <ImageBackground  style={[styles.imagen,
                {opacity: filtro.selected ? 0.5 : 1},
                 ]}
            source={filtro.foto}>
            {(filtro.selected) ?<Image source={iconoOk} style={{margin:20}}/> : null }

            </ImageBackground>
            <Text style={styles.text}>{filtro.text}</Text>
        </TouchableOpacity>
    );

    return(
    <FlatList
    contentContainerStyle={styles.container}
    data={filtros}
    keyExtractor={filtro => filtro.text}
    renderItem={({item}) => renderItem(item)}
    numColumns="2"
    />
    );
};

export default ListaFiltros;
