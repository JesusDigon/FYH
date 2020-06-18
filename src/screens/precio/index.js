import * as React from "react";
import {Text, View, ScrollView} from "react-native";
import imagen_pareja from "../../../assets/pareja.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListaFiltros from "../../components/filtros";
import {filtros_precio} from "../../data/filtros";
import getStyles from "../../data/styles";
import { FontAwesome5 } from '@expo/vector-icons';

const styles = getStyles();


export default class Precio extends React.Component{
    constructor(props) {
      super(props)

      this.state = {
         filtros_precio: filtros_precio(),
         cia:"",
         costa:"",
         precio:"",
         afluencia:"",
         route: this.props.route
      };
    };


    SeleccionarPrecio =  filtro  => {
        const {filtros_precio} = this.state;
        filtros_precio.map((f) => f.selected=false);
        const newList = [...filtros_precio];
        const updateIndex = newList.findIndex(t => t.text === filtro.text )
        newList[updateIndex].selected = true;
        this.setState({filtros_precio: newList, precio: filtro.text});
        this.props.navigation.navigate("Resultados",{
            cia: this.state.cia,
            costa: this.state.costa,
            tipo: this.state.tipo,
            afluencia: this.state.afluencia,
            precio: this.state.precio
        });

    };

    componentDidMount = () => {
        this.setState({
            cia: this.state.route.params.cia,
            costa: this.state.route.params.costa,
            tipo: this.state.route.params.tipo,
            afluencia: this.state.route.params.afluencia
        });
    }

    render () {
        const {filtros_precio}= this.state;

        return (
            <ScrollView style={styles.content}>
                <View style={styles.div_text}>
                    <Text style={styles.text}>¿Cúal es tu presupuesto?</Text>
                </View>
                <ListaFiltros
                    Seleccionar={this.SeleccionarPrecio}
                    filtros={filtros_precio}

                />
            </ScrollView>

        )
    }
}