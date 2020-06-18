import React from 'react';
import { FlatList, ScrollView, Text, View, StyleSheet, Linking, Button , Image, ActivityIndicator} from 'react-native';
import imagen_eroor from "../../../assets/404.jpg";
import * as firebase from 'firebase';



const styles = StyleSheet.create({
  content:{
    //alignContent:"center",
    //alignItems:"center",
    paddingBottom:20
  },
 cabecera: {
   fontSize:30,
   margin:20,
   textAlign:"center"
 },
 textosAflYPrecio:{
   fontSize:20,
   color: "blue"
 },
 textDescripcion:{
   fontSize:18,
   paddingTop:10,
   paddingBottom: 10
 }
});


export default class Resultados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cia:"",
      tipo: "",
      afluencia: "",
      precio: "",
      costa: "",
      route: this.props.route,
      navigation:this.props.navigation,
      refreshing:false,
      datos: [],
      datosFin:[],
      loading:true
    };
  }

//Función para pintar linea separadora entre los resultados
renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'red',
        height: 0.5,
        width:"80%",
        justifyContent:"center",
        marginLeft:"10%"
      }}
    />
  );

  //Función para cambiar el valor de precio al de la bbdd
  PonerValorPrecio = (precio) => {
    switch (precio) {
      case "Bajo": this.setState({precio : "€"});return "€";
      case "Medio" : this.setState({precio : "€€"});return "€€";
      case "Alto" : this.setState({precio : "€€€"});return "€€€";
      default: this.setState({precio : "Indiferente"});return "Indiferente";
    }
  }

  RecuperarDatos =  () => {
    const cia = this.state.route.params.cia;
    const precio = this.PonerValorPrecio(this.state.route.params.precio);
    const afluencia = this.state.route.params.afluencia;
    const costa = this.state.route.params.costa;
    const tipo = this.state.route.params.tipo;

//conulta a la base de datos
      firebase.database().ref().orderByChild("d_tipo_turismo").equalTo(tipo).on('value', (snapshot) => {

        //le doy al id el valor de la clave en la BBDD
        let id= snapshot.key;

        //recorro los resultados y compruebo qué valores coinciden con la busqueda del usuario
        snapshot.forEach((snap) => {
          if(snap.val().d_compania===cia  &&
            (snap.val().d_tipo===costa || costa==="Indiferente" ) &&
            (snap.val().d_precio===precio || precio ==="Indiferente" ) &&
            (snap.val().d_afluencia===afluencia || afluencia==="Indiferente")){

              //obtengo la url de la imagen correspondiente con cada valor para almacenarlo en el state
          firebase.storage().ref().child(snap.val().d_nombre+".jpg").getDownloadURL().then((url)=>{

//Introduzco los valores en el state
              this.setState({datos:[ ...this.state.datos, {nombre: snap.val().d_nombre,
                id:id,
                descripcion:snap.val().d_descripcion,
                cia:snap.val().d_compania,
                costa:snap.val().d_tipo,
                afluencia:snap.val().d_afluencia,
                precio:snap.val().d_precio,
                link: snap.val().d_link,
                coordenadas: snap.val().d_coor,
                imagen :url}]});

                //si falla la descarga de la imagen le pongo otro valor por defecto
                }).catch((error)=>{
                  this.setState({datos:[ ...this.state.datos, {nombre: snap.val().d_nombre,
                    descripcion:snap.val().d_descripcion,
                    cia:snap.val().d_compania,
                    costa:snap.val().d_tipo,
                    afluencia:snap.val().d_afluencia,
                    precio:snap.val().d_precio,
                    link: snap.val().d_link,
                    coordenadas: snap.val().d_coor,
                    imagen :"url"}]});
                })}})})}

  //Función que se ejecuta cuando la pantalla se carga
  componentDidMount = async () => {
    this.PonerValorPrecio();
    this.RecuperarDatos();
    //Espero 3 segundos para que se hayan recogido los datos de la BD antes de cambiar el loading a false;
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(2000);
    this.setState({ loading:false});
  }

  render() {
    const {datos, loading} = this.state;
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>

        {/*mientras esté cargando: */
        loading && (<ActivityIndicator size="large" style={{flex:1}}/>)}

        {/*Cuando cargando is false, muestro los resultados*/
        !loading && (
        <FlatList

        //ListEmptyComponent define la vista si no hay resultados
        ListEmptyComponent={() => {
          return (
          <View style={styles.content}>
          <Text>Oh no!, parece que no ha habido suerte con tu busqueda, prueba con otros parámetros</Text>
          <Image source={imagen_eroor} style={{width:"100%", height:300,  borderRadius:20, marginTop:10, marginBottom:10}}/></View>
        )}}
          data={datos}
          initialNumToRender={4}
          windowSize={4}
          renderItem={({ item, index }) => {
return(
              <View style={styles.content}>
                <Text style={styles.cabecera}>{item.nombre}</Text>
                <Image style={{width:"100%",height:300}} source={{uri: item.imagen}}/>
                <Text style={styles.textDescripcion}>{item.descripcion}</Text>
                  <View style={{ flexDirection:"row", justifyContent:"space-around", marginTop:10 }}>
                    <Text style={styles.textosAflYPrecio}>Afluencia: {item.afluencia}</Text>
                    <Text style={styles.textosAflYPrecio}>Precio: {item.precio}</Text>
                  </View>
                  <View style={{ flexDirection:"row", justifyContent:"space-around", marginTop:10 }}>
                    <Button
                      title="Web"
                      style={{color: 'blue', margin:10}}
                      onPress={() => Linking.openURL(item.link)} />
                    <Button
                      title="Ver en mapa"
                      style={{color: 'blue'}}
                      onPress={() => Linking.openURL("https://maps.google.com/?q="+item.nombre)} />
                  </View>
              </View>)
          }}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.nombre}
        />)
        }
      </View>
    );
  }
}
