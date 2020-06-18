import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import getStyles from "../../data/styles";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import fondo1 from "../../../assets/fondo4.png";

const styles = getStyles();

export default class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  render() {
    return (
      <ImageBackground source={fondo1} style={[styles.content,{backgroundColor: "rgba(1,116,223,1)"}]} >
        <View style={styles.buton_div}>
          <Text style={styles.text_cabecera_somos}> Contacta con nosotros </Text>
          <Text>¿Tienes alguna duda, o sugerencia acerca de nuevos o destinos o cualquier otra mejora que 
            nos quieras expresar? ¡Hazlo aquí!:
          </Text>
        </View>
        <View>
          <TextInput></TextInput>
        </View>
      </ImageBackground>
    );
  }
}
