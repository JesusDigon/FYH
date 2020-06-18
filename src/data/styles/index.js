import {StyleSheet} from "react-native";

const getStyles = () => StyleSheet.create({
    content:{
        display:"flex",
        flex:1,
    },
    div_text:{
        flex:1,
        fontSize:30
    },
    imagen: {
        flex:1,
        resizeMode:"contain",
        width:100,
        height:50,
        borderRadius:10,
        marginTop:10

        //marginTop:50
    },
    text:{
        fontSize:30,
        fontWeight:"bold",
        margin:35,
    },
    buton:{
        borderWidth:2,

        width:40,
        height:40,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        right:10
    },
    text_buton:{
        color: "#fff",
        fontSize: 20,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
    },
    buton_div:{
        flex:1,
        //alignContent:"flex-end",
        //justifyContent:"center",
        alignItems:"center",
        //alignContent:"center",
        margin:20,

    }, 
    text_nombres:{
        fontSize:20,
        color:"#fff"
    }, 
    text_cabecera_somos:{
        color:"#fff",
        fontSize:40,
        padding:20
    },
    text_equipo:{
        color: "#fff",
        fontSize:35,
        padding:10
    },
    text_nombres_propios:{
        color:"#fff",
        fontSize:25,
        padding:10
    }
});

export default getStyles;