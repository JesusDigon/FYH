import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,ImageBackground } from 'react-native';
import getStyles from "../../data/styles";
import p1 from "../../../assets/programador1.jpg";
import p2 from "../../../assets/programador2.jpg";
import p3 from "../../../assets/programador3.jpg";
import p4 from "../../../assets/programador4.jpg";
import { ScrollView } from 'react-native-gesture-handler';
import fondo from "../../../assets/fondo3.png";

const styles = getStyles();

export default class Somos extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground source={fondo} style={styles.content}>
      <ScrollView style={[styles.content,{backgroundColor: "rgba(1,116,223,0.1)"}]}>
        <View style={styles.buton_div}>
          <Text style={styles.text_cabecera_somos}> Quienes somos </Text>
        </View>
        <View style={styles.buton_div}>
          <Text style={styles.text_equipo}>Nuestro equipo</Text>
          <View style={styles.buton_div}>
            <Text style={styles.text_nombres_propios}>Jaime zaloña</Text>
            <Image source={p1} style={{width:300, height:300, borderRadius:150}}/>
            <Text style={styles.text_nombres}>Junior developer</Text>
          </View>
          <View style={styles.buton_div}>
            <Text style={styles.text_nombres_propios}>Alberto Ortega</Text>
            <Image source={p2} style={{width:300, height:300, borderRadius:150}}/>
            <Text style={styles.text_nombres}>Junior developer</Text>
          </View>
          <View style={styles.buton_div}>
            <Text style={styles.text_nombres_propios}>Jesús Digón</Text>
            <Image source={p3} style={{width:300, height:300, borderRadius:150}}/>
            <Text style={styles.text_nombres}>Junior developer</Text>
          </View>
          <View style={styles.buton_div}>
            <Text style={styles.text_nombres_propios}>Guillermo Mesonero</Text>
            <Image source={p4} style={{width:300, height:300, borderRadius:150}}/>
            <Text style={styles.text_nombres}>Junior developer</Text>
          </View>
        </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}
