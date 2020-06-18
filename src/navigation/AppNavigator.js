import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import  HomeScreen  from '../screens/home';
import { Button } from "react-native";
import Compañia from "../screens/compañia";
import Costa from "../screens/costa_interior";
import Precio from "../screens/precio";
import Tipo from "../screens/tipo";
import Resultados from "../screens/resultados";
import Afluencia from "../screens/afluencia";
import Somos from "../screens/somos";
import Contacto from "../screens/contacto";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const Stack= createStackNavigator();

function HomeStack () {

return(
<Stack.Navigator  initialRouteName="Tipo">
<Stack.Screen name="cia" component={Compañia}
      options={{
          title: 'FYH',
          headerStyle: {
            backgroundColor: '#0080FF',
          },
          headerTitleStyle: {
              fontWeight: 'bold',

            }}}
          />
<Stack.Screen name="Costa" component={Costa}
      options={{
          title: 'FYH',
          headerStyle: {
            backgroundColor: '#0080FF',
          },
          headerTitleStyle: {
              fontWeight: 'bold',

            }}}
          />
          <Stack.Screen name="Precio" component={Precio}
      options={{
          title: 'FYH',
          headerStyle: {
            backgroundColor: '#0080FF',
          },
          headerTitleStyle: {
              fontWeight: 'bold',

            }}}
          />
          <Stack.Screen name="Tipo" component={Tipo}
      options={{
          title: 'FYH',
          headerStyle: {
            backgroundColor: '#0080FF',
          },
          headerTitleStyle: {
              fontWeight: 'bold',



            }}}
          />
          <Stack.Screen name="Afluencia" component={Afluencia}
          options={{
              title: 'FYH',
              headerStyle: {
                backgroundColor: '#0080FF',
              },
              headerTitleStyle: {
                  fontWeight: 'bold',

                }}}
              />
          <Stack.Screen name="Resultados" component={Resultados}
      options={{
          title: 'FYH',
          headerStyle: {
            backgroundColor: '#0080FF',
          },
          headerTitleStyle: {
              fontWeight: 'bold',

            }}}
          />
</Stack.Navigator>
)};


export default class AppNavigator extends React.Component {
render () {

    return (
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName="Inicio"
    tabBarOptions={
      {
      activeTintColor:"black",
      activeBackgroundColor:"rgba(1,116,223,0.5)",
      inactiveBackgroundColor:"rgba(1,116,223,1)",
      inactiveTintColor:"white",
    }}
    >
    <Tab.Screen name="Inicio" component={HomeScreen}
    options={{
      tabBarLabel:"Inicio",
      tabBarIcon:() => (<AntDesign name="home" size={24} color="white" />)
    }} />
    <Tab.Screen name="Busqueda" component={HomeStack}
    options={{
      tabBarLabel:"Busqueda",
      tabBarIcon:() => (<FontAwesome name="plane" size={24} color="white" />)
    }} />
    <Tab.Screen name="Quienes somos" component={Somos}
    options={{
      tabBarLabel:"Quienes Somos",
      tabBarIcon:() => (<Entypo name="users" size={24} color="white" />)
    }} />
    <Tab.Screen name="Contacto" component={Contacto}
    options={{
      tabBarLabel:"Contacto",
      tabBarIcon:() => (<AntDesign name="mail" size={24} color="white" />)
    }} />
  </Tab.Navigator>
</NavigationContainer>
);
    }
}