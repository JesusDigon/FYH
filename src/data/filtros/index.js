import imagen_amigos from "../../../assets/friends.jpg";
import imagen_pareja from "../../../assets/pareja.jpg";
import imagen_familia from "../../../assets/familia.png";
import imagen_solo from "../../../assets/solo.jpg";
import imagen_costa from "../../../assets/costa.jpg";
import imagen_interior from "../../../assets/interior.jpg";
import precio_bajo from "../../../assets/precio_bajo.jpg";
import precio_medio from "../../../assets/precio_medio.jpg";
import precio_alto from "../../../assets/precio_alto.jpg";
import afluencia_baja from "../../../assets/afluencia_baja.png";
import afluencia_media from "../../../assets/afluencia_media.png";
import afluencia_alta from "../../../assets/afluencia_alta.png";
import cultural from "../../../assets/cultural.jpg";
import festival from "../../../assets/festival.jpg";
import noche from "../../../assets/noche.jpg";
import rural from "../../../assets/rural.jpg";
import salud from "../../../assets/salud.jpg";
import shopping from "../../../assets/shopping.png";
import deportes from "../../../assets/deportes.png";
import sol from "../../../assets/costa.jpg";
import indiferencia from "../../../assets/indiferencia.png";



const filtros_cia = () => [{
    text: "Amigos",
    foto: imagen_amigos,
    selected: false
},{
    text: "Sol@",
    foto: imagen_solo,
    selected: false
},{
    text: "Pareja",
    foto:imagen_pareja,
    selected: false
},{
    text: "Familia",
    foto:imagen_familia,
    selected: false
}
];

const filtros_costa = () => [{
    text:"Costa",
    foto: imagen_costa,
    selected: false
},{
    text:"Interior",
    foto: imagen_interior,
    selected: false
},{
     text:"Indiferente",
    foto: indiferencia,
    selected: false
}];

const filtros_precio = () => [{
    text: "Bajo",
    foto: precio_bajo,
    selected: false
},{
    text: "Medio",
    foto: precio_medio,
    selected: false
},{
    text: "Alto",
    foto: precio_alto,
    selected: false
},{
    text:"Indiferente",
   foto: indiferencia,
   selected: false
}];

const filtros_afluencia = () => [{
    text: "Baja",
    foto: afluencia_baja,
    selected: false
},{
    text: "Media",
    foto: afluencia_media,
    selected: false
},{
    text: "Alta",
    foto: afluencia_alta,
    selected: false
},{
    text:"Indiferente",
   foto: indiferencia,
   selected: false
}];

const filtros_tipo = () => [{
    text: "Cultural",
    foto: cultural,
    selected: false
},{
    text: "Festival",
    foto: festival,
    selected: false
},{
    text: "Turismo de noche",
    foto: noche,
    selected: false
},{
    text: "Rural",
    foto: rural,
    selected: false
},{
    text: "Salud",
    foto: salud,
    selected: false
},{
    text: "Sol y playa",
    foto: sol,
    selected: false
},{
    text: "Shopping",
    foto: shopping,
    selected: false
}];

export {filtros_cia, filtros_costa, filtros_precio, filtros_afluencia, filtros_tipo};
