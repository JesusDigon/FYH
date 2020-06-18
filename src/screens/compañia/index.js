import * as React from "react";
import {Text, View, StyleSheet, Image, Button, ScrollView} from "react-native";
import imagen_amigos from "../../../assets/friends.jpg";
import imagen_pareja from "../../../assets/pareja.jpg";
import imagen_familia from "../../../assets/familia.png";
import imagen_solo from "../../../assets/solo.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListaFiltros from "../../components/filtros";
import {filtros_cia} from "../../data/filtros";
import { SafeAreaView } from "react-native-safe-area-context";
import getStyles from "../../data/styles";
import { FontAwesome5 } from '@expo/vector-icons';

const styles = getStyles();



export default class Compañia extends React.Component{
    constructor(props) {
      super(props)

      this.state = {
         filtros_cia:[],
         cia:"",
         route: this.props.route,
         tipo: ""
      };
    };

    componentDidMount = () => {
        this.setState({
            filtros_cia:filtros_cia(),
            tipo: this.state.route.params.tipo
        });
    }

    Seleccionar =  filtro  => {
        const {filtros_cia} = this.state;
        filtros_cia.map((f) => f.selected=false);
        const newList = [...filtros_cia];
        const updateIndex = newList.findIndex(t => t.text === filtro.text )
        newList[updateIndex].selected = true;
        this.setState({filtros_cia: newList});
        this.setState({cia:filtro.text});
        this.props.navigation.navigate("Costa", {
            cia:filtro.text,
            tipo:this.state.tipo
            })

    }

    render () {
        const {filtros_cia}=this.state;
        return (
            <ScrollView style={styles.content} /*contentContainerStyle={styles.content}*/>
                <View style={styles.div_text}>
                    <Text style={styles.text}>Con quien iniciaras tu aventura?</Text>
                </View>
                <ListaFiltros
                Seleccionar={this.Seleccionar}
                //style={styles.lista}
                filtros={filtros_cia}
                />

            </ScrollView>

        )
    }
}