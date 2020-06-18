
import * as React from "react";
import {Text, View, StyleSheet, Image, Button, ScrollView} from "react-native";
import ListaFiltros from "../../components/filtros";
import {filtros_afluencia} from "../../data/filtros";
import getStyles from "../../data/styles";

const styles = getStyles();

export default class Precio extends React.Component{
    constructor(props) {
      super(props)

      this.state = {
         filtros_afluencia:filtros_afluencia(),
         cia:"",
         costa:"",
         precio:"",
         afluencia:"",
         route: this.props.route
      };
    };

    SeleccionarAfluencia =  filtro  => {
        const {filtros_afluencia} = this.state;
        filtros_afluencia.map((f) => f.selected=false);
        const newList1 = [...filtros_afluencia];
        const updateIndex1 = newList1.findIndex(t => t.text === filtro.text )
        newList1[updateIndex1].selected = true;
        this.setState({filtros_afluencia: newList1, afluencia: filtro.text});
        this.props.navigation.navigate("Precio",{
            cia: this.state.cia,
            costa: this.state.costa,
            tipo: this.state.tipo,
            afluencia: filtro.text
        });

    };

    componentDidMount = () => {
        this.setState({
            cia: this.state.route.params.cia,
            costa: this.state.route.params.costa,
            tipo: this.state.route.params.tipo});
    }

    render () {
        const {filtros_afluencia}= this.state;

        return (
            <ScrollView style={styles.content}>
                <View style={styles.div_text}>
                    <Text style={styles.text}>¿Que tipo de afluencia esperas encontrar en tu destino?</Text>
                </View>
                <ListaFiltros
                    Seleccionar={this.SeleccionarAfluencia}
                    filtros={filtros_afluencia}
                    />
            </ScrollView>

        )
    }
}



