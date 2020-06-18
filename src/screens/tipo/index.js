import * as React from "react";
import {Text, View, StyleSheet, Image, Button, ListView} from "react-native";
import ListaFiltros from "../../components/filtros";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import {filtros_tipo} from "../../data/filtros";
import getStyles from "../../data/styles";


const styles = getStyles();

export default class Tipo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filtros_tipo: [],
            isTrue: true,
            value: null,
            tipo: ""}
       }

    componentDidMount(){
        this.setState({filtros_tipo: filtros_tipo()});
    }

    Seleccionar =  filtro  => {
        const {filtros_tipo} = this.state;
        filtros_tipo.map((f) => f.selected=false);
        const newList = [...filtros_tipo];
        const updateIndex = newList.findIndex(t => t.text === filtro.text )
        newList[updateIndex].selected = true;
        this.setState({filtros_tipo: newList, tipo: filtro.text });
        this.props.navigation.navigate("cia", {tipo:filtro.text})

    }

    render () {
        return (
            <ScrollView style={styles.content}>
                <View style={styles.div_text}>
                    <Text style={styles.text}>¿Cuál es la experiencia principal que buscas realizar en tu destino? prueba</Text>
                </View>
                <ListaFiltros
                filtros={this.state.filtros_tipo}
                Seleccionar={this.Seleccionar} />
            </ScrollView>
        )
    }
}